import React, { useState } from 'react';
import '../App.css';
import StationModel from '../models/StationModels';
import StationListItem from './StationListItem';

interface DropdownProps<T> {
    items: Array<T>;
    value: T;
    setValue: (value: T) => void;
}

const DropdownList: React.FC<DropdownProps<StationModel>> = ({ items, value, setValue }) => {

    const [listShown, setListShown] = useState(false);

    return (
        <div className = "Dropdown-menu">
            <button className = "Dropdown-value" onClick = { () => setListShown(!listShown) }>{ value.name }</button>
            {
                listShown && 
                <ul className = 'Dropdown-list'>
                    { 
                        items.map(station => 
                            <li key = { station.crs } className = 'Dropdown-list-item'>
                                <StationListItem value = { station } onClickSetValue = { (value) => {setValue(value); setListShown(!listShown);} } />
                            </li>,
                        )
                    }
                </ul>
            }

        </div>
    );
};

export default DropdownList;