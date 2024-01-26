import React from "react";
import Coincard from "./Coincard/Coincard";
import styles from "./page.module.css";

export default function Fundshome() {
  return (
    <div
      style={{}}
      className={`${styles.oddevencolor} min-w-[900px] w-[100%] `}
    >
      <div className="w-[100%]  flex justify-between bg-tableodd py-[5px] text-white text-[.8rem] px-[20px]">
        <div className="flex-1">Assets</div>
        <div className="flex-1">Total Balance</div>
        <div className="flex-1 text-left ">Today’s Gains</div>
        <div className="flex-1 ">Current Portfolio </div>
        <div className="flex-1 "></div>
      </div>

      <Coincard
        coinname="BTC"
        coinQuantity={4}
        profitlosspercentage="+.007%"
        currentportfolio=" 1,32,00,000.00"
        liveprice="30,00,000.00"
        isbutton={true}
        profit={true}
      />
      <Coincard
        coinname="BTC"
        coinQuantity={4}
        profitlosspercentage="+.007%"
        currentportfolio=" 1,32,00,000.00"
        liveprice="30,00,000.00"
        isbutton={true}
        profit={false}
      />
      <Coincard
        coinname="BTC"
        coinQuantity={4}
        profitlosspercentage="+.007%"
        currentportfolio=" 1,32,00,000.00"
        liveprice="30,00,000.00"
        isbutton={true}
        profit={true}
      />
      <Coincard
        coinname="BTC"
        coinQuantity={4}
        profitlosspercentage="+.007%"
        currentportfolio=" 1,32,00,000.00"
        liveprice="30,00,000.00"
        isbutton={true}
        profit={false}
      />
      <Coincard
        coinname="BTC"
        coinQuantity={4}
        profitlosspercentage="+.007%"
        currentportfolio=" 1,32,00,000.00"
        liveprice="30,00,000.00"
        isbutton={true}
        profit={false}
      />
    </div>
  );
}
