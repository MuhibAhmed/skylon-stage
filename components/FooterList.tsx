import {Box, Link, Typography} from "@mui/material";
import React from "react";


type FooterListProps = {
    title: string,
    linksNames: string[]
}
const FooterList = (props: FooterListProps) => {
    const {title, linksNames} = props;
    return (
        <Box display={'flex'} flexDirection={'column'}
             sx={{mx: {xs: 0, sm: 6}, my: {xs: 2, sm: 3}, flex: {xs: '50%', sm: 'inherit'}}}>
            <Typography sx={{color: '#98A2B3', fontSize: '14px'}}>{title}</Typography>
            {linksNames.map((linkName, index) => (
                <Link key={index}
                      sx={{fontSize: '16px', color: '#EAECF0', textDecoration: 'none', my: 1}}>{linkName}</Link>
            ))}

        </Box>
    )
}

export default FooterList