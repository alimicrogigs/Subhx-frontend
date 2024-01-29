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
    type: "Sell",
    price: 320.26,
    currency: "USDT",
    status: "Success",
    date: "2020-07-18 15:00:00.000",
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
    date: "2020-07-12 15:00:00.000",
    quantity: 4.0,
  },
  {
    id: 2,
    type: "Sell",
    price: 320.26,
    currency: "USDT",
    status: "Success",
    date: "2020-07-18 15:00:00.000",
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
    date: "2020-07-12 15:00:00.000",
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
      header: "Total",
      accessorKey: "typeAndPrice",
      cell: (info: CellInfo) => (
        <div>
          {info.row.original.type} <br />
          {info.row.original.price}
        </div>
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
          <span>{moment(info.row.original.date).format("YYYY-MM-DD")}</span>
          <span>{moment(info.row.original.date).format("HH:mm:ss")}</span>
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
    <div className="flex flex-col  sm:flex-col bg-dashbgtrans h-[100%] sm:mr-3 w-[100vw] sm:w-[48vw] sm:rounded-lg">
      <div className="sm:h-[8vh] h-[10vh]  sm:border-b-2 border-borderline flex items-center sm:items-end">
        <span className="border-b-4 text-sm font-poppinsRegular border-borderline px-7 sm:px-4  p-2 sm:p-2">
          Order Book
        </span>
      </div>
      <table className=" ">
        <thead className=" ">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              className="sm:border-b-[1.6px] border-borderline "
              key={headerGroup.id}
            >
              {headerGroup.headers.map((header) => (
                <th
                  className=" text-[0.65rem] sm:text-[0.8rem] font-normal px-4 sm:px-4 py-2 sm:py-2 items-center sm:items-center"
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
        <tbody className=" h-[60%] ">
          {table.getRowModel().rows.map((row) => (
            <tr
              style={{
                backgroundColor:
                  row.original.type === "Buy"
                    ? "rgba(90, 215, 118, 0.15)"
                    : "rgba(230, 86, 97, 0.15)",
              }}
              className=" text-[0.6rem] sm:text-[0.8rem] items-center sm:items-center"
              key={row.id}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  className=" text-center sm:text-center px-4 sm:px-4 py-2 sm:py-2 text-[0.6rem] sm:text-[0.6rem] font-normal "
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
