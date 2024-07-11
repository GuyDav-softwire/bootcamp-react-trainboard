import React, { useState } from 'react';
import '../App.css';
import { StationModel } from '../models/StationModels';
import StationListItem from './StationListItem';

interface DropdownProps<T> {
    items: T[];
    value: T;
    setValue: (value: T) => void;
}

const DropdownList: React.FC<DropdownProps<StationModel>> = ({ items, value, setValue }) => {

    const [listShown, setListShown] = useState(false);

    return (
        <div className = "dropdown-menu">
            <button 
                className = "dropdown-value" 
                onClick = { () => setListShown(!listShown) }
            >
                { value.name }
            </button>
            {
                listShown && 
                <ul className = 'dropdown-list'>
                    { 
                        items.map(station => 
                            <li key = { station.crs } className = 'dropdown-list-item'>
                                <StationListItem
                                    station = { station } 
                                    onClickSetStation = { (station) => {setValue(station); setListShown(!listShown);} } 
                                />
                            </li>,
                        )
                    }
                </ul>
            }

        </div>
    );
};

export default DropdownList;