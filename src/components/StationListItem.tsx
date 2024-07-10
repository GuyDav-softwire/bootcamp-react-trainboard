import React from 'react';
import StationModel from '../models/StationModels';

interface StationListItemProps {
    value: StationModel;
    onClickSetValue: (value: StationModel) => void;
}

const StationListItem: React.FC<StationListItemProps> = ({ value, onClickSetValue }) => {
    return (
        <div onClick = { () => onClickSetValue(value) }>
            {value.name}: {value.crs}
        </div>
    );
};

export default StationListItem;