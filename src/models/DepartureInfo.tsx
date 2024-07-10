import StationModel from './StationModels';

export interface DepartureInfo {
    departureTime: Date;
    destination: StationModel;
    status: string;
    duration: number;
}