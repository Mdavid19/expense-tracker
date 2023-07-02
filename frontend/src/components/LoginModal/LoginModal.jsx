import React, {useState, useEffect} from 'react';
import {Box, Button, Grid, Modal, TextField} from "@mui/material";
import {useUser} from "../../context/UserProvider";
import {useNavigate} from "react-router-dom";

const LoginModal = ({style}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [loginPassword, setLoginPassword] = useState("");
    const [username, setUsername] = useState("");


    const creds = {
        userName:username,
        password:loginPassword
    }

    const {login,user} = useUser()
    const navigate = useNavigate()

    function handleLogin(){
        login(creds)
    }

    useEffect(()=>{
        if(user){
            navigate('/main')
        }
    },[user,navigate])

    return <Box>
        <Button onClick={handleOpen} fullWidth variant="outlined" sx={{mt: 1, mb: 1}} color="secondary">Log In</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box component={"form"} noValidate sx={style}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <TextField
                            name="username"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            autoFocus
                            variant={"filled"}
                            onChange={(event) => {
                                setUsername(event.target.value)
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="password"
                            required
                            fullWidth
                            id="password"
                            label="Password"
                            type={"password"}
                            autoFocus
                            variant={"filled"}
                            onChange={(event) => {
                                setLoginPassword(event.target.value)
                            }}
                        />
                    </Grid>
                </Grid>
                <Button
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                    color="secondary"
                    onClick={handleLogin}
                >
                    Log In
                </Button>
            </Box>
        </Modal>
    </Box>
};

export default LoginModal;
