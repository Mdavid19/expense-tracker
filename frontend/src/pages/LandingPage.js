import React, {useState} from 'react';
import "../styles/landingPage.css"
import {Box, Button, Container, createTheme, Grid, TextField, ThemeProvider} from "@mui/material";
import LoginModal from "../components/LoginModal/LoginModal";


const LandingPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");

    const theme = createTheme({
        palette:{
            primary:{
                main:'#212121'
            },
            secondary:{
                main:'#52b202',
                contrastText:'#ffffff'
            }
        }
        }

    )

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: '#54c75f',
        border: '#52b202 2px solid',
        borderBottomLeftRadius: '100px',
        borderTopRightRadius: '100px',
        boxShadow: 24,
        p: 4,
    };

    const registrationCreds = {
        fullName:name,
        username:username,
        email:email,
        password:password
    }

    const sendUserCreds = ()=>{
        fetch('/register',{
            method:"POST",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify(registrationCreds)
        })
            .then(()=>{console.log("Registration successful")
                setUsername("");
                setEmail("");
                setName("");
                setPassword("");
            })
    }

    return (
        <div id={'landing-page-root'}>

            <Container component="main" id="sign-up-form">
                <ThemeProvider theme={theme}>
                    <Box component={"div"}>
                        <Grid container spacing={1} direction="column" alignItems="center" justifyContent="center">
                            <Grid item xs={12}>
                                <h2>SIGN UP</h2>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box component={"form"} noValidate>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <TextField
                                    name="fullName"
                                    required
                                    fullWidth
                                    id="fullName"
                                    label="Name"
                                    autoFocus
                                    variant={"filled"}
                                    onChange={(event)=>{
                                        setName(event.target.value)
                                    }}
                                    value={name}
                                />
                            </Grid><Grid item xs={12}>
                                <TextField
                                    name="username"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    autoFocus
                                    variant={"filled"}
                                    onChange={(event)=>{
                                        setUsername(event.target.value)
                                    }}
                                    value={username}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="email"
                                    required
                                    fullWidth
                                    id="email"
                                    label="E-mail"
                                    autoFocus
                                    variant={"filled"}
                                    onChange={(event)=>{
                                        setEmail(event.target.value)
                                    }}
                                    value={email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="password"
                                    required
                                    fullWidth
                                    id="password"
                                    label="Password"
                                    autoFocus
                                    variant={"filled"}
                                    onChange={(event)=>{
                                        setPassword(event.target.value)
                                    }}
                                    value={password}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            color="secondary"
                            onClick={sendUserCreds}
                        >
                            Sign Up
                        </Button>
                    </Box>
                    <LoginModal style={style}/>
                </ThemeProvider>
            </Container>
        </div>
    );
};

export default LandingPage;

