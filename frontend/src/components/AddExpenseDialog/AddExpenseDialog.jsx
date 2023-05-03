import React from 'react';
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import {createTheme, ThemeProvider} from "@mui/material";
import TextField from '@mui/material/TextField'

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

function AddExpenseDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [amount, setAmount] = React.useState(null);

    const handleOpen = ()=>{
        setOpen(true)
    }

    const handleClose=()=>{
        setOpen(false)
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
                        <Button onClick={handleClose} color="primary">
                            Add
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </ThemeProvider>
    );
}

export default AddExpenseDialog;
