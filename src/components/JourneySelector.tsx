import React, { useState } from 'react';
import '../App.css';
import DropdownList from './DropdownList';

const JourneySelector: React.FC = () => {
    const stations = [
        { crs: 'KGX', name: 'King\'s Cross' }, 
        { crs: 'SVG', name: 'Stevenage' }, 
        { crs: 'YRK', name: 'York' }, 
        { crs: 'DAR', name: 'Darlington' }, 
        { crs: 'NCL', name: 'Newcastle' },
    ];

    const [departureValue, setDepartureValue] = useState(stations[0]);
    const [arrivalValue, setArrivalValue] = useState(stations[0]);

    return (
        <div className = 'Journey-container'>
            <div>
                <h2>Departure</h2>
                <DropdownList items = { stations } value = { departureValue } setValue = { setDepartureValue } />
            </div>
            <div>
                <h2>Arrival</h2>
                <DropdownList items = { stations } value = { arrivalValue } setValue = { setArrivalValue }/>
            </div>
            <div className = 'Go-button'>
                <a href = { 'https://www.lner.co.uk/travel-information/travelling-now/live-train-times/depart/' + departureValue.crs + '/' + arrivalValue.crs +  '/#LiveDepResults\''  }>GO</a>
            </div>
        </div>
    );
};

export default JourneySelector;
