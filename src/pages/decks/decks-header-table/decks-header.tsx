import { ComponentPropsWithoutRef, FC } from "react";

import { DownIcon, UpIcon } from "../../../styles/assets/icons";
import { Column, Sort } from "../decks";

import s from "./decks-header.module.scss";

import { TableHead, TableHeadCell, TableRow } from "@/components";
export const SortedHeaderDecks: FC<
  Omit<
    ComponentPropsWithoutRef<"thead"> & {
      columns: Column[];
      sort?: Sort;
      onSort?: (sort: Sort) => void;
    },
    "children"
  >
> = ({ columns, sort, onSort, ...restProps }) => {
  const handleSort = (key: string, sortable?: boolean) => () => {
    if (!onSort || !sortable) return;

    if (sort?.key !== key) return onSort({ key, direction: "asc" });

    if (sort.direction === "desc") return onSort(null);

    return onSort({
      key,
      direction: sort?.direction === "asc" ? "desc" : "asc",
    });
  };

  return (
    <TableHead {...restProps}>
      <TableRow>
        {columns.map(({ title, key, sortable }) => (
          <TableHeadCell key={key} onClick={handleSort(key, sortable)}>
            <div className={s.container}>
              {title}
              {sort && sort.key === key && (
                <div className={s.iconSort}>
                  {sort.direction === "asc" ? <UpIcon /> : <DownIcon />}
                </div>
              )}
            </div>
          </TableHeadCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
