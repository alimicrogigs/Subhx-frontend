"use client";
import { useState, useEffect } from "react";

import useWindowResize from "@/app/Hooks/useWindowResize";
import MarketTrades from "../MarketTrades/MarketTrades";
import HeadLines from "../Headlines/Headlines";

const tableData = [
  {
    id: 1,
    buyPrice: 320.26,
    volume: 0.002,
  },

  {
    id: 2,
    sellPrice: 222,
    volume: 11111,
  },
  {
    id: 3,
    buyPrice: 320.26,
    volume: 0.002,
  },
  {
    id: 4,
    sellPrice: 320.26,
    volume: 0.002,
  },

  // Add more data as needed
];

export default function OrderBook() {
  const isMobile = useWindowResize();

  const [orderType, setOrderType] = useState("orderBook");

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

  // useEffect(() => {
  //   const socket = new WebSocket("ws://stream.bit24hr.in:8765/usdt_order_book");
  //   socket.onopen = () => {
  //     console.log("WebSocket connection opened");
  //   };

  //   socket.onopen = () => {
  //     console.log("WebSocket connection opened");
  //   };

  //   socket.onmessage = (event) => {
  //     const data = JSON.parse(event.data);
  //     console.log("WebSocket data received:", data);
  //   };

  //   socket.onclose = (event) => {
  //     console.log("WebSocket connection closed:", event);
  //   };

  //   return () => {
  //     socket.close();
  //   };
  // }, []);

  return (
    <div className="flex flex-col   sm:flex-col bg-dashbgtrans h-[100%] sm:mr-3 w-[100vw] sm:w-[48vw] sm:rounded-lg">
      <div className="sm:h-[8vh] h-[10vh] w-[100%] bg-green-200  sm:border-b-2 border-borderline flex items-center sm:items-end">
        <span
          className={` ${
            orderType === "orderBook" ? "sm:border-b-4 border-b-4 " : ""
          } font-poppinsRegular  border-borderline  sm:px-4 bg-red-200 py-2 sm:p-3 text-[0.5rem]`}
          onClick={() => setOrderType("orderBook")}
        >
          Order Book
        </span>
        <span
          className={`${
            orderType === "marketTrades" ? "sm:border-b-4 border-b-4" : ""
          } text-sm font-poppinsRegular  border-borderline bg-red-300  sm:px-4  py-2 sm:p-3 text-[0.5rem]`}
          onClick={() => setOrderType("marketTrades")}
        >
          Market trades
        </span>
        <span
          className={`${
            orderType === "headlines" ? "sm:border-b-4 border-b-4" : ""
          } text-sm font-poppinsRegular border-borderline bg-red-400  sm:px-4  py-2 sm:p-3 text-[0.5rem]`}
          onClick={() => setOrderType("headlines")}
        >
          Headlines
        </span>
      </div>

      {/*===== order book data =====*/}

      {orderType === "orderBook" && (
        <div className="  flex  sm:h-[90%] h-auto flex-row  sm:flex-row justify-between sm:justify-between">
          {/* heading orderbook */}

          <div className="sm:w-[48%] w-[48%]   flex flex-col sm:flex-col ">
            <div className="flex sm:text-[0.5rem] text-[0.55rem] flex-row sm:flex-row">
              <div className="sm:w-[60%] w-[60%] text-[0.65rem] text-end sm:text-end ">
                VOLUME
              </div>
              <div className="sm:w-[40%] w-[40%] text-[0.65rem] text-end sm:text-end ">
                BUY PRICE
              </div>
            </div>
            <div className="flex sm:mt-1 sm:text-[0.7rem] text-[0.9rem] items-center sm:items-center sm:h-[6%] py-1 flex-row">
              <div className="sm:w-[60%] w-[60%] sm:font-poppinsMedium sm:text-end text-end ">
                0.33344
              </div>
              <div className="sm:w-[40%] w-[40%]  sm:text-end text-end sm:font-poppinsSemibold text-green-400">
                {!isMobile ? originalText : `${slicedText}...`}
              </div>
            </div>
            <div className="flex sm:mt-1 sm:text-[0.7rem] text-[0.9rem] items-center sm:items-center sm:h-[6%] py-1 flex-row">
              <div className="sm:w-[60%] w-[60%] sm:font-poppinsMedium sm:text-end text-end ">
                0.33344
              </div>
              <div className="sm:w-[40%] w-[40%]  sm:text-end text-end sm:font-poppinsSemibold text-green-400">
                {!isMobile ? originalText : `${slicedText}...`}
              </div>
            </div>
            <div className="flex sm:mt-1 sm:text-[0.7rem] text-[0.9rem] items-center sm:items-center sm:h-[6%] py-1 flex-row">
              <div className="sm:w-[60%] w-[60%] sm:font-poppinsMedium sm:text-end text-end ">
                0.33344
              </div>
              <div className="sm:w-[40%] w-[40%]  sm:text-end text-end sm:font-poppinsSemibold text-green-400">
                {!isMobile ? originalText : `${slicedText}...`}
              </div>
            </div>
            <div className="flex sm:mt-1 sm:text-[0.7rem] text-[0.9rem] items-center sm:items-center sm:h-[6%] py-1 flex-row">
              <div className="sm:w-[60%] w-[60%] sm:font-poppinsMedium sm:text-end text-end ">
                0.33344
              </div>
              <div className="sm:w-[40%] w-[40%]  sm:text-end text-end sm:font-poppinsSemibold text-green-400">
                {!isMobile ? originalText : `${slicedText}...`}
              </div>
            </div>
          </div>

          <div className="sm:w-[48%] w-[48%]  flex flex-col sm:flex-col ">
            <div className="flex sm:text-[0.5rem] text-[0.65rem] flex-row sm:flex-row">
              <div className="sm:w-[40%] text-[0.65rem] w-[40%] text-start sm:text-start ">
                SELL PRICE
              </div>
              <div className="sm:w-[60%] text-[0.65rem] w-[60%] text-start sm:text-start ">
                VOLUME
              </div>
            </div>
            <div className="flex sm:mt-1 sm:text-[0.7rem] text-[0.9rem] sm:font-poppinsSemibold sm:items-center py-1  sm:h-[6%] flex-row">
              <div className="sm:w-[40%] w-[40%] text-start sm:text-start text-red-500 ">
                {!isMobile ? originalText : `${slicedText}...`}
              </div>
              <div className="sm:w-[60%] w-[60%] text-start sm:text-start sm:font-poppinsMedium ">
                0.33344
              </div>
            </div>
            <div className="flex sm:mt-1 sm:text-[0.7rem] text-[0.9rem] sm:font-poppinsSemibold sm:items-center py-1  sm:h-[6%] flex-row">
              <div className="sm:w-[40%] w-[40%] text-start sm:text-start text-red-500 ">
                {!isMobile ? originalText : `${slicedText}...`}
              </div>
              <div className="sm:w-[60%] w-[60%] text-start sm:text-start sm:font-poppinsMedium ">
                0.33344
              </div>
            </div>
            <div className="flex sm:mt-1 sm:text-[0.7rem] text-[0.9rem] sm:font-poppinsSemibold sm:items-center py-1  sm:h-[6%] flex-row">
              <div className="sm:w-[40%] w-[40%] text-start sm:text-start text-red-500 ">
                {!isMobile ? originalText : `${slicedText}...`}
              </div>
              <div className="sm:w-[60%] w-[60%] text-start sm:text-start sm:font-poppinsMedium ">
                0.33344
              </div>
            </div>
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
