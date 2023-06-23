import React from 'react';
import {useUser} from "../context/UserProvider";
import {useNavigate} from "react-router-dom";
import "../styles/userProfilePage.css";
import Button from "@mui/material/Button";
import CurrencySetter from "../components/CurrencySetter";

function UserProfilePage(props) {
    const{user} = useUser()
    const navigate = useNavigate()

    React.useEffect(()=>{
        if(!user){
            navigate('/')
        }
    },[user,navigate])

    return (
        <div className={"main-container"}>
            <h2 className={"header-item"}>PROFILE SETTINGS</h2>
            <Button className={"back-button"} sx={{marginRight:"1%"}} variant={"outlined"} onClick={()=>navigate('/main')}>Back</Button>
            <CurrencySetter/>
        </div>
    );
}

export default UserProfilePage;
