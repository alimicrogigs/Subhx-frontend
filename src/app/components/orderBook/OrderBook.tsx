"use client";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useMemo } from "react";
import moment from "moment";

const tableData = [
  {
    id: 1,
    type: "Buy",
    price: 320.26,
    currency: "USDT",
    status: "Success",
    date: "2020-07-10 15:00:00.000",
    quantity: 4.0,
  },
  {
    id: 2,
    type: "sell",
    price: 320.26,
    currency: "USDT",
    status: "Success",
    date: "2020-07-10 15:00:00.000",
    quantity: 4.0,
  },
  {
    id: 3,
    type: "Buy",
    price: 320.26,
    currency: "USDT",
    status: "Success",
    date: "2020-07-10 15:00:00.000",
    quantity: 4.0,
  },
  {
    id: 4,
    type: "Buy",
    price: 320.26,
    currency: "USDT",
    status: "Success",
    date: "2020-07-10 15:00:00.000",
    quantity: 4.0,
  },
  // Add more data as needed
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

export default function OrderBook() {
  const data = useMemo(() => {
    return tableData.map((item) => ({
      ...item,
      formattedDateTime: moment(item.date).format("YYYY-MM-DD HH:mm:ss"),
      typeAndPrice: `${item.type} ${item.price}`,
    }));
  }, []);

  const columns: CustomColumnDef[] = [
    {
      header: "Type",
      accessorKey: "typeAndPrice", 
      cell: (info: CellInfo) => (
        <span>{info.value}</span> 
      ),
    },
    {
      header: "Price",
      accessorKey: "currency",
    },
    {
      header: "Status",
      accessorKey: "status",
    },
    {
      header: "Date",
      accessorKey: "formattedDateTime",
      cell: (info: CellInfo) => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>{moment(info.value).format("YYYY-MM-DD")}</span>
          <span>{moment(info.value).format("HH:mm:ss")}</span>
        </div>
      ),
    },
    {
      header: "Quantity",
      accessorKey: "quantity",
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex sm:flex-col bg-dashbgtrans sm:mr-3 sm:w-[48vw] sm:rounded-lg">
      <div className="sm:h-[8vh]  flex sm:items-end">
        <span className="border-b-4 border-borderline sm:px-4 sm:p-2">
          Order Book
        </span>
      </div>
      <table className="">
        <thead className=" ">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className=" " key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className=" border-2 sm:text-[0.8rem] font-normal sm:px-4 sm:py-2 sm:items-center"
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
          {table.getRowModel().rows.map((row) => (
            <tr
              style={{
                backgroundColor:
                  row.original.type === "Buy"
                    ? "rgba(90, 215, 118, 0.15)"
                    : "rgba(230, 86, 97, 0.15)",
              }}
              className="sm:text-[0.8rem] sm:items-center"
              key={row.id}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  className="border-2 sm:text-center sm:px-4 sm:py-2 sm:text-[0.6rem] font-normal "
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
