import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import React from "react";
import {ArrowForwardIos} from "@mui/icons-material";

type CarouselBoxProps = {
    title: string,
    text: string

    icon: JSX.Element,

    backgroundColor: string,

    iconColor: string

    index: number,
}
const CarouselBox = (props: CarouselBoxProps) => {
    const {title, text, icon, backgroundColor, iconColor, index} = props;
    return (
        <Card elevation={3} sx={{borderRadius: 7, width: {xs:'300px',sm:'373px'}, height:'272px', display: 'flex', flexDirection: 'column'}} id={`carousel-box-${index}`}>
            <CardContent>
                <Box display={'flex'} alignItems={'center'}>
                    <Box sx={{backgroundColor:backgroundColor,color:iconColor}} padding={1} borderRadius={'10px'}>
                        {icon}
                    </Box>
                    <Typography sx={{marginLeft: '16px'}} variant={'h5'} id={`carousel-box-${index}-title`} fontWeight={700} gutterBottom>
                        {title}
                    </Typography>

                </Box>

                <Typography variant={'body1'} mt={4} id={`carousel-box-${index}-text`} sx={{color: '#646464'}}>
                    {text}
                </Typography>
                <CardActions sx={{padding:0, marginTop:3}} id={`carousel-box-${index}-card-actions`}>
                    <Button size="small" sx={{color:'inherit', fontSize:'18px', fontWeight:500}} >Learn More</Button>
                    <ArrowForwardIos sx={{width: 15, height: 15, color:'inherit'}}/>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default CarouselBox