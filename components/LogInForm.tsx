import {supabase} from "../utils/supabase";
import {Alert, Box, Button, Container, Divider, Grid, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import GoogleButton from "./GoogleButton";
import {logInWithGoogle} from "../constants";

export function LogInForm() {

    const [error, setError] = useState<any>(null);
    const router = useRouter();

    async function signInWithEmail(event: any) {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        const {data, error} = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })
        if (!error) {
            await router.push("/home");
        } else {
            setError(error);
        }

    }

    return (
        <Container sx={{marginTop:5, maxWidth:{xs:'80% !important', md:'50% !important', lg:'30% !important'}}}>
            <Box display={'flex'} flexDirection={'column'} textAlign={'center'} >
                <Typography sx={{typography: {'sm': 'h3', 'xs': 'h4'}}} marginBottom={1}> Log in </Typography>
                <Typography variant={"body2"} sx={{color: '#A0A0A0'}} marginBottom={1}> Welcome Back </Typography>
                <Typography variant={"body2"} sx={{color: '#A0A0A0'}} marginBottom={1}> Please enter your
                    details </Typography>
                <form style={{display: 'flex', flexDirection: 'column', marginTop: 10}} onSubmit={signInWithEmail}>
                    <Typography sx={{typography: {'sm': 'body1', 'xs': 'body2'}}}> Email </Typography>
                    <TextField inputProps={{
                        sx: {
                            padding: {'sm': '16.5px 8px', 'xs': '8.5px 8px'}
                        }
                    }} id='email'></TextField>
                    <Typography sx={{typography: {'sm': 'body1', 'xs': 'body2'}}}> Password </Typography>
                    <TextField inputProps={{
                        sx: {
                            padding: {'sm': '16.5px 8px', 'xs': '8.5px 8px'}
                        }
                    }} id='password' type="password"></TextField>
                    <Button variant={"contained"} sx={{marginTop: 5, backgroundColor: '#6A0DAD', marginBottom: 3}}
                            type='submit'>
                        Log in
                    </Button>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item xs>
                            <Divider/>
                        </Grid>
                        <Grid item><Typography variant={'body2'}>Or</Typography></Grid>
                        <Grid item xs>
                            <Divider/>
                        </Grid>
                    </Grid>
                    <GoogleButton logIn={() => logInWithGoogle(router)} buttonText={'Log in with Google'}/>
                </form>
                <Box display={'flex'} justifyContent={'space-between'} marginTop={5}>
                    <Typography>Don't have an account?</Typography>
                    <Link href={"/sign_up"} style={{fontFamily: 'Inter Semi-Bold', marginLeft: 8}}>Sign up</Link>
                </Box>
                <>
                    {
                        error && <Alert severity="error" sx={{mt: 3}}>Invalid Login Credentials</Alert>
                    }
                </>
            </Box>
        </Container>
    );
}