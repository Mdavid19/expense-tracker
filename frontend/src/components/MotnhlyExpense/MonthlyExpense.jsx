import React from 'react';
import "./style.css"
import useFetch from "../../hooks/useFetch";
import {useUser} from "../../context/UserProvider";

const MonthlyExpense = ({date, options}) => {
    const [month, setMonth] = React.useState(date.format('M'));
    const [year, setYear] = React.useState(date.format('YYYY'));

    const{user} = useUser()

    const {loading,data,error} = useFetch("/api/receipt/monthly"+`?id=${user.id}&year=${year}&month=${month}`,options)


    React.useEffect(() => {
        setMonth(date.format('M'))
        setYear(date.format('YYYY'))
    }, [date]);


    console.log(error?error:"No error occurred")

    return(
        <div className={"circle"}>
            <h1>{loading?"Loading...":data}</h1>
        </div>

)}

export default MonthlyExpense;
