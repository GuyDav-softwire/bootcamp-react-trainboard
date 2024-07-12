import React, { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
interface AutocompleteDropdownProps<T> {
    label: string;
    options: T[];
    value: T|undefined;
    getOptionLabel: (option: T) => string;
    getOptionKey: (option: T) => string;
    setValue: (value: T) => void;
}
const AutocompleteDropdown = <T,>(props: AutocompleteDropdownProps<T>) => {
    return (
        <Autocomplete
            value = { props.value }
            onChange = { (event, value) => !value || props.setValue(value) }
            id = 'station-autocomplete'
            disablePortal
            options = { props.options.sort((a, b) => props.getOptionLabel(a).localeCompare(props.getOptionLabel(b)) ) }
            getOptionLabel = { props.getOptionLabel }
            getOptionKey = { props.getOptionKey }
            renderInput = { (params) =>
                <TextField
                    { ...params }
                    label = { props.label }
                />
            }
            groupBy = { option => props.getOptionLabel(option)[0].toLocaleUpperCase() }
            fullWidth
        />
    );
};
export default AutocompleteDropdown;