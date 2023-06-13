import React from 'react';
import {useUser} from "../context/UserProvider";
import {useNavigate} from "react-router-dom";

function UserProfilePage(props) {
    const{user} = useUser()
    const navigate = useNavigate()
    React.useEffect(()=>{
        if(!user){
            navigate('/')
        }
    },[user,navigate])
    return (
        <div style={{ height:'100%', backgroundColor:'#52b202'}}>
            <div>

            </div>
        </div>
    );
}

export default UserProfilePage;
