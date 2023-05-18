import React from 'react';
import Box from "@mui/material/Box";
import {createTheme, ThemeProvider} from "@mui/material";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import ToggleButton from "@mui/material/ToggleButton"
import {DateCalendar} from '@mui/x-date-pickers/DateCalendar';
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button"

const theme = createTheme({
    palette: {
        primary: {
            main: '#212121',
            contrastText:'#ffffff'
        },
        secondary: {
            main: '#52b202',
            contrastText: '#ffffff'
        }
    }
})

const SideBar = ({view, setView,date,setDate}) => {
    const [open, setOpen] = React.useState(false);


    const handleChange = (event, nextView) => {
        setView(nextView);
    };
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false)
    }

    return(
    <ThemeProvider theme={theme}>
        <Box color={'secondary'} sx={{ width:"10%", height:"100%", backgroundColor: 'secondary.main'}}>
            <ToggleButtonGroup
                orientation="vertical"
                value={view}
                exclusive
                onChange={handleChange}
                sx={{ width:'100%'}}>
                <ToggleButton aria-label={"Daily"} value={"Daily"} sx={{ width:"100%"}}>Daily</ToggleButton>
                <ToggleButton aria-label={"Monthly"}  value={"Monthly"} sx={{ width:"100%"}}>Monthly</ToggleButton>
                <ToggleButton aria-label={"Yearly"}  value={"Yearly"} sx={{ width:"100%"}}>Yearly</ToggleButton>
                <ToggleButton aria-label={"Detailed"}  value={"Detailed"} sx={{ width:"100%"}}>Detailed</ToggleButton>
            </ToggleButtonGroup>
            <Button onClick={handleOpen} sx={{ width:"100%"}}>Choose Date</Button>
        </Box>
        <Dialog open={open} onClose={handleClose}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar value={date} onChange={(newValue) => setDate(newValue)} />
            </LocalizationProvider>
        </Dialog>
    </ThemeProvider>
    )
}

export default SideBar;
