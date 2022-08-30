import React, {useContext} from 'react';
import {AppBar, Avatar, Button, Grid, Toolbar} from "@mui/material";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";
import {Context} from "../context/Context";
import {useAuthState} from "react-firebase-hooks/auth";
import "../App.css"

const Navbar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    // console.log(auth);
    return (
        <AppBar  position="static">
            <Toolbar variant={"dense"}>
                <Grid container={true} justifyContent={"flex-end"}>
                    {
                        user ? <Grid container={true} justifyContent={"flex-end"} >
                                <div className={"avatar"} style={{backgroundImage: "url(" + auth.currentUser.photoURL + ")" , marginRight:"10px"}}></div>
                                {/*<Avatar src={auth.currentUser.photoURL}/>*/}
                                <Button onClick={() => auth.signOut()} color={"inherit"} variant={"outlined"}>Logout</Button>
                               </Grid>
                             : <NavLink to={LOGIN_ROUTE}>
                                <Button color={"inherit"} variant={"outlined"}>Login</Button>
                               </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;