import React from 'react';
import { FormControl, InputLabel, MenuItem,Select, SelectChangeEvent } from '@mui/material';
import { StationModel } from '../models/StationModels';

interface DropdownProps<T> {
    label: string;
    items: Map<string,T>;
    setValue: (value: T) => void;
}

const DropdownList: React.FC<DropdownProps<StationModel>> = ({ label, items, setValue }) => {
    return (
        <FormControl fullWidth>
            <InputLabel>{ label }</InputLabel>
            <Select 
                label = { label }
                value = { undefined }
                onChange = { (event: SelectChangeEvent) => setValue(items.get(event.target.value)!) }
            >
                {
                    Array.from(items.values()).map(station => 
                        <MenuItem key = { station.crs } value = { station.crs }>
                            { station.name }
                        </MenuItem>,
                    )
                }
            </Select>
        </FormControl>
    );
};

export default DropdownList;
