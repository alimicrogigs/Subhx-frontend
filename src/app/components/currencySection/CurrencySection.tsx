import React, { useState } from "react";

import "./currency.css";

export default function CurrencySection() {
  const currencies = [
    {
      id: 1,
      icon: "/dashboard/exchange/btc.svg",
      name: "BTC",
      favoriteIcon: "/dashboard/exchange/favHeartThin.svg",
      favorite: false,
      changePercentage: "+0.07%",
      price: "₹ 34,61,173.29",
    },
    {
      id: 2,
      icon: "/dashboard/exchange/btc.svg",
      name: "SHIB",
      favoriteIcon: "/dashboard/exchange/favHeartFill.svg",
      favorite: false,
      changePercentage: "+0.07%",
      price: "₹ 19,62,52.00",
    },
    {
      id: 3,
      icon: "/dashboard/exchange/btc.svg",
      name: "BTC",
      favoriteIcon: "/dashboard/exchange/favHeartThin.svg",
      favorite: false,
      changePercentage: "+0.07%",
      price: "₹ 34,61,173.29",
    },
    {
      id: 4,
      icon: "/dashboard/exchange/btc.svg",
      name: "SHIB",
      favoriteIcon: "/dashboard/exchange/favHeartThin.svg",
      favorite: false,
      changePercentage: "+0.07%",
      price: "₹ 19,62,52.00",
    },
    {
      id: 5,
      icon: "/dashboard/exchange/btc.svg",
      name: "BTC",
      favoriteIcon: "/dashboard/exchange/favHeartThin.svg",
      favorite: false,
      changePercentage: "+0.07%",
      price: "₹ 34,61,173.29",
    },
    {
      id: 6,
      icon: "/dashboard/exchange/btc.svg",
      name: "SHIB",
      favoriteIcon: "/dashboard/exchange/favHeartThin.svg",
      favorite: false,
      changePercentage: "+0.07%",
      price: "₹ 19,62,52.00",
    },
  ];

  const [currenciesData, setCurrenciesData] = useState(currencies);

  const handleFavoriteClick = (id: any) => {
    const updatedCurrencies = currenciesData.map((currency) =>
      currency.id === id
        ? { ...currency, favorite: !currency.favorite }
        : currency
    );
    setCurrenciesData(updatedCurrencies);
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
            className="sm:p-1"
            alt="Search Icon"
          />
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-transparent flex-1 overflow-hidden"
          />
        </div>
      </div>
      <div className="flex sm:flex-row bg-switchColor sm:border-b-2 border-borderline sm:text-[0.5rem] sm:p-1 justify-between items-start">
        <span className="sm:ml-4">Fav</span>
        <span className="sm:-ml-5">Pair</span>
        <span className="">Changes</span>
        <span className="sm:mr-3">Price</span>
      </div>
      <div className={`flex flex-col`}>
        {currenciesData.map((currency) => (
          <div
            key={currency.id}
            className="flex flex-row sm:flex-row items-center sm:items-center border-b border-borderline justify-evenly sm:justify-evenly text-[0.55rem] sm:text-[0.55rem] h-[3rem] p-2 sm:h-[2.4rem]"
          >
            <img
              className="sm:border-r sm:pr-2 cursor-pointer"
              src={
                currency.favorite
                  ? "/dashboard/exchange/favHeartFill.svg"
                  : "/dashboard/exchange/favHeartThin.svg"
              }
              onClick={() => handleFavoriteClick(currency.id)}
            />
            <img src={currency.icon} />
            <span className="sm:text-[0.8rem] text-[0.9rem] font-poppinsMedium">
              {currency.name}
            </span>
            <span
              className={`${
                currency.changePercentage.startsWith("+")
                  ? "text-priceGreen"
                  : "text-priceRed"
              } sm:text-[0.45rem] text-[0.7rem]`}
            >
              {currency.changePercentage}
            </span>
            <span className="sm:text-[0.45rem] text-[0.7rem]">
              {currency.price}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
