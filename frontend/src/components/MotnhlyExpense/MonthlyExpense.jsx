import React from 'react';
import "./style.css"
import useFetch from "../../hooks/useFetch";
import {useUser} from "../../context/UserProvider";

const MonthlyExpense = ({expense,date}) => {
    const [month, setMonth] = React.useState(date.format('M'));
    const{user} = useUser()
    const options = {
        headers:{
            Authorization:`Bearer ${window.localStorage.getItem("token")}`,
        },
    }
    const {loading,data,error} = useFetch("/api/receipt/monthly"+`?id=${user.id}&month=${month}`,options)
    const [amount, setAmount] = React.useState(data);


    React.useEffect(() => {
        setMonth(date.format('M'))
        setAmount(expense)
        console.log("izé")
        console.log(amount)
    }, [date,expense]);


    console.log(error?error:"No error occurred")

    return(
        <div className={"circle"}>
            <h1>{loading?"Loading...":data}</h1>
        </div>

)}

export default MonthlyExpense;
