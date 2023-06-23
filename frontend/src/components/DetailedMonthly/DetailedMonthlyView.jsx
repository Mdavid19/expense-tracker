import React from 'react';
import './detaildView.css'
import useFetch from "../../hooks/useFetch";
import {useUser} from "../../context/UserProvider";
import Typography from "@mui/material/Typography";
function DetailedMonthlyView({options,date}) {
    const [year, setYear] = React.useState(date.format('YYYY'));
    const {user,currency}= useUser();
    const{data,loading,error}= useFetch("/api/receipt/detailed"+`?id=${user.id}&year=${year}`,options)
    console.log(data)

    React.useEffect(() => {
        setYear(date.format('YYYY'))
    }, [date]);

    return (
        <div className={'detailed'}>
            <div className="traveling">
                <span><Typography variant={"h2"}> Travelling</Typography></span>
                <span><Typography variant={"h2"}>{loading?"loading":Number(data.travelling) + currency}</Typography></span>
            </div>
            <div className="food">
                <span><Typography variant={"h2"}> Food</Typography></span>
                <span><Typography variant={"h2"}>{loading?"loading":Number(data.food) + currency}</Typography></span>
            </div>
            <div className="gift">
                <span><Typography variant={"h2"}> Entertainment</Typography></span>
                <span><Typography variant={"h2"}>{loading?"loading":Number(data.entertainment) + currency}</Typography></span>
            </div>
            <div className="healthy">
                <span><Typography variant={"h2"}> HEALTH</Typography></span>
                <span><Typography variant={"h2"}>{loading?"loading":Number(data.health) + currency}</Typography></span>
            </div>
        </div>
    );
}

export default DetailedMonthlyView;
