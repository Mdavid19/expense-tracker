import React from 'react';
import {createTheme, ThemeProvider} from "@mui/material";
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import {useUser} from "../../context/UserProvider";
import Button from "@mui/material/Button"
import {useNavigate} from "react-router-dom";


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
const NavBar = () => {
    const {user, logout} = useUser()
    const navigate = useNavigate()

    function handleLogout(){
        logout()
        navigate('/')

    }

    return (

        <ThemeProvider theme={theme}>
            <AppBar color={"secondary"} component={"div"} sx={{position:"static"}}>
                <Toolbar sx={{display: 'flex',
                    justifyContent: 'space-between'}}>
                        <Typography variant={'h6'} component={"div"}>
                           Hello, {user.username}
                        </Typography>
                        <Button color="inherit">Add Expense</Button>
                        <Button color="inherit" onClick={handleLogout} >Logout</Button>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}
export default NavBar;