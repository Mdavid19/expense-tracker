import React from 'react';
import "./daily_expense_style.css"
import {useUser} from "../../context/UserProvider";
import useFetch from "../../hooks/useFetch";
const DailyExpense = ({date, options}) => {
    const [month, setMonth] = React.useState(date.format('M'));
    const [day, setDay] = React.useState(date.format('D'));
    const [year, setYear] = React.useState(date.format('YYYY'));
    const{user} = useUser()

    const {loading,data,error} = useFetch("/api/receipt/daily"+`?id=${user.id}&month=${month}&day=${day}&year=${year}`,options)


    React.useEffect(() => {
        setMonth(date.format('M'))
        setDay(date.format('D'))
        setYear(date.format('YYYY'))
    }, [date]);


    console.log(error?error:"No error occurred")
    return(
    <div className={"circle2"}>
        <h1>{loading?'Loading...':data}</h1>
    </div>
)};

export default DailyExpense;
