import { departureInfoFromOutboundJourney } from '../models/DepartureInfo';
import { FaresAPIResponseJSON } from '../models/FaresAPIResponse';
import { StationModel } from '../models/StationModel';
import { fetchFares } from './ApiCallHelper';

export const getDepartureInfoFromFares = async (departureValue: StationModel, arrivalValue: StationModel) => {
    const response = await fetchFares({ 
        originStationCrs: departureValue.crs,
        destinationStationCrs: arrivalValue.crs,
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
