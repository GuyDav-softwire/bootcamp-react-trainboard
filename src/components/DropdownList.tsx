import React from 'react';
import { FormControl, InputLabel, Select, SelectChangeEvent } from '@mui/material';

interface DropdownProps<T> {
    label: string;
    items: Map<string,T>;
    setValue: (value: T) => void;
    getComponent: (item: T) => React.ReactNode;
}

const DropdownList = <T,>(props: DropdownProps<T>) => {
    return (
        <FormControl fullWidth>
            <InputLabel>{ props.label }</InputLabel>
            <Select 
                label = { props.label }
                value = { undefined }
                onChange = { (event: SelectChangeEvent) => {
                    const newStation = props.items.get(event.target.value);
                    if (newStation) {
                        props.setValue(newStation);
                    }
                } }
            >
                {
                    Array.from(props.items.values()).map(item =>
                        props.getComponent(item),
                    )
                }
            </Select>
        </FormControl>
    );
};

export default DropdownList;
