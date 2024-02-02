"use client";
import React, { useState, useEffect } from "react";
import jwtDecode from 'jwt-decode';
import OrderHistory from "@/app/components/OrderHistory/OrderHistory";
import OrderSection from "@/app/components/OrderSection/OrderSection";
import ChartSection from "@/app/components/chartSection/ChartSection";
import CurrencySection from "@/app/components/currencySection/CurrencySection";
import OrderBook from "@/app/components/orderBook/OrderBook";
import useWindowResize from "@/app/Hooks/useWindowResize";
import BottomBar from "@/app/components/BottomBar/BottomBar";
import {
  getAllCoinsRequest,
  getAllCoinsSuccess,
  getAllCoinsFailure,
  currentRatesRequest,
  currentRatesSuccess,
  currentRatesFailure,
} from "../../actions/coinsActions";
import { useDispatch, useSelector } from "react-redux";
import { getRequestAPIHelper } from "@/app/helperfunctions";
const apiUrl = process.env.API_URL;
const token = localStorage.getItem("token");

export default function page() {
  const dispatch = useDispatch();

  const isMobile = useWindowResize();
  const [currentLayout, setCurrentLayout] = useState("MARKETS");

  console.log("ismobile===", isMobile);
  const handleChangeLayout = (newLayout: any) => {
    setCurrentLayout(newLayout);
  };


  //get all the coins from api
  const getAllCoins = async () => {
    try {
      
      dispatch(getAllCoinsRequest());
      const response = await getRequestAPIHelper(apiUrl + "get-coins", token);
      // console.log("response.coins====", response.coins);
      if (response) {
        dispatch(getAllCoinsSuccess(response.coins));
      }
    } catch (error) {
      dispatch(getAllCoinsFailure(error));
    }
  };

  useEffect(() => {
    getAllCoins();
  }, []);

  //fethcing currentRates from socket
  useEffect(() => {
    const socket = new WebSocket("ws://stream.bit24hr.in:8765/current_rate");
    socket.onopen = () => {
      console.log("WebSocket connection opened");
    };

    socket.onopen = () => {
      console.log("WebSocket connection opened");
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      // console.log("WebSocket data received current rate page.tsx:=====", data);
      dispatch(currentRatesSuccess(data));
      // const changes = calculatePercentageChanges(data);
      // Update state with percentage changes
      // setPercentageChanges(changes);
    };
    socket.onclose = (event) => {
      console.log("WebSocket connection closed:", event);
    };

    return () => {
      socket.close();
    };
  }, [dispatch]);

  return (
    <>
      {!isMobile ? (
        <div className="w-[100%] text-white  sm:h-full   sm:max-h-screen  sm:overflow-x-hidden">
          <div className="sm:h-auto   flex sm:flex-row  sm:m-2">
            {/* currency section */}
            <div className="sm:h-[130vh]">
              {!isMobile && <CurrencySection />}
            </div>
            <div className="flex  sm:h-[130vh]  sm:ml-4 sm:rounded-lg sm:flex-col">
              <div className="sm:h-[50%] flex  sm:rounded-lg sm:flex-row">
                <ChartSection />
                if()
                <OrderSection />
              </div>
              <div className="sm:h-[50%] flex  sm:mt-3 sm:rounded-lg sm:flex-row">
                <OrderBook />
                <OrderHistory />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[100%] h-[100vh]  flex justify-between flex-col  text-white sm:m-2">
          <div className="w-[100%] h-[90%]  ">
            {currentLayout === "MARKETS" && <CurrencySection />}
            {currentLayout === "CHARTS" && <ChartSection />}
            {currentLayout === "MYORDER" && <OrderHistory />}

            {currentLayout === "ORDERBOOK" && <OrderBook />}
          </div>

          <div className=" sticky bg-dashbgtrans h-[10%] w-full">
            {isMobile && <BottomBar onChangeLayout={handleChangeLayout} />}
          </div>
        </div>
      )}
    </>
  );
}

{
  /* values of order book start here*/
}
{
  /* <div className=" sm:w-[100%] flex sm:text-[0.8rem] bg-red-200 sm:justify-between">
          <div className="sm:w-[47%] flex sm:flex-row bg-blue-200">
            <div className="sm:w-[60%] sm:text-end bg-green-200">buyprice</div>
            <div className="sm:w-[40%] sm:text-end bg-red-400">volume</div>
          </div>
          <div className="sm:w-[47%] flex sm:flex-row bg-blue-200">
            <div className="sm:w-[40%] sm:text-start bg-red-400">sellprice</div>
            <div className="sm:w-[60%] sm:text-start bg-green-200">volume</div>
          </div>
        </div> */
}
{
  /* values of order book end here */
}
