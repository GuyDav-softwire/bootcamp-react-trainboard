import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import './App.css';
import JourneySelector from './components/JourneySelector';

const App = () => (
    <BrowserRouter>
        <div className = "app">
            <CssBaseline />
            <JourneySelector />
        </div>
    </BrowserRouter>
);

export default App;
