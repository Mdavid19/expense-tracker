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
                <span><h2>TRAVELLING</h2></span>
                <span><h2>{loading?"loading":Number(data.travelling)}</h2></span>
            </div>
            <div className="food">
                <span><h2>FOOD</h2></span>
                <span><h2>{loading?"loading":Number(data.food)}</h2></span>
            </div>
            <div className="gift">
                <span><h2>ENTERTAINMENT</h2></span>
                <span><h2>{loading?"loading":Number(data.entertainment)}</h2></span>
            </div>
            <div className="healthy">
                <span><h2>HEALTH</h2></span>
                <span><h2>{loading?"loading":Number(data.health)}</h2></span>
            </div>
        </div>
    );
}

export default DetailedMonthlyView;
