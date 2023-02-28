import {supabase} from "../utils/supabase";
import React, {useState} from "react";
import {Alert, Box, Button, Container, Divider, Grid, InputAdornment, TextField, Typography} from "@mui/material";
import {AccountCircle, Email, Lock} from "@mui/icons-material";
import {useRouter} from "next/router";
import {logInWithGoogle, useFormControls} from "../constants";
import GoogleButton from "./GoogleButton";

export function SignUpForm() {

    const router = useRouter();

    const [error, setError] = useState<any>(null)

    const {
        handleInputValue,
        formIsValid,
        errors
    } = useFormControls();

    type InputFieldValueFormat = {
        name: string,
        label: string,
        id: string,
        icon?: JSX.Element,
        multiline?: number,

        rows?: number,

        required?: boolean,
    }
    const inputFieldValues: InputFieldValueFormat[] = [
        {
            name: "fullName",
            label: "Full Name",
            id: "full_name",
            icon: <AccountCircle/>,
            required: true
        },
        {
            name: "email",
            label: "Email",
            id: "email",
            icon: <Email/>,
            required: true
        },
        {
            name: "password",
            label: "Password",
            id: "password",
            icon: <Lock/>,
            required: true
        },
    ];

    async function signUpWithEmail(event: any) {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(event.target.full_name)
        const {data, error} = await supabase.auth.signUp({
            email: email,
            password: password
        })
        if (!error) {
            const c = event.target.full_name.value.split(" ")
            const default_username = c.join(".")
            await supabase
                .from('profiles')
                .update({
                    username: event.target.username.value || default_username,
                    full_name: event.target.full_name.value,
                    class: event.target.class.value,
                    email: event.target.email.value
                })
                .eq('id', data.user?.id)
            await router.push("/account_page");
        } else {
            switch (error.status) {
                case 400:
                    setError("User already registered")
                    break
            }
        }
    }


    return (

        <Container sx={{marginTop: 5, padding:2, maxWidth: {xs: '80% !important', md: '50% !important', lg: '30% !important'}}}>
            <Box display={'flex'} flexDirection={'column'} textAlign={'center'}>
                <Typography sx={{typography: {'sm': 'h3', 'xs': 'h4'}}}  marginBottom={1}> Skylon </Typography>
                <Typography sx={{typography: {'sm': 'h4', 'xs': 'h5'}}} > Sign up </Typography>
                <Box display={'flex'} flexDirection={'column'}></Box>
                <Box component={'form'} display={'flex'} flexDirection={'column'} alignItems={'center'} sx={{mt:2}} onSubmit={(event) => signUpWithEmail(event)}>
                    {inputFieldValues.map((inputFieldValue, index) => {
                        return (
                            <>
                            <Typography sx={{typography: {'sm': 'body1', 'xs': 'body2'}, mb:1}}> {inputFieldValue.label} </Typography>
                                <TextField
                                    onBlur={handleInputValue}
                                    onChange={handleInputValue}
                                    id={inputFieldValue.id}
                                    key={index}
                                    name={inputFieldValue.name}
                                    multiline={inputFieldValue.multiline ?? false}
                                    rows={inputFieldValue.rows ?? 1}
                                    required={inputFieldValue.required}
                                    type={inputFieldValue.name == "password" ? "password" : "text"}
                                    autoComplete="none"
                                    sx={{mb:4, width:{xs:'90%',sm:'70%',md:'100%'}}}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position={"start"}>
                                                {inputFieldValue.icon}
                                            </InputAdornment>
                                        )
                                    }
                                    }
                                    {...(errors[inputFieldValue.name] && {
                                        error: true,
                                        helperText: errors[inputFieldValue.name]
                                    })}
                                />
                            </>
                        );
                    })}

                    <Button disabled={!formIsValid()} variant={"contained"} sx={{marginTop: 5, backgroundColor: '#6A0DAD', marginBottom: 3}}
                            type='submit'>
                        Sign up
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
                    <GoogleButton logIn={() => logInWithGoogle(router)} buttonText={'Sign up with Google'}/>
                </Box>
                <>
                    {
                        error && <Alert severity="error" sx={{mt: 3}}>{error}</Alert>
                    }
                </>
            </Box>
        </Container>
    );
}