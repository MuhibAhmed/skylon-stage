import {
    Alert,
    Box,
    Button, Chip,
    FormControl,
    MenuItem,
    Select, SelectChangeEvent,
    Snackbar,
    Tab,
    Tabs,
    TextareaAutosize,
    Typography
} from "@mui/material";
import React, {useState} from "react";
import RelatedTags from "./RelatedTags";
import HotQuestions from "./HotQuestions";
import {Post} from "./PostBox";
import SearchBar from "../SearchBar";
import PostsList from "./PostsList";
import {useRouter} from "next/router";
import {supabase} from "../../../utils/supabase";
import {v4 as uuidv4} from 'uuid';
import {Topic} from "../../../constants";

type ForumProps =
    {
        questionsList: Post[]
        topicsList: Topic[]
    }
const Forum = (props: ForumProps) => {


    interface TabPanelProps {
        children?: React.ReactNode;
        index: number;
        value: number;
    }

    function TabPanel(props: TabPanelProps) {
        const {children, value, index, ...other} = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{p: 3}}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const [value, setValue] = useState<number>(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const tabsNames = ['Newest', 'Active', 'Unanswered']

    const [postData, setPostData] = useState<Post>({id:"", body: "", title: "", topics: []});
    const [loading, setLoading] = useState<boolean>(false);
    const [alertOpen, setAlertOpen] = useState(false);
    const router = useRouter()


    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {

        setAlertOpen(false);
    };


    async function postQuestion(event: any) {
        setLoading(true)

        console.log("Loading!!")
        event.preventDefault()

        await supabase.from('posts')
            .insert({id: uuidv4(), body: postData.body, title: postData.body, topics:postData.topics}).then((res) => console.log(res));
        await router.replace(router.asPath)
        setAlertOpen(true)
        setLoading(false)

        console.log("Done!")
    }

    const [topicsString, setTopicsString] = React.useState<string[]>([]);

    const handleSelectChange = (event: SelectChangeEvent<typeof topicsString>) => {
        const {
            target: { value },
        } = event;
        setTopicsString(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
        const selectValues = event.target.value as string[]
        const newTopics: Topic[] = selectValues.map((selectValue) => ({
            name: selectValue,
            color: props.topicsList.find(topic => topic.name == selectValue)!!.color || '',
        }))
        console.log(newTopics)
        setPostData({...postData, topics:newTopics})
        console.log(postData)
    };

    console.log(props.questionsList)

    return (

        <Box sx={{display: 'flex'}} flexDirection={{xs: 'column', md: 'row'}}>
            <Box sx={{display: 'flex', flexDirection: 'column'}} flex={0.6}>
                <SearchBar/>
                <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleClose}>
                    <Alert severity="success">Question successfully posted </Alert>
                </Snackbar>
                <form onSubmit={postQuestion}>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} mb={4} mt={6}>
                        <Typography variant={'h5'} sx={{color: '#310979', fontWeight: 700}}>
                            Questions tagged
                        </Typography>
                        <Button variant={"contained"} sx={{backgroundColor: '#6A0DAD'}} type={"submit"}>
                            Ask a question
                        </Button>
                    </Box>
                    <Box sx={{mb: 2}}>
                        <Typography sx={{typography: {'sm': 'body1', 'xs': 'body2'}, mb: 1}}> Title </Typography>
                        <TextareaAutosize id={"question-text-title"} maxLength={200}
                                          onChange={(event) => setPostData({
                                              ...postData,
                                              title: event.target.value
                                          })}></TextareaAutosize>
                        <Typography sx={{typography: {'sm': 'body1', 'xs': 'body2'}, mb: 1}}> Body </Typography>
                        <TextareaAutosize id={"question-text-body"} onChange={(event) => setPostData({
                            ...postData,
                            body: event.target.value
                        })}></TextareaAutosize>
                        <Typography sx={{typography: {'sm': 'body1', 'xs': 'body2'}, mb: 1}}> Topics </Typography>
                        <FormControl sx={{minWidth: 120}}>
                            <Select
                                multiple={true}
                                value = {topicsString}
                                onChange={handleSelectChange}
                                inputProps={{
                                    name: 'topics',
                                    id: 'uncontrolled-native',
                                }}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                        {selected.map((value) => (
                                            <Chip key={value} label={value} />
                                        ))}
                                    </Box>
                                )}
                            >

                                {

                                    props.topicsList.map((topic) => (
                                            <MenuItem value={topic.name}>{topic.name}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Box>
                </form>
                <Box>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
                          TabIndicatorProps={{sx: {backgroundColor: '#6A0DAD'}}} sx={{
                        '& button.Mui-selected': {color: '#310979'},
                    }}>
                        {
                            tabsNames.map((tabName, index) => (
                                <Tab sx={{color: '#C6C6C6'}} label={<Typography variant={'body2'}
                                                                                sx={{fontFamily: 'Inter Semi-Bold'}}>{tabName}</Typography>} {...a11yProps(index)}
                                     key={index}/>
                            ))
                        }
                    </Tabs>
                </Box>
                {
                    tabsNames.map((tabName, index) => (
                        <TabPanel value={value} index={index} key={index}>
                            <PostsList posts={props.questionsList}/>
                        </TabPanel>
                    ))
                }
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column'}} p={1} ml={1} mt={{xs: '5%', md: 0}} flex={0.4}>
                <RelatedTags/>
                <HotQuestions/>
            </Box>
        </Box>
    );
};
// This gets called on every request

export default Forum