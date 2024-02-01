"use client";
import React, { useEffect, useState } from "react";
import LiveChart from "../LiveChart/LiveChart";
import useWindowResize from "@/app/Hooks/useWindowResize";
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

export default function ChartSection() {
  const dispatch = useDispatch();
  const { loading, allCoins, currentRates, selectedCoin, error } = useSelector(
    (state) => state.coin
  );

  console.log("currentRates from chartsection===", currentRates);

  const timeframes = ["1M", "5M", "15M", "30M", "1H", "1D", "7D"];
  const isMobile = useWindowResize();

  //get all the coins from api
  const getAllCoins = async () => {
    try {
      const token =
        "163|$2y$10$TNMR1LoblGCWHFrm.nJbE.NJPBNLlcWXih5qcZBKn30m8VMv.0G8y5c765261";
      dispatch(getAllCoinsRequest());
      const response = await getRequestAPIHelper(
        "http://authentication.bit24hr.in/api/v1/get-coins",
        token
      );
      console.log("response.coins====", response.coins);
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
      // console.log("WebSocket data received current rate:=====", data);
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
    <section className="flex flex-col sm:flex-col sm:w-[52vw] sm:mr-3 rounded-t sm:rounded-lg  h-[100%]  sm:h-[100%]">
      <div className=" sm-w-[100%] flex sm:justify-between flex-col sm:flex-row bg-dashbgtrans h-[5.2rem]   sm:h-[18.57%] sm:border-b-2 border-borderline">
        <div className="  flex sm:w-[27%]  sm:p-0  w-[100%] h-[100%]  flex-row sm:flex-row justify-between sm:justify-evenly sm:items-center ">
          <div className=" w-[50%] justify-center items-center flex flex-row">
            <img
              src="/dashboard/exchange/tron.svg"
              className="h-[1.5rem] mr-3"
            />
            <span className="font-poppinsMedium mr-1">TetherUS</span>
            <span className="font-poppinsRegular">{selectedCoin.name}</span>
          </div>
          {isMobile && (
            <div className="sm:mr-12 mr-3 w-[30%]  flex flex-col sm:w-[25%] items-end justify-center sm:items-center sm:justify-evenly">
              <span className="sm:text-[0.8rem] font-poppinsRegular text-[0.7rem] ">
                Live Price
              </span>
              <span className="sm:text-[0.6rem] font-poppinsMedium text-[0.8rem] ">
                ₹ {selectedCoin.currentRate}
              </span>
            </div>
          )}
        </div>
        <div className="sm:w-[70%] sm:h-auto bg-switchColor sm:bg-dashbgtrans py-1 h-[3.8rem] sm:border-0  border-b border-bordersBg text-[0.55rem] sm:text-[0.55rem] flex flex-row sm:flex-row justify-evenly sm:justify-evenly">
          <div className="flex flex-col  sm:flex-col  justify-center items-center sm:justify-center sm:items-start">
            <span>Last Price</span>
            <span className="font-poppinsSemibold sm:text-[0.6rem]">86.33</span>
          </div>
          <div className="flex flex-col sm:flex-col justify-center items-center sm:justify-center sm:items-start">
            <span>Volume</span>
            <span className="font-poppinsSemibold sm:text-[0.6rem]">
              20,000
            </span>
          </div>
          <div className="flex flex-col sm:flex-col justify-center items-center sm:justify-center sm:items-start">
            <span>Changes</span>
            <span className="font-poppinsSemibold sm:text-[0.6rem] text-priceRed">
              -9.65%
            </span>
          </div>
          <div className="flex flex-col sm:flex-col justify-center items-center sm:justify-center sm:items-start">
            <span>High</span>
            <span className="font-poppinsSemibold sm:text-[0.6rem]">89.26</span>
          </div>
          <div className="flex flex-col sm:flex-col justify-center items-center sm:justify-center sm:items-start">
            <span>Low</span>
            <span className="font-poppinsSemibold sm:text-[0.6rem]">84.59</span>
          </div>
        </div>
      </div>
      {/* timeframe containers mapped from here */}
      <div className="bg-dashbgtrans sm:pb-0   h-[8%] sm:h-[14%] flex flex-row sm:flex-row justify-between sm:justify-between items-center sm:items-center">
        <div className=" ml-4 sm:ml-4 font-poppinsRegular ">
          <div
            className="border rounded-sm flex sm:flex-row sm:items-center sm:text-center sm:justify-center"
            style={{ borderColor: "rgba(130, 156, 165, 1)" }}
          >
            {timeframes.map((timeframe, index) => (
              <button
                key={timeframe}
                className={`sm:p-1 h-[1.5rem] w-[1.8rem] sm:w-auto sm:h-auto px-2 flex items-center  justify-center  ${
                  index !== timeframes.length - 1 ? "border-r" : ""
                }`}
                // onClick={() => handleTimeframeChange(timeframe)}
                style={{
                  // marginRight: "5px",
                  color: "rgba(130, 156, 165, 1)",
                  fontSize: "0.5rem",
                  borderColor: "rgba(130, 156, 165, 1)",
                }}
              >
                {timeframe}
              </button>
            ))}
          </div>
        </div>
        {!isMobile && (
          <div className="sm:mr-12  flex sm:w-[25%] sm:items-center sm:justify-evenly">
            <span className="sm:text-[0.8rem]">Live Price</span>
            <span className="sm:text-[0.6rem]">
              ₹{" "}
              {currentRates[selectedCoin.lowerCaseName]
                ? currentRates[selectedCoin.lowerCaseName].buy
                : "0"}
            </span>
          </div>
        )}
      </div>

      <div className="bg-dashbgtrans sm:mt-0  w-[100%] sm:h-[69.4%] sm:rounded-b-lg sm:w-[100%] sm:p-2 ">
        <div className="rounded-lg  sm:h-[100%] sm:w-[100%]  ">
          <LiveChart />
        </div>
      </div>
    </section>
  );
}
