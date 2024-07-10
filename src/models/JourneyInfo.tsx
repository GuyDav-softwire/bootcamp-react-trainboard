import StationModel from './StationModels';

export interface JourneyInfo {
    departureTime: Date;
    destination: StationModel;
    status: string;
    duration: number;
}