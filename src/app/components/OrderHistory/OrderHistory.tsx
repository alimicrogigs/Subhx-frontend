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
    id: 3,
    coin: "ETH",
    price: 150.75,
    quantity: 2.5,
    date: "2020-08-05 10:30:00.000",
    total: 376.88,
  },
  {
    id: 4,
    coin: "BNB",
    price: 42.9,
    quantity: 7.0,
    date: "2020-08-15 08:45:00.000",
    total: 300.3,
  },
  {
    id: 5,
    coin: "XRP",
    price: 0.75,
    quantity: 100.0,
    date: "2020-09-02 14:20:00.000",
    total: 75.0,
  },
  {
    id: 6,
    coin: "ADA",
    price: 1.2,
    quantity: 50.0,
    date: "2020-09-10 12:15:00.000",
    total: 60.0,
  },
  {
    id: 7,
    coin: "DOGE",
    price: 0.3,
    quantity: 200.0,
    date: "2020-09-25 09:00:00.000",
    total: 60.0,
  },
];

const CompleteOrder = [
  {
    id: 3,
    coin: "SHIB",
    price: 150.75,
    quantity: 2.5,
    date: "2020-08-05 10:30:00.000",
    total: 376.88,
  },
  {
    id: 4,
    coin: "USDT",
    price: 42.9,
    quantity: 7.0,
    date: "2020-08-15 08:45:00.000",
    total: 300.3,
  },
  {
    id: 5,
    coin: "XRP",
    price: 0.75,
    quantity: 100.0,
    date: "2020-09-02 14:20:00.000",
    total: 75.0,
  },
  {
    id: 6,
    coin: "ADA",
    price: 1.2,
    quantity: 50.0,
    date: "2020-09-10 12:15:00.000",
    total: 60.0,
  },
  {
    id: 7,
    coin: "DOGE",
    price: 0.3,
    quantity: 200.0,
    date: "2020-09-25 09:00:00.000",
    total: 60.0,
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

export default function OrderHistory() {
  const [orderType, setOrderType] = useState("open");
  const data = useMemo(() => {
    return orderType === "open"
      ? tableData.map((item) => ({
          ...item,
          formattedDateTime: moment(item.date).format("YYYY-MM-DD HH:mm:ss"),
        }))
      : CompleteOrder.map((item) => ({
          ...item,
          formattedDateTime: moment(item.date).format("YYYY-MM-DD HH:mm:ss"),
        }));
  }, [orderType]);

  const columns: CustomColumnDef[] = [
    {
      header: "COIN",
      accessorKey: "coin",
    },
    {
      header: "PRICE",
      accessorKey: "price",
    },
    {
      header: "QUANTITY",
      accessorKey: "quantity",
    },
    {
      header: "DATE",
      accessorKey: "formattedDateTime",
      cell: (info: CellInfo) => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>{moment(info.row.original.date).format("YYYY-MM-DD")}</span>
          <span>{moment(info.row.original.date).format("HH:mm:ss")}</span>
        </div>
      ),
    },
    {
      header: "TOTAL",
      accessorKey: "total",
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <section className="flex flex-col sm:flex-col bg-dashbgtrans w-[100%] sm:w-[30.2vw]  sm:rounded-lg">
      <div className="sm:h-[8vh] h-[8vh] sm:border-b-2 border-borderline items-end text-center sm:justify-start justify-evenly flex sm:items-end">
        <span
          onClick={() => setOrderType("open")}
          className={` ${
            orderType === "open" ? "sm:border-b-4 border-b-4" : ""
          }  sm:w-[35%] w-[50%] text-md sm:text-sm sm:border-b border-b font-poppinsRegular border-borderline px-4 py-2 sm:px-4 sm:p-2 `}
        >
          Open Order
        </span>
        <span
          onClick={() => setOrderType("complete")}
          className={`${
            orderType === "complete" ? "sm:border-b-4 border-b-4" : ""
          } sm:w-[45%] w-[50%]  text-m sm:text-sm sm:border-b border-b font-poppinsRegular border-borderline px-4 sm:px-4 py-2 sm:p-2`}
        >
          Complete Order
        </span>
      </div>

      <table className="">
        <thead className="bg-switchColor ">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              className=" border-b-[1.6px] sm:border-b-[1.6px] border-borderline"
              key={headerGroup.id}
            >
              {headerGroup.headers.map((header) => (
                <th
                  className={` ${
                    header.column.columnDef.accessorKey === "formattedDateTime"
                      ? "text-center"
                      : ""
                  } text-[0.65rem] sm:text-[0.8rem] font-thin sm:font-normal px-3 py-2 sm:p-0 sm:px-4 sm:py-2 sm:items-center`}
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
              className="sm:text-[0.8rem] sm:h-[2.8rem] text-[0.8rem] border-b-[1px] sm:border-b-[1px] border-borderline items-center sm:items-center"
              key={row.id}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  className=" text-center sm:text-center px-3 sm:px-0 py-2 sm:py-0 text-[0.6rem] sm:text-[0.6rem] font-normal "
                  key={cell.id}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
