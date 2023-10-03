import * as React from 'react';
import { Box, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { Player } from '@src/app/types';
import { Order } from './types';

type Props = {
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Player) => void;
    order: Order;
    orderBy: string;
    headers: any;
}

export default function Head(props: Props) {
    const { order, orderBy, onRequestSort, headers } =
        props;
    const createSortHandler =
        (property: keyof Player) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRow>
                {headers.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align='center'
                        padding='normal'
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}

                <TableCell
                    key="more"
                    align='center'
                    padding='normal'
                    sortDirection={false}
                >
                    More
                </TableCell>
            </TableRow>
        </TableHead>
    );
}