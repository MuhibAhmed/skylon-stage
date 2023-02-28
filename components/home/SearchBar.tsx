import {Box, IconButton, TextField} from "@mui/material";
import {Search} from "@mui/icons-material";
import {useState} from "react";


type SearchBarProps =
{
}
const SearchBar  = (props: SearchBarProps) => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <form>
            <Box display={'flex'} alignItems={'center'}>
            <IconButton type="submit" aria-label="search">
                <Search/>
            </IconButton>
            <TextField
                id="search-bar"
                className="text"
                variant={"standard"}
                onInput={(e:any) => {
                    setSearchQuery(e.target.value);
                }}
                placeholder="Search"
                size="medium"
                InputProps={{
                    disableUnderline: true, // <== added this
                }}
            />
            </Box>
        </form>
    );
}

export default SearchBar