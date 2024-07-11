import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import './App.css';
import JourneySelector from './components/JourneySelector';
import Station from './components/Station';
import Stations from './components/Stations';

const App = () => (
    <BrowserRouter>
        <div className = "app">
            <CssBaseline />
            <JourneySelector />
            <Routes>
                <Route path = "/stations">
                    <Route path = ":id" element = { <Station/> }/>
       
                    <Route index element = { <Stations/> }/>
                </Route>
            </Routes>
        </div>
    </BrowserRouter>
);

export default App;
