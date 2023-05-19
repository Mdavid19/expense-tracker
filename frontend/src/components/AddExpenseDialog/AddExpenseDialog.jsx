import React from 'react';
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import {createTheme, ThemeProvider} from "@mui/material";
import TextField from '@mui/material/TextField'
import {useUser} from "../../context/UserProvider";

const theme = createTheme({
    palette:{
        primary:{
            main:'#212121'
        },
        secondary:{
            main:'#52b202',
            contrastText:'#ffffff'
        }
    }
})

function AddExpenseDialog({expense,setExpense}) {
    const [open, setOpen] = React.useState(false);
    const [amount, setAmount] = React.useState(null); // kitenni a mainre és csak a frontenden hozzáadni a useSATEHEZ ÉS NEM KELL FETCH CHAK HA TAB VÁLTÁS VAN
    const {user} = useUser();



    const handleOpen = ()=>{
        setOpen(true)
    }

    const handleClose=()=>{
        setOpen(false)
    }

    const data = {
        username:user.username,
        value:amount
    }

    function sendData(){
        fetch("/api/receipt/add",{
            method:"POST",
            headers:{
                Authorization: `Bearer ${window.localStorage.getItem('token')}`,
                "Content-type":"application/json"
            },
            body: JSON.stringify(data)
        }).then((res)=>{
            console.log(res.status)
        })
    }

    const sendAmount = async()=>{
        await sendData()
        handleClose()
        setExpense(amount)
    }

    return (
        <ThemeProvider theme={theme}>
            <div>
                <Button color="inherit" variant={"outlined"} onClick={handleOpen}>Add Expense</Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>ADD YOUR EXPENSE</DialogTitle>
                    <DialogContent>
                        <TextField
                        aria-label={'Amount'}
                        name={'Amount'}
                        placeholder={'Amount'}
                        variant={"filled"}
                        fullWidth onChange={(e)=>{setAmount(parseInt(e.target.value))}}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Close
                        </Button>
                        <Button onClick={sendAmount} color="primary">
                            Add
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </ThemeProvider>
    );
}

export default AddExpenseDialog;
