import {Box} from "@mui/material";
import {Chat} from "../../../constants";
import React from "react";
import Message from "./Message";


type ChatScreenBodyProps =
    {
        chat: Chat
    }
const ChatScreenBody = (props: ChatScreenBodyProps) => {
    const chat = props.chat

    const messages = [
        {
            message: 'hey how are you?',
            sender: true
        },
        {
            message: 'hey how are you?',
            sender: false
        },
        {
            message: 'hey how are you?',
            sender: true,
        },
        {
            message: 'hey how are you?',
            sender: false
        },
        {
            message: 'hey how are you?',
            sender: true,
        },
        {
            message: 'hey how are you?',
            sender: false
        },
        {
            message: 'hey how are you?',
            sender: true,
        },
        {
            message: 'hey how are you?',
            sender: false
        },
        {
            message: 'hey how are you?',
            sender: true,
        },
        {
            message: 'hey how are you?',
            sender: false
        },
        {
            message: 'hey how are you?',
            sender: true,
        },
        {
            message: 'hey how are you?',
            sender: false
        }
    ]
    return (

        <Box display={'flex'} flexDirection={'column'} sx={{maxHeight: {xs: '200px', lg: '80%'}, overflow: 'auto'}}>
            {
                messages.map((message, index) => (
                    <Message message={message}/>
                ))
            }
        </Box>

    );
};

export default ChatScreenBody