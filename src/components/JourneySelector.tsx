import React, { useState } from 'react';
import { Alert, Button, LinearProgress, Stack } from '@mui/material';
import Container from '@mui/material/Container';
import { getDepartureInfoFromFares } from '../helpers/ApiResponseHelper';
import { DepartureInfo } from '../models/DepartureInfo';
import { areStationsEqual, StationModel } from '../models/StationModel';
import DropdownList from './DropdownList';
import JourneyDisplayTable from './JourneyDisplayTable';
import StationListItem from './StationListItem';

const JourneySelector: React.FC =  () => {
    const stationsMap: Map<string, StationModel> = new Map();
    stationsMap.set('KGX', { crs: 'KGX', name: 'King\'s Cross' }); 
    stationsMap.set('SVG', { crs: 'SVG', name: 'Stevenage' }); 
    stationsMap.set('YRK', { crs: 'YRK', name: 'York' });
    stationsMap.set('DAR', { crs: 'DAR', name: 'Darlington' });
    stationsMap.set('NCL', { crs: 'NCL', name: 'Newcastle' });

    const [departureStation, setDepartureStation] = useState<StationModel|undefined>( undefined );
    const [arrivalStation, setArrivalStation] = useState<StationModel|undefined>( undefined );
    const [journeys, setJourneys] = useState<DepartureInfo[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const searchFares = async () => {
        if (departureStation && arrivalStation) {
            if (areStationsEqual(arrivalStation, departureStation)) {
                setShowAlert(true);
            } 
            else {
                setShowAlert(false);
                setJourneys((await getDepartureInfoFromFares(departureStation, arrivalStation)) ?? []);
            }
        }
        setIsSearching(false);
    };

    return (
        <Container sx = { { marginTop: 5 } }>
            <Stack sx = { { marginBottom: 2 } } direction = 'row' spacing = { '5%' }>
                <DropdownList<StationModel>
                    label = { 'Departure Station' }
                    items = { stationsMap }
                    setValue = { setDepartureStation } 
                    getComponent = { StationListItem }
                />
                <DropdownList<StationModel>
                    label = { 'Arrival Station' }
                    items = { stationsMap }
                    setValue = { setArrivalStation } 
                    getComponent = { StationListItem }
                />
                <Button 
                    variant = 'contained' 
                    onClick = { () => { setIsSearching(true); searchFares(); } } 
                    disabled = { isSearching || !departureStation || !arrivalStation }
                >
                    GO
                </Button>
            </Stack>
            {
                isSearching && <LinearProgress/>
            }
            {
                showAlert && 
                <Alert 
                    severity = 'warning' 
                    onClose = { () => setShowAlert(false) } 
                    sx = { { marginBottom: 2 } }
                >
                    Departure and Arrival stations should be different
                </Alert>
            }
            {
                (!isSearching && journeys.length != 0) && <JourneyDisplayTable journeys = { journeys }/>
            }
        </Container>
    );
};

export default JourneySelector;
