import React from 'react';
import { JourneyInfo } from '../models/JourneyInfo';

const JourneyItem: React.FC<JourneyInfo> = ({ departureTime, destination, status, duration }) => {
    return (
        <div className = 'Journey-item'>
            <div>{ departureTime.toDateString() }</div>
            <div>{ destination.name } - { destination.crs }</div>
            <div>{ status }</div>
            <div>{ duration }</div>
        </div>
    );
};

export default JourneyItem;
