import React from 'react';
import { JourneyInfo } from '../models/JourneyInfo';

const JourneyItem: React.FC<JourneyInfo> = ({ departureTime, destination, status, duration }) => {
    return (
        <div className = 'journey-grid-container'>
            <div className = 'journey-grid-item'>{ departureTime.toLocaleString('en-GB') }</div>
            <div className = 'journey-grid-item'>{ destination.name } - { destination.crs }</div>
            <div className = 'journey-grid-item'>{ status }</div>
            <div className = 'journey-grid-item'>{ duration }</div>
        </div>
    );
};

export default JourneyItem;
