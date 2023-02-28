import {useState} from "react";
import {Box, Button, IconButton, TextField} from "@mui/material";
import {Attachment, CameraAltOutlined, EmojiEmotionsOutlined, KeyboardVoice} from "@mui/icons-material";

type ChatTyperProps =
    {}

const ChatTyper = (props: ChatTyperProps) => {
    const [message, setMessage] = useState("");

    return (
        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} mt={10}>
            <Box display={'flex'} alignItems={'center'} sx={{
                width: 500,
                maxWidth: '100%',
            }}>
                <IconButton aria-label="attach-file">
                    <Attachment/>
                </IconButton>
                <TextField
                    id="search-bar"
                    className="text"
                    variant={"standard"}
                    sx={{marginLeft: 1}}
                    onInput={(e: any) => {
                        setMessage(e.target.value);
                    }}
                    fullWidth={true}
                    placeholder="Type your message here..."
                    size="medium"
                    multiline={true}
                    InputProps={{
                        disableUnderline: true, // <== added this
                    }}
                />
            </Box>
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-evenly'}>
                <EmojiEmotionsOutlined sx={{marginLeft: 1}}/>
                <CameraAltOutlined sx={{marginLeft: 2}}/>
                <Button variant={"contained"} sx={{
                    borderRadius: '12px',
                    padding: '16px 22px',
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#6A0DAD',
                    color: 'white',
                    marginLeft: 4
                }}>
                    <KeyboardVoice/>
                </Button>
            </Box>
        </Box>
    );
}

export default ChatTyper