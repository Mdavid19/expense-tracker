import React from 'react';
import "../styles/landingPage.css"
import {Box, Button, Container, createTheme, Grid, Modal, TextField, ThemeProvider} from "@mui/material";


const LandingPage = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    variant={"filled"}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="lastName"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    autoFocus
                                    variant={"filled"}
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
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            color="secondary"
                        >
                            Sign Up
                        </Button>
                    </Box>

                    <Box>
                        <Button onClick={handleOpen} fullWidth variant="outlined" sx={{mt:1,  mb:1}} color="secondary">Log In</Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box component={"form"} noValidate sx = {style}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <TextField
                                            autoComplete="email"
                                            name="email"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email"
                                            autoFocus
                                            variant={"filled"}
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
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    color="secondary"
                                >
                                    Log In
                                </Button>
                            </Box>
                        </Modal>
                    </Box>
                </ThemeProvider>
            </Container>
        </div>
    );
};

export default LandingPage;
