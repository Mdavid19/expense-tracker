import React from 'react';
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import {createTheme, ThemeProvider} from "@mui/material";
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
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

function AddExpenseDialog({date}) {
    const [open, setOpen] = React.useState(false);
    const [amount, setAmount] = React.useState(null); // kitenni a mainre és csak a frontenden hozzáadni a useSATEHEZ ÉS NEM KELL FETCH CHAK HA TAB VÁLTÁS VAN
    const {user} = useUser();
    const [type, setType] = React.useState("FOOD");
    const [localDate, setLocalDate] = React.useState(date);

    React.useEffect(()=>{
        setLocalDate(date)
    },[date]
)


    const handleOpen = ()=>{
        setOpen(true)
    }

    const handleClose=()=>{
        setOpen(false)
    }

    const data = {
        username:user.username,
        value:amount,
        date: localDate,
        receiptType:type
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

    }

    const handleChange = (event) => {
        setType(event.target.value)
    }

    return (
        <ThemeProvider theme={theme}>
            <div >
                <Button color="inherit" variant={"outlined"} onClick={handleOpen}>Add Expense</Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>ADD YOUR EXPENSE</DialogTitle>
                    <DialogContent sx={{display:"flex", flexDirection:"column", justifyContent:"space-between", minHeight:"150px",maxHeight:"200px"}}>
                        <TextField
                        aria-label={'Amount'}
                        name={'Amount'}
                        placeholder={'Amount'}
                        variant={"filled"}
                        fullWidth onChange={(e)=>{setAmount(parseInt(e.target.value))}}/>
                        <Box sx={{ minWidth: 120}}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={type}
                                    label="Type"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"FOOD"}>Food</MenuItem>
                                    <MenuItem value={"ENTERTAINMENT"}>Entertainment</MenuItem>
                                    <MenuItem value={"HEALTH"}>Health</MenuItem>
                                    <MenuItem value={"TRAVELLING"}>Travelling</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
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
