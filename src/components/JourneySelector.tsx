import React, { useState } from 'react';
import { Button, LinearProgress, Stack } from '@mui/material';
import Container from '@mui/material/Container';
import { getDepartureInfoFromFares } from '../helpers/ApiResponseHelper';
import { DepartureInfo } from '../models/DepartureInfo';
import { StationModel } from '../models/StationModels';
import DropdownList from './DropdownList';
import JourneyDisplayTable from './JourneyDisplayTable';

const JourneySelector: React.FC =  () => {
    const stations: Map<string, StationModel> = new Map();
    stations.set('KGX', { crs: 'KGX', name: 'King\'s Cross' }); 
    stations.set('SVG', { crs: 'SVG', name: 'Stevenage' }); 
    stations.set('YRK', { crs: 'YRK', name: 'York' });
    stations.set('DAR', { crs: 'DAR', name: 'Darlington' });
    stations.set('NCL', { crs: 'NCL', name: 'Newcastle' });

    const [departureValue, setDepartureValue] = useState({ crs: 'KGX', name: 'King\'s Cross' });
    const [arrivalValue, setArrivalValue] = useState({ crs: 'DAR', name: 'Darlington' });
    const [journeys, setJourneys] = useState<DepartureInfo[]>([]);
    const [isSearching, setIsSearching] = useState(false);

    const searchFares = async () => {
        setJourneys((await getDepartureInfoFromFares( departureValue, arrivalValue )) ?? []);
        setIsSearching(false);
    };

    return (
        <Container sx = { { marginTop: 5 } }>
            <Stack sx = { { marginBottom: 2 } } direction = 'row' spacing = { '5%' }>
                <DropdownList label = { 'Departure Station' } items = { stations } setValue = { setDepartureValue } />

                <DropdownList label = { 'Arrival Station' } items = { stations } setValue = { setArrivalValue } />

                <Button variant = 'contained' onClick = { () => { setIsSearching(true); searchFares(); } } disabled = { isSearching }>GO</Button>
            </Stack>
            {
                isSearching && <LinearProgress/>
            }
            {
                (!isSearching && journeys.length != 0) && <JourneyDisplayTable journeys = { journeys }/>
            }
        </Container>
    );
};

export default JourneySelector;
