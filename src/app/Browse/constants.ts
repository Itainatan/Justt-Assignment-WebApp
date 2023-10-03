import { Player } from "../types";

interface HeadCell {
    disablePadding: boolean;
    id: keyof Player;
    label: string;
    numeric: boolean;
}

export const headCells: readonly HeadCell[] = [
    {
        id: 'id',
        numeric: false,
        disablePadding: true,
        label: 'Id',
    },
    {
        id: 'name',
        numeric: true,
        disablePadding: false,
        label: 'Name',
    },
    {
        id: 'species',
        numeric: true,
        disablePadding: false,
        label: 'Species',
    },
    {
        id: 'status',
        numeric: true,
        disablePadding: false,
        label: 'Status',
    },
    {
        id: 'origin',
        numeric: true,
        disablePadding: false,
        label: 'Origin',
    },
    {
        id: 'gender',
        numeric: true,
        disablePadding: false,
        label: 'Gender',
    },
];