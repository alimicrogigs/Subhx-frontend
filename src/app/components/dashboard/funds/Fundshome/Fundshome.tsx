import React from "react";
import Coincard from "./Coincard/Coincard";
import styles from "./page.module.css";

export default function Fundshome() {
  const handledepositeBTC = (depositeBTCdetail: {
    amount: string | null;
    remark: string;
  }) => {
    // add logic hre
    console.log("Depositing BTC");
    console.log(depositeBTCdetail);
  };

  return (
    <div
      style={{}}
      className={`${styles.oddevencolor} sm:min-w-[900px] min-w-[100vw] w-[100%] `}
    >
      <div className="w-[100%]  flex justify-between bg-[#07303f] py-[5px] text-white sm:text-[.8rem] text-[.6rem] sm:px-[20px] px-[10px]">
        <div className="flex-1">ASSETS</div>
        <div className="flex-1">TOTAL BALANCE</div>
        <div className="flex-1 text-left ">TODAY'S GAIN</div>
        <div className="sm:flex-1 sm:block hidden">CURRENT PORTFOLIO</div>
        <div className="sm:flex-1 sm:block hidden"></div>
      </div>

      <Coincard
        coinname="BTC"
        coinQuantity={4}
        profitlosspercentage="+.007%"
        currentportfolio=" 1,32,00,000.00"
        liveprice="30,00,000.00"
        isbutton={true}
        profit={true}
        onAction={handledepositeBTC}
        // backgroundcolor="#07303f"
      />
      <Coincard
        coinname="BTC"
        coinQuantity={4}
        profitlosspercentage="+.007%"
        currentportfolio=" 1,32,00,000.00"
        liveprice="30,00,000.00"
        isbutton={true}
        profit={false}
        backgroundcolor="#07303f"
        onAction={handledepositeBTC}
      />
      <Coincard
        coinname="BTC"
        coinQuantity={4}
        profitlosspercentage="+.007%"
        currentportfolio=" 1,32,00,000.00"
        liveprice="30,00,000.00"
        isbutton={true}
        profit={true}
        onAction={handledepositeBTC}
      />
      <Coincard
        coinname="BTC"
        coinQuantity={4}
        profitlosspercentage="+.007%"
        currentportfolio=" 1,32,00,000.00"
        liveprice="30,00,000.00"
        isbutton={true}
        profit={false}
        backgroundcolor="#07303f"
        onAction={handledepositeBTC}
      />
      <Coincard
        coinname="BTC"
        coinQuantity={4}
        profitlosspercentage="+.007%"
        currentportfolio=" 1,32,00,000.00"
        liveprice="30,00,000.00"
        isbutton={true}
        profit={false}
        onAction={handledepositeBTC}
      />
    </div>
  );
}
