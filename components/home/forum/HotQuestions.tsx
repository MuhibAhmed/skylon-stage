import React from "react";
import {Box, Typography} from "@mui/material";
import {ArrowForwardIos} from "@mui/icons-material";

type HotQuestionProps = {}

const HotQuestions = (props: HotQuestionProps) => {

    const questions =
        [
            {
                name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
            },
            {
                name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
            },
            {
                name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
            },
        ]
    return (
        <Box display={'flex'} flexDirection={'column'}
             sx={{backgroundColor: 'white', borderRadius: '20px', padding: 5, mt: {xs: 2, md: 8}}}>
            <Typography variant={'h5'} sx={{color: '#310979'}}> Hot Questions</Typography>
            {
                questions.map((question, index) => (
                    <Box display={'flex'} key={index} alignItems={'flex-start'} my={1}>
                        <Typography variant={'body2'} sx={{'color': '#A7A7A8'}}>{question.name}</Typography>
                        <ArrowForwardIos sx={{color: '#6A0DAD', ml: 1}}></ArrowForwardIos>
                    </Box>
                ))
            }
        </Box>
    )
}

export default HotQuestions