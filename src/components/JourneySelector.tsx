import React, { useState } from 'react';
import { Button, Stack } from '@mui/material';
import Container from '@mui/material/Container';
import { getDepartureInfoFromFares } from '../helpers/ApiResponseHelper';
import { DepartureInfo } from '../models/DepartureInfo';
import { StationModel } from '../models/StationModels';
import DropdownList from './DropdownList';

const JourneySelector: React.FC =  () => {
    const stations: Map<string, StationModel> = new Map();
    stations.set('KGX', { crs: 'KGX', name: 'King\'s Cross' }); 
    stations.set('SVG', { crs: 'SVG', name: 'Stevenage' }); 
    stations.set('YRK', { crs: 'YRK', name: 'York' });
    stations.set('DAR', { crs: 'DAR', name: 'Darlington' });
    stations.set('NCL', { crs: 'NCL', name: 'Newcastle' });

    const [departureValue, setDepartureValue] = useState({ crs: 'KGX', name: 'King\'s Cross' });
    const [arrivalValue, setArrivalValue] = useState({ crs: 'DAR', name: 'Darlington' });

    let journeys: DepartureInfo[] = [];

    const searchFares = async () => {
        journeys = (await getDepartureInfoFromFares( departureValue, arrivalValue )) ?? [];
        console.log(journeys);
    };

    return (
        <Container sx = { { marginTop: 5 } }>
            <Stack direction = 'row' spacing = { 10 }>
                <DropdownList label = { 'Departure Station' } items = { stations } setValue = { setDepartureValue } />

                <DropdownList label = { 'Arrival Station' } items = { stations } setValue = { setArrivalValue } />

                <Button variant = 'contained' onClick = { searchFares }>GO</Button>
            </Stack>
        </Container>
    );
};

export default JourneySelector;
