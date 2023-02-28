import {Avatar, Box, Divider, ListItemButton, Typography} from "@mui/material";
import {Chat} from "../../../constants";
import React from "react";


type ConversationBoxProps =
    {
        conversation: Chat
    }
const ChatBox = (props: ConversationBoxProps) => {
    const conversation = props.conversation
    const last_message = conversation.messages.slice(-1)[0]
    return (

        <>
            <Box display={'flex'} my={2} alignItems={'center'} sx={{width:{xs:'40%', sm:'100%'}}}>
                <Avatar alt={conversation.user.full_name} src={conversation.user.avatar_url}/>
                <Box display={'flex'} my={2}  justifyContent={'space-between'}>
                    <Box display={'flex'} flexDirection={'column'} mx={2}>
                        <Typography variant={'h6'} fontWeight={600}
                                    color={'#303030'}>{conversation.user.full_name}</Typography>
                        <Typography variant={'body2'} fontWeight={300}>{last_message.message}</Typography>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'}>
                        <Typography variant={'body2'} fontWeight={300} color={'#7C7C7C'}>8pm</Typography>
                        <Typography variant={'body2'}>Lorem Ipsum</Typography>
                    </Box>
                </Box>
            </Box>
            <Divider sx={{borderColor:'#B4ABABA8', width:{xs:'40%', sm:'100%'}}}/>
        </>

    );
};

export default ChatBox