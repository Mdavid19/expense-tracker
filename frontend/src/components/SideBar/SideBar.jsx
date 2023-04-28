import React from 'react';
import Box from "@mui/material/Box";
import {createTheme, ThemeProvider} from "@mui/material";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import ToggleButton from "@mui/material/ToggleButton"

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

const SideBar = () => {
    const [view, setView] = React.useState('list');

    const handleChange = (event, nextView) => {
        setView(nextView);
        console.log(nextView)
    };

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
            </ToggleButtonGroup>
        </Box>
    </ThemeProvider>
    )
}

export default SideBar;
