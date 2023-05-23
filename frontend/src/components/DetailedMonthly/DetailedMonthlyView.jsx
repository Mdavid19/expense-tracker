import React from 'react';
import './detaildView.css'
import useFetch from "../../hooks/useFetch";
import {useUser} from "../../context/UserProvider";
function DetailedMonthlyView({options,date}) {
    const [year, setYear] = React.useState(date.format('YYYY'));
    const {user}= useUser();
    const{data,loading,error}= useFetch("/api/receipt/detailed"+`?id=${user.id}&year=${year}`,options)
    console.log(data)
    React.useEffect(() => {
        setYear(date.format('YYYY'))
    }, [date]);

    return (
        <div className={'detailed'}>
            <div className="traveling">
            </div>
            <div className="food">
            </div>
            <div className="gift"></div>
            <div className="permanent"></div>
            <div className="freetime"></div>
            <div className="healthy"></div>
        </div>
    );
}

export default DetailedMonthlyView;
