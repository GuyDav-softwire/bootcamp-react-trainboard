import React, { useState } from 'react';
import { Alert, Button, LinearProgress, Stack } from '@mui/material';
import Container from '@mui/material/Container';
import { getDepartureInfoFromFares } from '../helpers/ApiResponseHelper';
import { DepartureInfo } from '../models/DepartureInfo';
import { areStationsEqual, StationModel } from '../models/StationModels';
import DropdownList from './DropdownList';
import JourneyDisplayTable from './JourneyDisplayTable';

const JourneySelector: React.FC =  () => {
    const stations: Map<string, StationModel> = new Map();
    stations.set('KGX', { crs: 'KGX', name: 'King\'s Cross' }); 
    stations.set('SVG', { crs: 'SVG', name: 'Stevenage' }); 
    stations.set('YRK', { crs: 'YRK', name: 'York' });
    stations.set('DAR', { crs: 'DAR', name: 'Darlington' });
    stations.set('NCL', { crs: 'NCL', name: 'Newcastle' });

    const [departureValue, setDepartureValue] = useState<StationModel|undefined>( undefined );
    const [arrivalValue, setArrivalValue] = useState<StationModel|undefined>( undefined );
    const [journeys, setJourneys] = useState<DepartureInfo[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const searchFares = async () => {
        if (departureValue && arrivalValue) {
            if (areStationsEqual(arrivalValue, departureValue)) {
                setShowAlert(true);
            } 
            else {
                setShowAlert(false);
                setJourneys((await getDepartureInfoFromFares( departureValue, arrivalValue )) ?? []);
            }
        }
        setIsSearching(false);
    };

    return (
        <Container sx = { { marginTop: 5 } }>
            <Stack sx = { { marginBottom: 2 } } direction = 'row' spacing = { '5%' }>
                <DropdownList
                    label = { 'Departure Station' }
                    items = { stations }
                    setValue = { setDepartureValue } 
                />
                <DropdownList 
                    label = { 'Arrival Station' }
                    items = { stations }
                    setValue = { setArrivalValue } 
                />
                <Button 
                    variant = 'contained' 
                    onClick = { () => { setIsSearching(true); searchFares(); } } 
                    disabled = { isSearching || !departureValue || !arrivalValue }
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
