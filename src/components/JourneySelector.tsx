import React, { useEffect, useState } from 'react';
import { Alert, Autocomplete, Button, LinearProgress, Stack, TextField } from '@mui/material';
import Container from '@mui/material/Container';
import { getDepartureInfoListFromFares, getStationModelListFromStations } from '../helpers/ApiResponseHelper';
import { DepartureInfo } from '../models/DepartureInfo';
import { areStationsEqual, StationModel } from '../models/StationModel';
import AutoCompleteDropdown from './AutoCompleteDropdown';
import JourneyDisplayTable from './JourneyDisplayTable';

const JourneySelector: React.FC =  () => {
    const [stationsList, setStationsList] = useState<StationModel[]>( [] );
    const [departureStation, setDepartureStation] = useState<StationModel|undefined>( undefined );
    const [arrivalStation, setArrivalStation] = useState<StationModel|undefined>( undefined );
    const [journeys, setJourneys] = useState<DepartureInfo[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        getStationModelListFromStations().then(stationList => {
            setStationsList(stationList ?? []);
        }); 
    }, []); 

    const searchFares = async () => {
        if (departureStation && arrivalStation) {
            if (areStationsEqual(arrivalStation, departureStation)) {
                setShowAlert(true);
            } 
            else {
                setShowAlert(false);
                setJourneys((await getDepartureInfoListFromFares(departureStation, arrivalStation)) ?? []);
            }
        }
        setIsSearching(false);
    };

    return (
        <Container sx = { { marginTop: 5 } }>
            <Stack sx = { { marginBottom: 2 } } direction = 'row' spacing = { '5%' }>
                <AutoCompleteDropdown<StationModel>
                    label = 'Departure Station'
                    options = { stationsList }
                    value = { departureStation }
                    getOptionLabel = { option => option.name }
                    getOptionKey = { option => option.nlc }
                    setValue = { setDepartureStation }
                />
                <AutoCompleteDropdown<StationModel>
                    label = 'Arrival Station'
                    options = { stationsList }
                    value = { arrivalStation }
                    getOptionLabel = { option => option.name }
                    getOptionKey = { option => option.nlc }
                    setValue = { setArrivalStation }
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
