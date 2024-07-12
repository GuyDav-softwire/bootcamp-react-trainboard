export interface StationsAPIResponseJSON {
    stations: Station[];
}

export interface Station {
    id:                  number;
    name:                string;
    aliases:             string[];
    crs:                 null | string;
    nlc:                 string;
    latitude:            number | null;
    longitude:           number | null;
    isGroupStation:      boolean;
    isSilverSeekStation: boolean;
}
