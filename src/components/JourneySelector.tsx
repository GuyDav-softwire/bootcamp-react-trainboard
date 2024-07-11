import React, { useState } from 'react';
import '../App.css';
import { fetchFares } from '../helpers/ApiCallHelper';
import { DepartureInfo, departureInfoFromOutboundJourney } from '../models/DepartureInfo';
import { FaresAPIResponseJSON } from '../models/FaresAPIResponse';
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

    const journeys: DepartureInfo[] = [];

    const searchFares = async () => {
        const response = await fetchFares({ 
            originStationCrs: departureValue.crs,
            destinationStationCrs: arrivalValue.crs,
            outboundDateTime: new Date(), 
        }).catch(err => {alert(err); return null;});

        if (!response || response.status != 200) {
            return;
        }

        const apiData = await response.json() as FaresAPIResponseJSON;
        apiData.outboundJourneys.forEach(outboundJourney => {
            journeys.push(departureInfoFromOutboundJourney(outboundJourney));
        });
    };

    return (
        <div>
            <div className = 'journey-container'>
                <div>
                    <h2>Departure</h2>
                    <DropdownList items = { stations } value = { departureValue } setValue = { setDepartureValue } />
                </div>
                <div>
                    <h2>Arrival</h2>
                    <DropdownList items = { stations } value = { arrivalValue } setValue = { setArrivalValue }/>
                </div>
                <div className = 'go-button'>
                    <button onClick = { searchFares }>GO</button>
                </div>
            </div>
        </div>
    );
};

export default JourneySelector;
