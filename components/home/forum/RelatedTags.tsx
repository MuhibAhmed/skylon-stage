import {NextPage} from "next";
import React from "react";
import {Box, Chip, Link, Typography} from "@mui/material";
import {East} from "@mui/icons-material";
import {hex2rgb, Topic} from "../../../constants";

type QuestionsByTagProps = {}

const RelatedTags: NextPage<QuestionsByTagProps> = (props) => {

    const topics: Topic[] =
        [
            {
                name: 'Algebra',
                questions: 20,
                color: '#05CD991A'
            },
            {
                name: 'Geometry',
                questions: 40,
                color: '#007CF91A'
            },
            {
                name: 'Physics',
                questions: 30,
                color: '#6A0DAD1A'
            },
            {
                name: 'Biology',
                questions: 30,
                color: '#DAA10F1A'
            },
        ]


    return (
        <Box display={'flex'} flexDirection={'column'}
             sx={{backgroundColor: 'white', borderRadius: '20px', padding: {xs: 2, md: 5}}}>
            <Typography variant={'h5'} sx={{color: '#310979'}}> Related Tags</Typography>
            {
                topics.map((topic, index) => (
                    <Box display={'flex'} key={index} justifyContent={'space-between'} alignItems={'center'} my={1}>
                        <Chip sx={{
                            backgroundColor: hex2rgb(topic.color, '0.1'),
                            color: hex2rgb(topic.color, '1.0'),
                            mr: 2
                        }}
                              label={topic.name}/>
                        <Typography variant={'body2'} sx={{'color': '#A7A7A8'}}>{topic.questions} questions</Typography>
                    </Box>
                ))
            }
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} sx={{color: '#4318FF'}}>
                <Link sx={{color: '#4318FF', fontWeight: 600, textDecoration: 'none', mr: '4px'}}> View all </Link>
                <East/>
            </Box>
        </Box>
    )
}

export default RelatedTags