import React, {useContext, useState} from 'react';
import {Context} from "../context/Context";
import {useAuthState} from "react-firebase-hooks/auth";
import {Avatar, Button, Container, Grid, TextField} from "@mui/material";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import {collection, addDoc, getDocs, serverTimestamp, doc, onSnapshot} from "firebase/firestore";


const Chat = () => {
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')

    const [messages, loading] = useCollectionData(
        collection(firestore, "messages")
        // .orderBy('createdAt')
    )

    // const q = query(collection(firestore, "messages"), orderBy('createdAt'))


    const sendMessage = async () => {
        // async function sendMessage (){
        try {
            await addDoc(collection(firestore, "messages"), {
                uid: user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL,
                text: value,
                createdAt: serverTimestamp()
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        setValue('')
    }

    if (loading) {
        return <Loader/>
    }

    return (
        <Container>
            <Grid container
                  justify={"center"}
                  justifyContent={"center"}
                  style={{height: window.innerHeight - 50, marginTop: '15px'}}>
                <div style={{width: '80%', height: '80vh', border: '1px solid #1976d2', overflowY: 'auto'}}>
                    {
                        messages.sort((a, b) => a.createdAt - b.createdAt).map(message =>
                            <Grid key={message.createdAt} container={true}>
                                {user.uid === message.uid ? <div></div> :
                                    <Avatar style={{marginLeft: 10}} src={message.photoURL}/>}

                                <div key={message.createdAt}
                                     style={{
                                         margin: 10,
                                         borderRadius: '10px',
                                         padding: 5,
                                         border: user.uid === message.uid ? '2px solid green' : '2px solid #1976d2',
                                         marginLeft: user.uid === message.uid ? 'auto' : '10px',
                                         width: 'fit-content'
                                     }}>
                                    <Grid container={true}>
                                        <div
                                            style={{marginRight: 10}}>{user.uid === message.uid ? '' : message.displayName + ' :'}</div>
                                    </Grid>
                                    <div>{message.text}</div>
                                </div>
                            </Grid>
                        )}
                </div>
                <Grid
                    container
                    direction={"column"}
                    alignItems={"flex-end"}
                    style={{width: '80%', height: '10vh'}}
                >
                    <TextField
                        variant={"outlined"}
                        fullWidth
                        maxRows={2}
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                sendMessage()
                            }
                        }}
                    />
                    <Button style={{backgroundColor: '#1976d2'}} onClick={sendMessage} color={"inherit"}
                            variant={"outlined"} fullWidth>Send</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Chat;