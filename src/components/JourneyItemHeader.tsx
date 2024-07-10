import React from 'react';
import '../App.css';

const JourneyItemHeader: React.FC = () => {
    return (
        <div className = 'journey-grid-container'>
            <div>Departure Time</div>
            <div>Destination</div>
            <div>Status</div>
            <div>Duration (minutes)</div>
        </div>
    );
};

export default JourneyItemHeader;