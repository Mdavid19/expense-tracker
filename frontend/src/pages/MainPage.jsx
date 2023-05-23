import React from 'react';
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import {useUser} from "../context/UserProvider";
import{useEffect} from "react";
import {useNavigate} from "react-router-dom";
import MonthlyExpense from "../components/MotnhlyExpense";
import DailyExpense from "../components/DailyExpense";
import YearlyExpense from "../components/YearlyExpense";
import DetailedMonthlyView from "../components/DetailedMonthly";
import dayjs from 'dayjs';

const MainPage = () => {
    const [view, setView] = React.useState('Daily');
    const [content, setContent] = React.useState();
    const [date, setDate] = React.useState(dayjs());
    const {user} = useUser();
    const navigate = useNavigate()

    useEffect(()=>{
        if(!user){
            navigate('/')
        }
    },[user,navigate])

    const options = {
        headers:{
            Authorization:`Bearer ${window.localStorage.getItem("token")}`,
        },
    }


    useEffect(() => {
        switch (view){
            default:
                setContent(<DailyExpense date={date} options={options}/>)
                break;
            case 'Daily':
                setContent(<DailyExpense date={date} options={options}/>)
                break;
            case 'Monthly':
                setContent(<MonthlyExpense date={date} options={options}/>)
                break;
            case 'Yearly':
                setContent(<YearlyExpense date={date} options={options}/>)
                break;
            case 'Detailed':
                setContent(<DetailedMonthlyView date={date} options={options}/>)
                break;
        }
    }, [view,date]);


    return user?(
        <div style={{height:"100%"}}>
            <NavBar date={date}/>
            <div style={{height:'100%', display:'flex', flexDirection:'row'}}>
                <SideBar view={view} setView={setView} date={date} setDate={setDate}/>
                <div style={{ height:'100%', width:'100%', display:"flex", justifyContent:"center", alignItems:"center"}}>
                    {content}
                </div>
            </div>

        </div>
    ):alert('Log in First')
}


export default MainPage;
