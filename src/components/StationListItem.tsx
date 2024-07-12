import React from 'react';
import { MenuItem } from '@mui/material';
import { StationModel } from '../models/StationModel';

const StationListItem = (station: StationModel) => {
    return (
        <MenuItem key = { station.crs } value = { station.crs }>
            { station.name }
        </MenuItem>
    );
};

export default StationListItem;