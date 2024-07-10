import { FaresQuery } from '../models/FaresQuery';

const baseUrl = 'https://mobile-api-softwire2.lner.co.uk/v1/';

export const fetchStations = () => {
    return fetch(baseUrl + 'stations', {
        headers: {
            'X-API-KEY': `${process.env.REACT_APP_X_API_KEY}`,
        },
    });
};

export const fetchFares = (queryParams: FaresQuery) => {
    return fetch(
        baseUrl + 
        'fares?originStation=' + queryParams.originStationCrs + 
        '&destinationStation=' + queryParams.destinationStationCrs +
        '&outboundDateTime=' + queryParams.outboundDateTime.toISOString() +
        '&numberOfChildren=0' +
        '&numberOfAdults=2', {
            headers: {
                'X-API-KEY': `${process.env.REACT_APP_X_API_KEY}`,
            },
        },
    );
};
