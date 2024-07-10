import React, { useState } from 'react';
import '../App.css';
import { fetchFares } from '../helpers/ApiCallHelper';
import { JourneyInfo } from '../models/JourneyInfo';
import DropdownList from './DropdownList';
import JourneyItem from './JourneyItem';

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

    const [journeys, setJourneys] = useState([] as JourneyInfo[]);

    const searchFares = async () => {
        fetchFares({ 
            originStationCrs: departureValue.crs,
            destinationStationCrs: arrivalValue.crs,
            outboundDateTime: new Date(), 
        })
            .then((value) => {
                value.json().then(value => {(value.outboundJourneys as Array<any>).forEach(outboundJourney => {
                    setJourneys(oldJourneys => [
                        ...oldJourneys,
                        {
                            departureTime: new Date(outboundJourney.departureTime),
                            destination: { name: outboundJourney.destinationStation.displayName, crs: outboundJourney.destinationStation.crs },
                            status: outboundJourney.status,
                            duration: outboundJourney.journeyDurationInMinutes,
                        },
                    ]);
                });
                console.log(journeys);
                },
                );
            },
            )
            .catch((err) => console.log(err));
        console.log(journeys);
    };

    return (
        <div>
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
                    <button onClick = { searchFares }>GO</button>
                </div>
            </div>
            <div>
                {
                    journeys.map(journeyInfo => 
                        <div key = { journeyInfo.departureTime.toUTCString() }><JourneyItem { ...journeyInfo } /></div>,
                    )
                }
            </div>
        </div>
    );
};

export default JourneySelector;
