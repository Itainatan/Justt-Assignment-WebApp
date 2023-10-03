import { Paper, Box, Table, TableBody, TableContainer, TablePagination } from '@mui/material';
import { Player } from '@src/app/types';
import Row from './Row';
import { HeadCell, } from './types';
import Head from './Head';
import { ROWS_PER_PAGE } from '../../constants';
import useTable from './hooks';

export default function DataTable({ rows, headers, total, page, onChangePage, }: { rows: Player[], headers: HeadCell[], total: number, onChangePage: (number: number) => void, page: number }) {
    const { order, orderBy, sortedRows, onClickSort } = useTable({ rows, page });

    return (
        <Box sx={{
            width: '100%',
            height: '30vh',
            overflow: 'auto'
        }}>
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
                            onRequestSort={onClickSort}
                            headers={headers}
                        />
                        <TableBody>
                            {sortedRows.map((row) => <Row row={row} key={row.id} />)}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    component="div"
                    count={total}
                    rowsPerPage={ROWS_PER_PAGE}
                    rowsPerPageOptions={[]}
                    page={page}
                    onPageChange={(event, value) => onChangePage(value)}
                />
            </Paper>
        </Box>
    );
}

