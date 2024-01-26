"use client";
import React, { useState } from "react";
import Wallet from "@/app/components/dashboard/funds/Wallet/Wallet";
import Depositefunds from "@/app/components/dashboard/funds/Depositefunds/Depositefunds";
import Fundshome from "@/app/components/dashboard/funds/Fundshome/Fundshome";
import Withrawlfunds from "@/app/components/dashboard/funds/Withrawlfunds/Withrawlfunds";
import Transferhistory from "@/app/components/dashboard/funds/Transferhistory/Transferhistory";

interface FundsPageProps {}

const FundsPage: React.FC<FundsPageProps> = () => {
  const [currentfundsstep, setCurrentfundsstep] = useState<string>("Portfolio");

  const [currentpopupactive, setCurrentpopupactive] = useState("");

  const handleWalletAction = (action: string): void => {
    // Update the currentfundsstep based on the action
    setCurrentfundsstep(action);
  };

  const handlepopupactive = (action: string): void => {
    setCurrentpopupactive(action);
  };

  return (
    <div className="relative w-[99%] h-[98%] max-h-[98%] bg-[#041E27] overflow-x-scroll rounded-[10px]">
      {/* first popup  */}
      {currentpopupactive === "deposite" && (
        <div
          style={{ backgroundColor: "rgba(4, 30, 39, .9)" }}
          className="absolute w-[100%] h-[100%]  top-0 right-0 z-[1000] overflow-x-scroll"
        >
          {/* this is back button */}
          <div
            style={{
              backgroundImage: "url(/signup/backarrow.svg)",
            }}
            className="fixed top-[100px] sm:left-[100px] left-[20px] w-[50px] h-[50px] bg-center bg-no-repeat bg-contain"
            onClick={() => setCurrentpopupactive("")}
          ></div>
          {/* this is back button */}

          <Depositefunds />
        </div>
      )}
      {/* second popup  */}
      {currentpopupactive === "withdraw" && (
        <div
          style={{ backgroundColor: "rgba(4, 30, 39, .9)" }}
          className="absolute w-[100%] h-[100%]  top-0 right-0 z-[1000] overflow-x-scroll"
        >
          {/* this is back button */}
          <div
            style={{
              backgroundImage: "url(/signup/backarrow.svg)",
            }}
            className="fixed top-[100px] sm:left-[100px] left-[20px] w-[50px] h-[50px] bg-center bg-no-repeat bg-contain"
            onClick={() => setCurrentpopupactive("")}
          ></div>
          {/* this is back button */}
          <Withrawlfunds />
        </div>
      )}
      {/* wallet start form here  */}
      <Wallet
        onAction={handleWalletAction}
        popupactive={handlepopupactive}
        activebutton={currentfundsstep}
      />

      <div className="w-[100%] relative overflow-scroll">
        {currentfundsstep === "Portfolio" && <Fundshome />}
        {currentfundsstep === "transferhistory" && <Transferhistory />}
      </div>
    </div>
  );
};

export default FundsPage;
