import React from 'react';
import {Box, Button, Container, Grid} from "@mui/material";
// loader from  https://loading.io/css/

const Loader = () => {
    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alignItems={"center"}
                  justifyContent={"center"}
            >
                <Grid
                      container
                      alignItems={"center"}
                      direction={"column"}
                >
                    <div className="lds-ellipsis">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;