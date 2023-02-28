import {Avatar, Box, Container, Divider, ListItemButton, Typography} from "@mui/material";
import {Chat} from "../../../constants";
import React from "react";
import ChatScreenHeader from "./ChatScreenHeader";
import {User} from "@supabase/gotrue-js";


type MessageProps =
    {
        user?: User,

        message: any,
    }
const Message = (props: MessageProps) => {


    return (
        <Box display={'flex'} flexDirection={'column'} sx={{alignItems: props.message.sender ? 'flex-end' : 'flex-start', color: props.message.sender ? 'white' : 'black'}}>
            <Box sx={{
                backgroundColor: props.message.sender ? '#6A0DAD' : 'whitesmoke',
                width: 'fit-content',
                minWidth: 60,
                borderRadius: '12px',
                padding: '15px',
            }}>
                <Typography variant={'body1'}>{props.message.message}</Typography>
            </Box>
            <Typography variant={'body2'} color={'#707070'}>Today at 8:30pm</Typography>
        </Box>

    );
};

export default Message