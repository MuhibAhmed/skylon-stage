import React from "react";
import {Box, Typography} from "@mui/material";
import PostBox, {Post} from "./PostBox"

type QuestionsListProps = {
    posts: Post[]
}

const PostsList = (props: QuestionsListProps) => {

    const postsList = props.posts

    return (
        <div>

            <Typography sx={{color: '#310979'}}>{postsList.length} questions</Typography>

            <Box sx={{maxHeight: {xs: '500px', lg: '1000px'}, overflow: 'auto'}}>
                {
                    postsList.map((question, index) => (
                        <PostBox post={question} key={index}></PostBox>
                    ))
                }
            </Box>

        </div>
    )
}

export default PostsList