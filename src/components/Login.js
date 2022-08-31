import React, {useContext} from 'react';
import {Box, Button, Container, Grid} from "@mui/material";
import {Context} from "../context/Context";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
    const {auth} = useContext(Context)

    const login = async() => {
        const provider = new GoogleAuthProvider()
        const {user} = await signInWithPopup(auth, provider)
    }

    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alignItems={"center"}
                  justifyContent={"center"}
            >
                <Grid style={{width: 400, background: 'lightgray'}}
                      container
                      alignItems={"center"}
                      direction={"column"}
                >
                    <Box p={5}>
                        <Button onClick={login} variant={"outlined"}>Login whit Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;