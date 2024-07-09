import React from 'react';

interface StationListItemProps {
    name: string;
    crs: string;
    onClickSetValue: (value: string) => void;
}

const StationListItem: React.FC<StationListItemProps> = ({ name, crs, onClickSetValue }) => {
    return (
        <button key = { name } onClick = { () => onClickSetValue(name) }>
            {name}: {crs}
        </button>
    );
};

export default StationListItem;