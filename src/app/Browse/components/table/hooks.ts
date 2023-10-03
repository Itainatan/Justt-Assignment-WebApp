import { Player } from "@src/app/types";
import { useState, MouseEvent, useMemo } from "react";
import { ROWS_PER_PAGE } from "../../constants";
import { stableSort, getComparator } from "./helpers";
import { Order } from "./types";

export default function useTable({
  rows,
  page,
}: {
  rows: Player[];
  page: number;
}) {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Player>("id");

  const onClickSort = (event: MouseEvent<unknown>, property: keyof Player) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedRows = useMemo(
    () =>
        stableSort(rows, getComparator(order, orderBy)).slice(
            page * ROWS_PER_PAGE,
            page * ROWS_PER_PAGE + ROWS_PER_PAGE,
        ),
    [rows, page, order, orderBy, ],
);

  return { order, orderBy, sortedRows, onClickSort };
}
