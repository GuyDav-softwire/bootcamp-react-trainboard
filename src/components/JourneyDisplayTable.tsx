import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { DepartureInfo } from '../models/DepartureInfo';

interface JourneyDisplayTableProps {
    journeys: DepartureInfo[];
}

const JourneyDisplayTable: React.FC<JourneyDisplayTableProps> = ({ journeys }) => {
    return (
        <TableContainer component = { Paper }>
            <Table sx = { { minWidth: 650 } } aria-label = 'simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell sx = { { fontWeight: 'bold' } }>Departure Time</TableCell>
                        <TableCell sx = { { fontWeight: 'bold' } }>Destination</TableCell>
                        <TableCell sx = { { fontWeight: 'bold' } }>Duration (Minutes)</TableCell>
                        <TableCell sx = { { fontWeight: 'bold' } }>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {journeys.map((journey) => (
                        <TableRow
                            key = { journey.departureTime.toUTCString() }
                            sx = { { '&:last-child td, &:last-child th': { border: 0 } } }
                        >
                            <TableCell component = "th" scope = "row">
                                {journey.departureTime.toLocaleString('en-GB')}
                            </TableCell>
                            <TableCell>{journey.destination.name}</TableCell>
                            <TableCell>{journey.duration}</TableCell>
                            <TableCell>{journey.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default JourneyDisplayTable;
