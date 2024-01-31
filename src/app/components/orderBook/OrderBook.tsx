"use client";
import { useState, useEffect, useMemo } from "react";

import useWindowResize from "@/app/Hooks/useWindowResize";
import MarketTrades from "../MarketTrades/MarketTrades";
import HeadLines from "../Headlines/Headlines";
import OrderBookBuyTable from "../orderBookTable/OrderBookBuyTable";
import OrderBookSellTable from "../orderBookTable/OrderBookSellTable";

interface Order {
  close: number;
  high: number;
  low: number;
  open: number;
  time: string;
  volume: number;
}

interface OrderData {
  buy?: Order[];
  sell?: Order[];
}

export default function OrderBook() {
  const isMobile = useWindowResize();

  const [orderType, setOrderType] = useState("orderBook");
  const [orderBookData, setOrderBookData] = useState<OrderData>({
    buy: [],
    sell: [],
  });

  console.log("orderBookData====", orderBookData);
  console.log("orderBookData buy====", orderBookData.buy);
  console.log("orderBookData sell====", orderBookData.sell);

  console.log("orderType===", orderType);

  tableData.map((item) => {
    if (item.buyPrice) {
      console.log("buy", item.buyPrice);
      console.log("volume", item.volume);
    } else if (item.sellPrice) {
      console.log("sell", item.sellPrice);
      console.log("volume", item.volume);
    }
  });

  const originalText = "37,50,978";
  const slicedText = originalText.slice(0, 6);

  useEffect(() => {
    const socket = new WebSocket("ws://stream.bit24hr.in:8765/usdt_order_book");
    socket.onopen = () => {
      console.log("WebSocket connection opened");
    };

  //   socket.onopen = () => {
  //     console.log("WebSocket connection opened");
  //   };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("WebSocket data received:", data);
    };

  //   socket.onclose = (event) => {
  //     console.log("WebSocket connection closed:", event);
  //   };

    return () => {
      socket.close();
    };
  }, []);

  // table code start from here =====================




  return (
    <div className="flex flex-col   sm:flex-col bg-dashbgtrans h-[100%] sm:mr-3 w-[100vw] sm:w-[48vw] sm:rounded-lg">
      <div className="sm:h-[8vh]  h-[8vh] w-[100%]   sm:border-b-2 border-borderline flex justify-evenly sm:justify-start items-end sm:items-end">
        <span
          className={`${
            orderType === "marketTrades" ? "sm:border-b-4 border-b-4" : ""
          } text-sm font-poppinsRegular w-[30%] sm:w-auto text-center  border-borderline   sm:px-4  py-2 sm:p-3 text-[0.5rem]`}
          onClick={() => setOrderType("marketTrades")}
        >
          Market Trades
        </span>

        <span
          className={`${
            orderType === "orderBook" ? "sm:border-b-4 border-b-4" : ""
          } text-sm font-poppinsRegular w-[25%] sm:w-auto text-center   border-borderline   sm:px-4  py-2 sm:p-3 text-[0.5rem]`}
          onClick={() => setOrderType("orderBook")}
        >
          Order Book
        </span>

        <span
          className={`${
            orderType === "headlines" ? "sm:border-b-4 border-b-4" : ""
          } text-sm font-poppinsRegular w-[30%] sm:w-auto text-center  border-borderline  sm:px-4  py-2 sm:p-3 text-[0.5rem]`}
          onClick={() => setOrderType("headlines")}
        >
          Headlines
        </span>
      </div>

      {orderType === "orderBook" && (
        <div className="  flex flex-row  sm:h-[90%] sm:max-h-inherit">
          <div className="sm:w-[50%] w-[50%]  ">
            <OrderBookBuyTable buyData={orderBookData.buy} />
          </div>
          <div className="sm:w-[50%] w-[50%] ">
            <OrderBookSellTable sellData={orderBookData.sell} />
          </div>
        </div>
      )}

      {orderType === "marketTrades" && (
        <div className=" sm:h-[90%]">
          <MarketTrades />
        </div>
      )}
      {orderType === "headlines" && (
        <div className=" sm:h-[90%]">
          <HeadLines />
        </div>
      )}
    </div>
  );
}
