import {Box} from "@mui/material";
import ChatsList from "./ChatsList";
import {Chat} from "../../../constants";


type MessagesProps =
{
    conversationsList: Chat[]
}
const Chats = (messageProps: MessagesProps) => {
    return (

            <ChatsList chats={messageProps.conversationsList}/>
    );
};

export default Chats