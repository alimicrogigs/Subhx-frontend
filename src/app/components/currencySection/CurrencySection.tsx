"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedCoinData } from "../../actions/coinsActions";

import "./currency.css";
import { getRequestAPIHelper } from "@/app/helperfunctions";
import { collectGenerateParams } from "next/dist/build/utils";

export default function CurrencySection() {
  const dispatch = useDispatch();
  const { loading, allCoins, currentRates, selectedCoin, error } = useSelector(
    (state:any) => state.coin
  );

  const filteredCoins = allCoins.filter((obj: any) => obj.coin !== "INR");

  const [currenciesData, setCurrenciesData] = useState(filteredCoins);
  const [percentageChanges, setPercentageChanges] = useState({});

  //handle click function to select the coin and store their data in redux state to show in other component

  const handleCoinClick = (coin:any) => {
    dispatch(
      selectedCoinData({
        name: coin.coin,
        currentRate: currentRates[coin.coin.toLowerCase()]?.buy || "N/A",
      })
    );
  };

  const handleFavoriteClick = (id: any) => {
    const updatedCurrencies = currenciesData.map((currency:any) =>
      currency.id === id
        ? { ...currency, favorite: !currency.favorite }
        : currency
    );
    setCurrenciesData(updatedCurrencies);
  };

  const calculatePercentageChanges = (data: any) => {
    const changes = {};

    // Iterate through each coin in currentRates
    for (const coin in data) {
      if (data.hasOwnProperty(coin)) {
        // Calculate percentage change and update changes object
        const buyChange = calculatePercentageChange(
          data[coin].buy,
          currentRates[coin]?.buy
        );
        const sellChange = calculatePercentageChange(
          data[coin].sell,
          currentRates[coin]?.sell
        );

        changes[coin] = { buy: buyChange, sell: sellChange };
      }
    }


    return changes;
  };

  const calculatePercentageChange = (newPrice:any, oldPrice:any) => {
    if (oldPrice === undefined || oldPrice === null) {
      return 0; // Handle cases where oldPrice is not available
    }

    if (oldPrice === 0) {
      // Handle cases where oldPrice is zero
      return "Infinity";
    }

    const percentageChange = ((newPrice - oldPrice) / oldPrice) * 100;
    return percentageChange.toFixed(2); // Round to 2 decimal places
  };

  return (
    <section className="sm:h-[100%] h-[100%] sm:rounded-lg w-full sm:w-[17vw] flex flex-col sm:flex-col sm:m-w-[16vw] bg-dashbgtrans">
      <div className=" sm:h-[9.2%] h-[4rem]  border-borderline  flex flex-row sm:flex-row justify-center items-center sm:justify-center  gap-x-3 sm:gap-x-2  sm:items-center">
        <div className="sm:w-[20%] w-[11%] bg-switchColor h-[65%] sm:h-[40%] rounded-md sm:rounded-md border border-borderline flex items-center justify-center sm:items-center sm:justify-center ">
          <img src="/dashboard/exchange/favHeart.svg" className="h-[1.2rem]" />
        </div>
        <div className="sm:w-[60%] w-[73%] bg-switchColor h-[65%] sm:h-[40%] rounded-md sm:rounded-md text-[0.8rem] sm:text-[0.7rem] border border-borderline flex gap-x-1 sm:gap-x-1 font-poppinsRegular items-center sm:items-center p-1 sm:p-1">
          <img
            src="/dashboard/exchange/searchIcon.svg"
            className="sm:px-2 p-2"
            alt="Search Icon"
          />
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-transparent flex-1 overflow-hidden"
          />
        </div>
      </div>
      <div className="flex sm:flex-row bg-switchColor font-poppinsRegular text-[0.6rem] sm:border-b-2 border-borderline sm:text-[0.5rem] p-1 sm:p-1 justify-between items-start">
        <span className=" ml-7 sm:ml-4">Fav</span>
        <span className="  sm:-ml-5">PAIR</span>
        <span className="">CHANGES</span>
        <span className="sm:mr-3 mr-10">PRICE</span>
      </div>
      <div className={`flex flex-col`}>
        {filteredCoins.map((currency:any) => {
          const lowercaseCoinName = currency.coin.toLowerCase();

          const decodedSvg = atob(currency.icon);

          return (
            <div
              key={currency.id}
              onClick={() => handleCoinClick(currency)}
              className="flex sm:w-[100%] flex-row  sm:text-center sm:flex-row items-center sm:items-center border-b border-borderline justify-evenly sm:justify-between text-[0.55rem] sm:text-[0.55rem] h-[3rem] sm:p-2 sm:h-[2.4rem]"
            >
              <img
                className="   cursor-pointer"
                src={
                  currency.favorite
                    ? "/dashboard/exchange/favHeartFill.svg"
                    : "/dashboard/exchange/favHeartThin.svg"
                }
                onClick={() => handleFavoriteClick(currency.id)}
              />

              <div
                dangerouslySetInnerHTML={{ __html: decodedSvg }}
                className="sm:w-[1rem] sm:h-[1rem]  "
              ></div>

              <span className="sm:text-[0.8rem] text-[0.9rem]  font-poppinsMedium">
                {currency.coin}
              </span>
              <span className={`sm:text-[0.45rem] text-[0.7rem] `}>
                {percentageChanges[currency.coin]?.sell || "N/A"}%
              </span>
              <span className="sm:text-[0.45rem] sm:ml-0  text-[0.7rem]">
                {currentRates[lowercaseCoinName]
                  ? currentRates[lowercaseCoinName].buy
                  : "N/A"}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

//https://www.tradingview.com/?utm_source=https%3A%2F%2Fbit24hr.in&utm_medium=library&utm_campaign=library
