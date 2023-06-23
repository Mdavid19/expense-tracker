import React from 'react';
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import {useUser} from "../../context/UserProvider";
import Button from "@mui/material/Button"
import {useNavigate} from "react-router-dom";
import AddExpenseDialog from "../AddExpenseDialog";


const NavBar = ({date, setLoading}) => {
    const {user, logout} = useUser()
    const navigate = useNavigate()

    function handleLogout(){
        logout()
        navigate('/')

    }

    return (

            <AppBar color={"secondary"} component={"div"} sx={{position:"static"}}>
                <Toolbar sx={{display: 'flex',
                    justifyContent: 'space-between'}}>
                        <Typography variant={'h6'} component={"div"}>
                           Hello, {user.username}
                        </Typography>
                        <AddExpenseDialog setLoading={setLoading} date={date}/>
                        <div>
                            <Button sx={{marginRight:'5px'}} color="inherit" variant={"outlined"} onClick={()=>navigate('/user')}>User</Button>
                            <Button  color="inherit" variant={"outlined"} onClick={handleLogout}>Logout</Button>
                        </div>

                </Toolbar>
            </AppBar>
    )
}
export default NavBar;
