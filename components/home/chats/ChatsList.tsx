import {Avatar, Box, ListItemButton, Typography} from "@mui/material";
import {Chat} from "../../../constants";
import React from "react";
import ChatBox from "./ChatBox";
import ChatScreen from "./ChatScreen";


type ConversationsListProps =
    {
        chats: Chat[]
    }

const ChatsList = (props: ConversationsListProps) => {
    return (
        <Box display={'flex'} justifyContent={'space-around'}  sx={{flexDirection:{xs:'column', sm:'row'}, mt:2}}>
            <Box display={'flex'} flexDirection={'column'}>
                <Typography variant={'h4'} fontWeight={600}> People </Typography>
                {
                    props.chats.map((conversation, index) => (
                        <ChatBox key={index} conversation={conversation}/>
                    ))
                }
            </Box>
            <ChatScreen chat={props.chats[0]}/>
        </Box>
    );
};

export default ChatsList