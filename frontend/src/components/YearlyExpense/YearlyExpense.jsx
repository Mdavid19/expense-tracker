import React from 'react';
import './yearly.css'
import {useUser} from "../../context/UserProvider";
import useFetch from "../../hooks/useFetch";
const YearlyExpense = ({date, options}) => {
    const [year, setYear] = React.useState(date.format('YYYY'));
    const{user} = useUser()

    const {loading,data,error} = useFetch("/api/receipt/yearly"+`?id=${user.id}&year=${year}`,options)


    React.useEffect(() => {
        setYear(date.format('YYYY'))
    }, [date]);


    console.log(error?error:"No error occurred")
    return(
    <div className={'circle3'}>
        <h1>{loading?"Loadin...":data}</h1>
    </div>
)

}

export default YearlyExpense;
