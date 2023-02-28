import {Box, Chip, Link, Paper, Typography} from "@mui/material";
import React from "react";
import {ArrowForward, ArrowForwardIos, ChevronRight, East} from "@mui/icons-material";
import {hex2rgb, Topic} from "../../../constants";



export type Post =
{
    id: string,
    title: string,
    body: string,
    topics: Topic[],

}
type PostBoxProps = {
    post: Post,
}


const PostBox = (props:PostBoxProps) => {

    const question = props.post
    return (
        <Box display={'flex'} flexDirection={'column'} sx={{backgroundColor:'white', borderRadius:'20px', padding:2, my:3}}>
            <Typography variant={'h5'} sx={{color: '#310979'}}> {question.title}</Typography>
            <Typography variant={'body2'} sx={{'color': '#A7A7A8'}}>{question.body}</Typography>
            <Box display={'flex'} sx={{mt: 2}}>
                {
                    question.topics?.map((topic, index) => (
                        <Chip label={topic.name} key={index} sx={{backgroundColor: hex2rgb(topic.color, '0.1'), color: hex2rgb(topic.color, '1.0') , mx: 1}}></Chip>
                    ))
                }
            </Box>
            <Box display={'flex'} sx={{mt: 2}} alignItems={'center'}>
                <Link sx={{textDecoration: 'none', color: '#6A0DAD', marginRight:'4px', fontSize:'12px'}} href={`/posts/${question.id.toLowerCase()}`}>
                    View all
                </Link>
                <East sx={{color: '#6A0DAD', width:'16px', height:'16px'}} />
            </Box>
        </Box>
    )
}

export default PostBox