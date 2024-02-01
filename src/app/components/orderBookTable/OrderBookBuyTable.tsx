"use client";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useMemo, useState, useEffect } from "react";
import moment from "moment";

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
  const [percentages, setPercentages] = useState<number[]>([]);

  useEffect(() => {
    const newData = [...buyData.slice(0, 10)];

    const volumes = newData.map((item) => item[1]);
    const maxVolume = Math.max(...volumes);
    const minVolume = Math.min(...volumes);

    const calculatedPercentages = volumes.map(
      (volume) => ((volume - minVolume) / (maxVolume - minVolume)) * 100
    );

    setPercentages(calculatedPercentages);
    setData(newData);
  }, [buyData]);

  console.log("percentages====", percentages);
  // percentages.map((per, ind) => console.log("mapped per", per));

  const columns: CustomColumnDef[] = [
    {
      header: "VOLUME",
      accessorKey: "volume",
      cell: (info: cellInfo) => {
        return (
          <div
            style={{
              textAlign: "start",
            }}
          >
            {info.row.original[1]}
          </div>
        );
      },
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
        <tbody className="">
          {table.getRowModel()?.rows?.map((row) => (
            <tr
              className={`  relative sm:text-[0.8rem] sm:h-[1.4rem] text-[0.8rem]  sm:justify-between items-center sm:items-center`}
              key={row.id}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  className={`  font-poppinsSemibold text-center sm:text-center px-3 sm:px-0 py-2 sm:py-0 text-[0.6rem] sm:text-[0.6rem] font-normal `}
                  key={cell.id}
                >
                  <div
                    className={`nikhil sm:w-[20%]  absolute bg-green-900  right-0 top-0 bottom-0 left-auto`}
                  ></div>

                  <div className="relative z-10">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
