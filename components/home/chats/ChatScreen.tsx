import {Box} from "@mui/material";
import {Chat} from "../../../constants";
import React from "react";
import ChatScreenHeader from "./ChatScreenHeader";
import ChatScreenBody from "./ChatScreenBody";
import ChatTyper from "./ChatTyper";


type ChatScreenProps =
    {
        chat: Chat
    }
const ChatScreen = (props: ChatScreenProps) => {
    const chat = props.chat

    return (

        <Box display={'flex'} flexDirection={'column'}  maxWidth={'45%'} sx={{marginLeft:{xs:0, md:5}, marginTop:{xs:10, md:0}}}>
            <ChatScreenHeader chat={chat}/>
            <ChatScreenBody chat={chat}/>
            <ChatTyper/>
        </Box>

    );
};

export default ChatScreen