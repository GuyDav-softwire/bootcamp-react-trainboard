import React, { useState } from 'react';
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
    const [value, setValue] = useState('');

    return (
        <div>
            <button onClick = { () => setListShown(!listShown) }>{ value }</button>
            {
                listShown && 
                <ul>
                    { 
                        stations.map(station => 
                            <li key = { station.name }>
                                <StationListItem name = { station.name } crs = { station.crs } onClickSetValue = { setValue } />
                            </li>,
                        )
                    }
                </ul>
            }

        </div>
    );
};

export default DropdownList;