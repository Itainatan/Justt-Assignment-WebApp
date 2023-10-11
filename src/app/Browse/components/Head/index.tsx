import * as React from "react";
import {
  Box,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { Player } from "@src/app/types";
// import { HeadCell, Order } from "../Table/types";
import * as styles from "./styles";

type Props = {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Player
  ) => void;
  order: any;
  orderBy: string;
  headers: any;
};

export default function Head(props: Props) {
  const { order, orderBy, onRequestSort, headers } = props;
  const createSortHandler =
    (property: keyof Player) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headers.map((headCell: any) => (
          <TableCell
            key={headCell.id}
            align="center"
            padding="normal"
            sortDirection={orderBy === headCell.id ? order : false}
            css={styles.cell}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}

        <TableCell
          key="more"
          align="center"
          padding="normal"
          sortDirection={false}
          css={styles.cell}
        >
          More
        </TableCell>
      </TableRow>
    </TableHead>
  );
}
