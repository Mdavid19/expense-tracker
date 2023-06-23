import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UserProvider from "./context/UserProvider";
import MainPage from "./pages/MainPage"
import UserProfilePage from "./pages/UserProfilePage";
import {createTheme,ThemeProvider} from "@mui/material";
import "typeface-teko";

const theme = createTheme({
        palette:{
            primary:{
                main:'#212121'
            },
            secondary:{
                main:'#52b202',
                contrastText:'#ffffff'
            }
        },
    typography: {
        fontFamily: [
            'Teko',
            'serif',
        ].join(','),
        fontSize:20
    }})

theme.typography.h3 = {
    fontFamily: 'Teko',
    fontSize: '3rem',
    '@media (min-width:600px)': {
        fontSize: '4rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '7rem',
    },
};
theme.typography.p = {
    fontFamily: 'Teko',
    fontSize: '3rem',
    '@media (min-width:600px)': {
        fontSize: '4rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '7rem',
    },
};

theme.typography.h2 = {
    fontFamily: 'Teko',
    fontWeight:200,
    fontSize: '1rem',
    '@media (min-width:600px)': {
        fontSize: '2rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '3rem',
    },
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <UserProvider>
          <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path='/' element={<LandingPage/>}/>
                    <Route path='/main' element={<MainPage/>}/>
                    <Route path='/user' element={<UserProfilePage/>}/>
                </Routes>
            </Router>
          </ThemeProvider>
      </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
