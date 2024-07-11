import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import JourneySelector from './components/JourneySelector';
import Station from './components/Station';
import Stations from './components/Stations';

const App = () => (
    <BrowserRouter>
        <div className = "app">
            <JourneySelector />
            <Routes>
                <Route path = "/stations">
                    <Route path = ":id" element = { <Station/> }/>
       
                    <Route index element = { <Stations/> }/>
                </Route>
            </Routes>
            <footer>
                <Link to = "/stations">Stations</Link>
            </footer>
        </div>
    </BrowserRouter>
);

export default App;
