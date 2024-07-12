export interface StationModel {
    name: string;
    crs: string;
}

export const areStationsEqual = ( station1: StationModel, station2: StationModel ) => {
    return (station1.name == station2.name && station1.crs == station2.crs );
}; 
