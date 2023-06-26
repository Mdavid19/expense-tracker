import React from 'react';
import './yearly.css'
import {useUser} from "../../context/UserProvider";
import useFetch from "../../hooks/useFetch";
import Typography from "@mui/material/Typography";
const YearlyExpense = ({date, options}) => {
    const [year, setYear] = React.useState(date.format('YYYY'));
    const{user,currency} = useUser()

    const {loading,data,error} = useFetch("/api/receipt/yearly"+`?id=${user.id}&year=${year}`,options)


    React.useEffect(() => {
        setYear(date.format('YYYY'))
    }, [date]);


    console.log(error?error:"No error occurred")
    return(
    <div className={'circle3'}>
        <Typography variant={"h3"}>{loading ? 'Loading...' : data}</Typography>
        <Typography variant={"p"}>{loading ? 'Loading...' : currency}</Typography>
    </div>
)

}

export default YearlyExpense;
