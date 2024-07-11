import React from 'react';
import { StationModel } from '../models/StationModels';

interface StationListItemProps {
    station: StationModel;
    onClickSetStation: (station: StationModel) => void;
}

const StationListItem: React.FC<StationListItemProps> = ({ station, onClickSetStation }) => {
    return (
        <div onClick = { () => onClickSetStation(station) }>
            {station.name}: {station.crs}
        </div>
    );
};

export default StationListItem;