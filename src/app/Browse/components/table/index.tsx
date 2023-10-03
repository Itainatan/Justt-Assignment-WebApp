import * as React from 'react';
import { Paper, Box, Table, TableBody, TableContainer, TablePagination } from '@mui/material';
import { Player } from '@src/app/types';
import Row from './Row';
import { getComparator, stableSort } from './helpers';
import { Order } from './types';
import Head from './Head';

const ROWS_PER_PAGE = 20;

export default function EnhancedTable({ rows, headers, total }) {
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof Player>('id');
    const [page, setPage] = React.useState(0);

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof Player,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const visibleRows = React.useMemo(
        () =>
            stableSort(rows, getComparator(order, orderBy)).slice(
                page * ROWS_PER_PAGE,
                page * ROWS_PER_PAGE + ROWS_PER_PAGE,
            ),
        [rows, order, orderBy, page],
    );

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={'small'}
                    >
                        <Head
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            headers={headers}
                        />
                        <TableBody>
                            {visibleRows.map((row) =>
                                <Row row={row} key={row.id} />
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    component="div"
                    count={total}
                    rowsPerPage={ROWS_PER_PAGE}
                    rowsPerPageOptions={[]}
                    page={page}
                    onPageChange={handleChangePage}
                />
            </Paper>
        </Box>
    );
}

