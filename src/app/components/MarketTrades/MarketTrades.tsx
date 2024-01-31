"use client";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import moment from "moment";

const tableData = [
  {
    id: 1,
    price: 41789.2,
    volume: 0.00018,
    time: "01:23:30",
    type: "sell",
  },
  {
    id: 2,
    price: 41789.2,
    volume: 0.00018,
    time: "01:23:30",
    type: "buy",
  },
  {
    id: 3,
    price: 41789.2,
    volume: 0.00018,
    time: "01:23:30",
    type: "sell",
  },

  {
    id: 1,
    price: 41789.2,
    volume: 0.00018,
    time: "01:23:30",
    type: "sell",
  },
  {
    id: 2,
    price: 41789.2,
    volume: 0.00018,
    time: "01:23:30",
    type: "buy",
  },
  {
    id: 3,
    price: 41789.2,
    volume: 0.00018,
    time: "01:23:30",
    type: "sell",
  },
];

interface CellInfo {
  value: any;
  column: {
    columnDef: {
      cell: (info: CellInfo) => React.ReactNode;
    };
  };
}

interface CustomColumnDef {
  header: string;
  accessorKey: string;
  cell?: (info: CellInfo) => React.ReactNode;
}

export default function MarketTrades() {
  const data = useMemo(() => tableData, []);

  const columns: CustomColumnDef[] = [
    {
      header: "PRICE",
      accessorKey: "price",
      cell: (info: CellInfo) => (
        <div style={{ textAlign: "start" }}>{info.row.original.price}</div>
      ),
    },
    {
      header: "VOLUME",
      accessorKey: "volume",
    },
    {
      header: "TIME",
      accessorKey: "time",
      cell: (info: CellInfo) => (
        <div style={{ textAlign: "end" }}>{info.row.original.time}</div>
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="sm:w-[100%] flex flex-col  h-[100%] sm:flex-col sm:h-[100%]">
      <table>
        <thead className="bg-switchColor">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              className=" border-b-[1.6px] sm:border-b-[1.6px] border-borderline"
              key={headerGroup.id}
            >
              {headerGroup.headers.map((header) => (
                <th
                  className={`${
                    header.column.columnDef.accessorKey === "volume"
                      ? "text-center"
                      : ""
                  } ${
                    header.column.columnDef.accessorKey === "time"
                      ? "text-end"
                      : ""
                  }  text-[0.65rem] sm:text-[0.8rem] font-thin sm:font-normal px-3 py-2 sm:p-0 sm:px-4 sm:py-2 sm:items-center`}
                  key={header.id}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel()?.rows?.map((row) => (
            <tr
              className={`${
                row.original.type === "sell"
                  ? "bg-red"
                  : row.original.type === "buy"
                  ? "bg-green"
                  : ""
              } sm:text-[0.8rem] sm:h-[2.8rem] text-[0.8rem] border-b-[1px] sm:border-b-[1px] border-borderline sm:justify-between items-center sm:items-center`}
              key={row.id}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  className={`  text-center sm:text-center px-3 sm:px-0 py-2 sm:py-0 text-[0.6rem] sm:text-[0.6rem] font-normal `}
                  key={cell.id}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
