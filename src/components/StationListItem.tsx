import React from 'react';
import { MenuItem } from '@mui/material';
import { StationModel } from '../models/StationModel';

const StationListItem = (station: StationModel) => {
    return (
        <MenuItem key = { station.nlc } value = { station.nlc }>
            { station.name }
        </MenuItem>
    );
};

export default StationListItem;