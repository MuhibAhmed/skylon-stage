import {NextPage} from "next";
import HomeLayout from "../../components/home/forum/HomeLayout";
import React from "react";
import Forum from "../../components/home/forum/Forum";
import Chats from "../../components/home/chats/Chats";

type ChatsPageProps = {}


const ChatsPage: NextPage<ChatsPageProps> = (props) => {

    const conversations = [
        {
            user:
                {
                    full_name: "Kossai Sbai",
                },
            messages: [
                {
                    message: "Lorem Ipsum",
                }
            ]
        },
        {
            user:
                {
                    full_name: "Kossai Sbai",
                },
            messages: [
                {
                    message: "Lorem Ipsum",
                }

            ]
        },
        {
            user:
                {
                    full_name: "Kossai Sbai",
                },
            messages: [
                {
                    message: "Lorem Ipsum",
                }

            ]
        }
    ]
    return (
        <HomeLayout mainPage={<Chats conversationsList={conversations}/>}/>
    )
}

export default ChatsPage