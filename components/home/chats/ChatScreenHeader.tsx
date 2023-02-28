import {Avatar, Box, Divider, ListItemButton, Typography} from "@mui/material";
import {Chat} from "../../../constants";
import React from "react";
import {MoreVertOutlined, Phone, PhoneOutlined, Settings, VideoCall, VideocamOutlined} from "@mui/icons-material";


type ChatScreenHeaderProps =
{
    chat: Chat
}
const ChatScreenHeader = (props: ChatScreenHeaderProps) => {
    const chat = props.chat

    return (
        <Box sx={{mb:2}}>
            <Box mb={2} display={'flex'}>
                <Avatar sx={{marginRight: 2}} alt={chat.user.full_name} src={chat.user.avatar_url}/>
                <Box display={'flex'} justifyContent={'space-between'} flex={1}>
                    <Box display={'flex'} flexDirection={'column'}>
                        <Typography variant={'h6'} fontWeight={600}
                                    color={'#303030'}>{chat.user.full_name}</Typography>
                        <Typography color={'#A7A7A7'} variant={'body2'} fontWeight={300}>Online- Last seen ,
                            time </Typography>
                    </Box>
                    <Box display={'flex'}>
                        <PhoneOutlined style={{color: '#6A0DAD', marginRight:4, width:32, height:32}}/>
                        <VideocamOutlined style={{color: '#6A0DAD', marginRight:4, width:32, height:32}}/>
                        <MoreVertOutlined style={{color: '#6A0DAD', marginRight:4, width:32, height:32}}/>
                    </Box>
                </Box>
            </Box>
            <Divider sx={{borderColor: '#B4ABABA8', mt: 2}}/>
        </Box>

    );
};

// @ts-ignore
export default ChatScreenHeader