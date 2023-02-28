import {Alert, Box, Button, DialogActions, DialogContent, Snackbar, TextareaAutosize, Typography} from "@mui/material";
import {getComments, getQuestionDetails, getQuestionsPaths} from "../../constants";
import React, {useState} from "react";
import {Post} from "../../components/home/forum/PostBox";
import {GetStaticPaths, GetStaticProps, NextPage} from 'next'
import {useRouter} from "next/router";
import PostsList from "../../components/home/forum/PostsList";
import {supabase} from "../../utils/supabase";
import {v4 as uuidv4} from 'uuid';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

type QuestionSlugProps = {
    post: Post,
    comments: Post[],
}


const QuestionPage: NextPage<QuestionSlugProps> = (props) => {
    console.log(props.comments)

    const [commentText, setCommentText] = useState<string>("");
    const handleClose = () => {
        console.log(open)
        console.log("Closing dialog")
        setCommentText(commentText)
        setOpen(false)
    };

    const [loading, setLoading] = useState<boolean>(false);
    const [alertOpen, setAlertOpen] = useState(false);
    const [open, setOpen] = useState(false);

    const router = useRouter()

    async function postComment(event:any, post_id:any) {
        setLoading(true)

        event.preventDefault()

        const {data, error} = await supabase.from('comments')
            .insert({
                id: uuidv4(),
                post_id: post_id,
                body: commentText,
            });
        if(!error) {

        }

        await router.replace(router.asPath).then(() => {
            setOpen(false)
            setLoading(false)
            setAlertOpen(true)
        })
    }


    return (
        <Box display={'flex'} flexDirection={'column'}
             sx={{padding: 2, my: 3}}>
            <Typography variant={'h5'} sx={{color: '#310979'}}> {props.post.title}</Typography>
            <Typography variant={'body2'} sx={{'color': '#A7A7A8'}}>{props.post.body}</Typography>
            <PostsList posts={props.comments}/>
            <Snackbar open={alertOpen} autoHideDuration={2000} onClose={() => setAlertOpen(false)}>
                <Alert severity="success">Comment successfully posted </Alert>
            </Snackbar>

            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} mb={4} mt={6}>

                <div>
                    <Button variant={"contained"} sx={{backgroundColor: '#9126de'}} onClick={() => setOpen(true)}>
                        Add a comment
                    </Button>
                    <Dialog onClose={handleClose} open={open} fullWidth={true} PaperProps={{
                        style: {
                            padding: 12
                        },
                    }}>
                        <DialogTitle>Add a comment </DialogTitle>
                        <form onSubmit={(e) => postComment(e,props.post.id)}>
                            <DialogContent dividers>
                                <TextareaAutosize style={{height: '100px'}} id={"post-comment"}
                                                  onChange={(event) => setCommentText(event.target.value)}
                                                  defaultValue={""}></TextareaAutosize>
                            </DialogContent>
                            <DialogActions>
                                <Button autoFocus type={"submit"}>
                                    Post comment
                                </Button>
                            </DialogActions>
                        </form>



                    </Dialog>
                </div>

            </Box>

        </Box>
    )
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    let postsData = await getQuestionDetails(params?.id?.toString())
    let comments = await getComments(params?.id?.toString())
    console.log("COmments!! ", comments)
    return {
        props: {
            post: postsData[0],
            comments
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    let paths = await getQuestionsPaths()
    return {paths, fallback: false}
}

export default QuestionPage