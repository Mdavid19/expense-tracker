import React from 'react';
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import {useUser} from "../context/UserProvider";
import{useEffect} from "react";
import {useNavigate} from "react-router-dom";
import MonthlyExpense from "../components/dataFrames/MonthlyExpense";

const MainPage = () => {
    const {user} = useUser();
    const navigate = useNavigate()

    useEffect(()=>{
        if(!user){
            navigate('/')
        }
    },[user,navigate])

    return user?(
        <div style={{height:"100%"}}>
            <NavBar/>
            <div style={{height:'100%', display:'flex', flexDirection:'row'}}>
                <SideBar/>
                <div style={{ height:'100%', width:'100%', display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <MonthlyExpense/>
                </div>
            </div>

        </div>
    ):alert('Log in First')
}


export default MainPage;
