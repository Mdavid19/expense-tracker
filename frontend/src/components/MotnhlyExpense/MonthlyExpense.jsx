import React from 'react';
import "./style.css"
import useFetch from "../../hooks/useFetch";
import {useUser} from "../../context/UserProvider";
import Typography from "@mui/material/Typography";

const MonthlyExpense = ({date, options}) => {
    const [month, setMonth] = React.useState(date.format('M'));
    const [year, setYear] = React.useState(date.format('YYYY'));

    const{user,currency} = useUser()

    const {loading,data,error} = useFetch("/api/receipt/monthly"+`?id=${user.id}&year=${year}&month=${month}`,options)


    React.useEffect(() => {
        setMonth(date.format('M'))
        setYear(date.format('YYYY'))
    }, [date]);


    console.log(error?error:"No error occurred")

    return(
        <div className={"circle"}>
            <Typography variant={"h3"}>{loading ? 'Loading...' : data + " "}</Typography>
            <Typography variant={"p"}>{loading ? 'Loading...' :currency}</Typography>
        </div>

)}

export default MonthlyExpense;
