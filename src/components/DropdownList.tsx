import React, { useState } from 'react';
import '../App.css';
import StationListItem from './StationListItem';

const DropdownList: React.FC = () => {
    const stations = [
        { crs: 'KGX', name: 'King\'s Cross' }, 
        { crs: 'SVG', name: 'Stevenage' }, 
        { crs: 'YRK', name: 'York' }, 
        { crs: 'DAR', name: 'Darlington' }, 
        { crs: 'NCL', name: 'Newcastle' },
    ];

    const [listShown, setListShown] = useState(false);
    const [value, setValue] = useState('Stations');

    return (
        <div className = "Dropdown-menu">
            <button className = "Dropdown-value" onClick = { () => setListShown(!listShown) }>{ value }</button>
            {
                listShown && 
                <ul className = 'Dropdown-list'>
                    { 
                        stations.map(station => 
                            <li key = { station.name } className = 'Dropdown-list-item'>
                                <StationListItem name = { station.name } crs = { station.crs } onClickSetValue = { (value) => {setValue(value); setListShown(!listShown);} } />
                            </li>,
                        )
                    }
                </ul>
            }

        </div>
    );
};

export default DropdownList;