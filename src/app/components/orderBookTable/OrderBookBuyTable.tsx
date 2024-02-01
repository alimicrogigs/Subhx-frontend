"use client";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useMemo, useState, useEffect } from "react";
import moment from "moment";

// const tableData = [
//   {
//     id: 1,
//     rate: 320.26,
//     volume: 0.002,
//   },

//   {
//     id: 2,
//     rate: 222,
//     volume: 11111,
//   },
//   {
//     id: 3,
//     rate: 320.26,
//     volume: 0.002,
//   },
//   {
//     id: 4,
//     rate: 320.26,
//     volume: 0.002,
//   },
//   {
//     id: 5,
//     rate: 320.26,
//     volume: 0.002,
//   },

//   {
//     id: 6,
//     rate: 222,
//     volume: 11111,
//   },

//   // Add more data as needed
// ];

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

interface OrderBookBuyTableProps {
  buyData: Order[];
}

export default function OrderBookBuyTable({ buyData }: OrderBookBuyTableProps) {
  const [data, setData] = useState<Order[]>([]);

  useEffect(() => {
    // console.log("buy data========= :", buyData);

    setData((prevData) => {
      const newData = [...buyData.slice(0, 10)];
      const previousData = prevData.slice(0, 10 - newData.length);

      return [...newData, ...previousData];
    });
  }, [buyData]);

  const columns: CustomColumnDef[] = [
    {
      header: "VOLUME",
      accessorKey: "volume",
      cell: (info: cellInfo) => (
        <div style={{ textAlign: "start" }}>{info.row.original[1]}</div>
      ),
    },
    {
      header: "BUY PRICE",
      accessorKey: "rate",
      cell: (info: cellInfo) => (
        <div style={{ textAlign: "end", color: "rgba(90, 215, 118, 1)" }}>
          {info.row.original[0]}
        </div>
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
                      ? "text-start"
                      : ""
                  } ${
                    header.column.columnDef.accessorKey === "rate"
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
                  : row.original.type === "rate"
                  ? "bg-green"
                  : ""
              } sm:text-[0.8rem] sm:h-[1.4rem] text-[0.8rem]  sm:justify-between items-center sm:items-center`}
              key={row.id}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  className={` font-poppinsSemibold text-center sm:text-center px-3 sm:px-0 py-2 sm:py-0 text-[0.6rem] sm:text-[0.6rem] font-normal `}
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
