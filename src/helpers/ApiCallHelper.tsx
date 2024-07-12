import { FaresQuery } from '../models/FaresQuery';

const baseUrl = 'https://mobile-api-softwire2.lner.co.uk/v1/';
const tramAPIKey = { 'X-API-KEY': `${process.env.REACT_APP_X_API_KEY}` };

export const fetchStations = () => {
    return fetch(baseUrl + 'stations', { headers: tramAPIKey });
};

export const fetchFares = (queryParams: FaresQuery) => {
    const params = new URLSearchParams({
        originStation: queryParams.originStationNlc,
        destinationStation: queryParams.destinationStationNlc,
        outboundDateTime: queryParams.outboundDateTime.toISOString(),
        numberOfChildren: '0',
        numberOfAdults: '2',
    });

    return fetch(baseUrl + 'fares?' + params, { headers: tramAPIKey });
};
