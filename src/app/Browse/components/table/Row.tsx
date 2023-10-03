import * as React from 'react';
import { Collapse, IconButton, TableCell, TableRow } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PlayerCard from '@src/app/PlayerCard';
import { Player } from '@src/app/types';

export default function Row(props: { row: Player }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow
                hover
                tabIndex={-1}
                key={row.id}
            >
                <TableCell
                    component="th"
                    scope="row"
                    align='center'
                    padding='normal'
                >
                    {row.id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.species}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.origin.name}</TableCell>
                <TableCell align="right">{row.gender}</TableCell>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <PlayerCard player={row} />
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}