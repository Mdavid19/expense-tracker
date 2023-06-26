import React from 'react';
import "./daily_expense_style.css"
import {useUser} from "../../context/UserProvider";
import useFetch from "../../hooks/useFetch";
import "typeface-teko";
import {createTheme, ThemeProvider} from "@mui/material";
import Typography from "@mui/material/Typography";

const DailyExpense = ({date, options}) => {
    const [month, setMonth] = React.useState(date.format('M'));
    const [day, setDay] = React.useState(date.format('D'));
    const [year, setYear] = React.useState(date.format('YYYY'));
    const {user, currency} = useUser()

    const {
        loading,
        data,
        error
    } = useFetch("/api/receipt/daily" + `?id=${user.id}&month=${month}&day=${day}&year=${year}`, options)

    const font = createTheme()




    React.useEffect(() => {
        setMonth(date.format('M'))
        setDay(date.format('D'))
        setYear(date.format('YYYY'))
    }, [date]);


    console.log(error ? error : "No error occurred")
    return (

            <div className={"circle2"}>
                    <Typography variant={"h3"}>{loading ? 'Loading...' : data + " "}</Typography>
                    <Typography variant={"p"}>{loading ? 'Loading...' :currency}</Typography>
            </div>
    )
};

export default DailyExpense;
