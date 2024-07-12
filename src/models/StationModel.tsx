import { Station } from './StationsAPIResponseJSON';

export interface StationModel {
    name: string;
    crs: string | null;
    nlc: string;
}

export const areStationsEqual = ( station1: StationModel, station2: StationModel ) => {
    return (station1.name == station2.name && station1.crs == station2.crs );
}; 

export const stationModelFromStation = (station: Station) => {
    return {
        name: station.name,
        nlc: station.nlc,
        crs: station.crs,
    };
};
