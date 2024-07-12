import { departureInfoFromOutboundJourney } from '../models/DepartureInfo';
import { FaresAPIResponseJSON } from '../models/FaresAPIResponse';
import { StationModel, stationModelFromStation } from '../models/StationModel';
import { StationsAPIResponseJSON } from '../models/StationsAPIResponseJSON';
import { fetchFares, fetchStations } from './ApiCallHelper';

export const getDepartureInfoListFromFares = async (departureValue: StationModel, arrivalValue: StationModel) => {
    const response = await fetchFares({ 
        originStationNlc: departureValue.nlc,
        destinationStationNlc: arrivalValue.nlc,
        outboundDateTime: new Date(), 
    }).catch(err => {alert(err); return null;});

    if (!response || response.status != 200) {
        return;
    }

    const apiData = await response.json() as FaresAPIResponseJSON;
    return apiData.outboundJourneys.map(outboundJourney => 
        departureInfoFromOutboundJourney(outboundJourney),
    );
};

export const getStationModelListFromStations = async () => {
    const response = await fetchStations();

    if (!response || response.status != 200) {
        return;
    }

    const apiData = await response.json() as StationsAPIResponseJSON;
    return apiData.stations.map(station =>
        stationModelFromStation(station),
    );
};
