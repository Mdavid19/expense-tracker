import React from 'react';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import {useUser} from "../../context/UserProvider";

function CurrencySetter(props) {
    const {currency,setCurrency} = useUser()

    const sendData = () => {
        fetch("/api/user/change-currency",{
            method:"POST",
            headers:{
                "Content-type": "application/json",
                Authorization:`Bearer ${window.localStorage.getItem("token")}`
            },
            body: currency
        }).then(()=>console.log("data sent"))
    }



    return (
        <div className={"feature-currency"}>
            <h2>Change your currency here</h2>
            <Select
                value={currency}
                onChange={(e)=>setCurrency(e.target.value)}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{margin:"1%", width:"30%"}}

            >
                <MenuItem value="">
                    <em> </em>
                </MenuItem>
                <MenuItem value={"Ft"}>HUF</MenuItem>
                <MenuItem value={"€"}>EUR</MenuItem>
                <MenuItem value={"$"}>USD</MenuItem>
            </Select>
            <Button variant={"contained"} onClick={sendData} >Save</Button>

        </div>
    );
}

export default CurrencySetter;
