import React from 'react';
import "./style.css"
import useFetch from "../../hooks/useFetch";
import {useUser} from "../../context/UserProvider";

const MonthlyExpense = ({expense}) => {
    const [month, setMonth] = React.useState(new Date().getMonth()+1);
    const{user} = useUser()
    console.log(month)
    let options = {
        headers:{
            Authorization:`Bearer ${window.localStorage.getItem("token")}`,
        },
    }

    const {loading,data,error} = useFetch("/api/receipt/monthly"+`?id=${user.id}&month=${month}`,options)

    console.log(error)

    return(
        <div className={"circle"}>
            <h1>{loading?"Loading...":data}</h1>
        </div>

)}

export default MonthlyExpense;
