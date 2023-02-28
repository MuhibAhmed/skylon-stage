import React from 'react';

import Drawer from '@mui/material/Drawer';

import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MenuItem from '@mui/material/MenuItem';

import Link from 'next/link';
import {Box, ListItemButton} from "@mui/material";
import Image from "next/image";
import {Dashboard, Forum, Message} from "@mui/icons-material";
import {useRouter} from 'next/router'

const drawerWidth = 240;

type MainPageLayoutProps =
    {
        mainPage?: any;
    }
const MainPageLayout = (props: MainPageLayoutProps) => {
    const router = useRouter()
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const activeRoute = (routeName: any, currentRoute: any) => {
        return routeName === currentRoute;
    }


    const routes = [
        {
            id: 1,
            label: 'Dashboard',
            path: '/home/dashboard',
            icon: <Dashboard/>
        },
        {
            id: 2,
            label: 'Forum',
            path: '/home/forum',
            icon: <Forum/>
        },
        {
            id: 3,
            label: 'Messages',
            path: '/home/chats',
            icon: <Message/>
        },
    ];

    const drawer = (
        <div>
            <Box display={'flex'} p={4}>
                <Image src={"../../static/images/skylone_logo.svg"} width={30} height={30} style={{marginRight: '6px'}}
                       alt={"Kossai"}/>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: {xs: 'none', md: 'flex'},
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        color: '#101828'
                    }}
                >
                    Skylon
                </Typography>
            </Box>
            <Divider/>
            <List>
                {routes.map((route, index) => (
                    <Link href={route.path} style={{textDecoration: 'none', color: 'black'}} key={index}>
                        <MenuItem selected={activeRoute(route.path, router.pathname)} sx={{
                            '&.Mui-selected': {backgroundColor: '#6A0DAD', color: 'white'}
                        }}>
                            <ListItemButton selected={activeRoute(route.path, router.pathname)} sx={{
                                '&.Mui-selected>div': {color: 'white'}
                            }}>
                                <ListItemIcon sx={{color: '#A3AED0'}}>
                                    {route.icon}
                                </ListItemIcon>
                                <ListItemText sx={{color: '#A3AED0'}} primary={route.label}/>
                            </ListItemButton>
                        </MenuItem>
                    </Link>
                ))}
            </List>
        </div>
    );

    return (

        <Box sx={{display: 'flex', backgroundColor: '#F4F7FE'}}>
            <Toolbar sx={{alignItems: "flex-start", padding: 1}}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{display: {sm: 'none'}}}
                >
                    <MenuIcon/>
                </IconButton>
            </Toolbar>
            <Box
                component="nav"
                sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: {xs: 'none', sm: 'block'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{py: 3}}
            >
                {props.mainPage}
            </Box>
        </Box>
        // get rid of padding toolbar on small screen
    );
}

export default MainPageLayout