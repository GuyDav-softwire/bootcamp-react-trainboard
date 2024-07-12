import { OutboundJourney } from './FaresAPIResponse';
import { StationModel } from './StationModel';

export interface DepartureInfo {
    departureTime: Date;
    destination: StationModel;
    status: string;
    duration: number;
}

export const departureInfoFromOutboundJourney = (outboundJourney: OutboundJourney) => {
    return {
        departureTime: new Date(outboundJourney.departureTime),
        destination: { name: outboundJourney.destinationStation.displayName, crs: outboundJourney.destinationStation.crs },
        status: outboundJourney.status,
        duration: outboundJourney.journeyDurationInMinutes,
    };
};
