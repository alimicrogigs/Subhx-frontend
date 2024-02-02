"use client";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useMemo, useState, useEffect } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { marketData } from "@/app/actions/orderBookActions";

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

interface MarketTradeProps {
  marketTradeData: Order[];
}

// {
//   "rate": 88.1081105563451,
//   "timestamp": "2024-02-02 21:57:31",
//   "volume": 8239.88
// }

export default function MarketTrades() {
  const { marketTradeData } = useSelector((state: any) => state.orderBook);
  const { loading, allCoins, currentRates, selectedCoin, error } = useSelector(
    (state: any) => state.coin
  );

  console.log("marketTradeData====", marketTradeData);
  const data = useMemo(() => marketTradeData, [marketTradeData]);
  const dispatch = useDispatch();

  var marketTradeSocketUrl: any;
  console.log("selectedCoin.name from market trade=======", selectedCoin.name);

  if (selectedCoin.name === "USDT") {
    console.log("usdt clicked=========");
    marketTradeSocketUrl = "ws://stream.bit24hr.in:8765/usdt_market_history";
  } else if (selectedCoin.name === "BTC") {
    console.log("usdt clicked=========");

    marketTradeSocketUrl = "ws://stream.bit24hr.in:8765/btc_market_history";
  }

  //socket to fetching market trade data
  useEffect(() => {
    // console.log("marketTradeSocketUrl========", marketTradeSocketUrl);
    const socket = new WebSocket(marketTradeSocketUrl);

    socket.onopen = () => {
      console.log("WebSocket connection opened");
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      dispatch(marketData(data));
      console.log("WebSocket data received for market trades:", data);
    };

    socket.onclose = (event) => {
      console.log("WebSocket connection closed:", event);
    };

    // Clean up when component unmounts or when selectedCoin.name changes
    return () => {
      socket.close();
    };
  }, [selectedCoin.name]);

  const columns: CustomColumnDef[] = [
    {
      header: "PRICE",
      accessorKey: "rate",
      cell: (info: CellInfo) => {
        const nextIndex = info.row.index + 1;
        const nextRow = table.getRowModel()?.rows?.[nextIndex];

        const rateClass =
          nextRow && info.row.original.rate !== nextRow.original.rate
            ? info.row.original.rate > nextRow.original.rate
              ? "text-priceGreen"
              : "text-priceRed"
            : "text-priceRed";

        const arrowIcon = nextRow
          ? info.row.original.rate > nextRow.original.rate
            ? "↑"
            : "↓"
          : "↓";

        return (
          <div className=" sm:gap-1  flex flex-row">
            <div className={`sm:text-[0.6rem] font-poppinsBold ${rateClass}`}>
              {arrowIcon}
            </div>
            <div
              className={`font-poppinsSemibold  ${rateClass}`}
              style={{ textAlign: "start" }}
            >
              {info.row.original.rate.toFixed(2)}
            </div>
          </div>
        );
      },
    },
    {
      header: "VOLUME",
      accessorKey: "volume",
      cell: (info: CellInfo) => (
        <div className="font-poppinsSemibold">
          {info.row.original.volume.toFixed(4)}
        </div>
      ),
    },
    {
      header: "TIME",
      accessorKey: "timestamp",
      cell: (info: CellInfo) => (
        <div style={{ textAlign: "end" }}>
          {moment(info.row.original.timestamp).format("HH:mm:ss")}
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
                      ? "text-center"
                      : ""
                  } ${
                    header.column.columnDef.accessorKey === "timestamp"
                      ? "text-end"
                      : ""
                  }  text-[0.65rem]  sm:text-[0.8rem] font-thin sm:font-normal px-3 py-2 sm:p-0 sm:px-4 sm:py-2 sm:items-center`}
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
          {table.getRowModel()?.rows?.map((row, index, array) => {
            const nextIndex = index + 1;

            const rowClassName =
              nextIndex < array.length
                ? row.original.rate > array[nextIndex].original.rate
                  ? "bg-priceGreenBg"
                  : row.original.rate < array[nextIndex].original.rate
                  ? "bg-priceRedBg"
                  : ""
                : "bg-priceRedBg";

            const textClass =
              nextIndex < array.length
                ? row.original.rate > array[nextIndex].original.rate
                  ? "text-priceGreen"
                  : row.original.rate < array[nextIndex].original.rate
                  ? "text-priceRed"
                  : ""
                : "text-priceRed";
            return (
              <tr
                className={`${rowClassName}  sm:text-[0.8rem] sm:h-[1.4rem] text-[0.8rem] sm:justify-between items-center sm:items-center`}
                key={row.id}
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    className={` ${cell.column.columnDef.cell}  text-center sm:text-center px-3 sm:px-0 py-2 sm:py-0 text-[0.6rem] sm:text-[0.6rem] font-normal `}
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
