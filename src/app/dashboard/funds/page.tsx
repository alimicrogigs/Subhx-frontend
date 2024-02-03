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

  const handledepositeinsdiecoin = () => {};
  return (
    <>
      {/* below condition is for if popup active scroll disable  */}
      <div
        style={{
          overflowY: `${
            currentpopupactive === "deposite" ||
            currentpopupactive === "withdraw"
              ? "hidden"
              : "scroll"
          }`,
        }}
        className="relative w-[99%] h-[98%] max-h-[98%] bg-[#041E27]  sm:rounded-[10px] rounded-[0px]"
      >
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

            {/* this is back button  ........*/}
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
      {/* ...... fix footer start from here ........... */}
      <div className="sticky bottom-0 w-[100%] py-[20px] bg-[#07303F] sm:hidden block flex justify-evenly ">
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setCurrentpopupactive("withdraw")}
          className="relative sm:min-w-[200px] min-w-[0px] text-[1rem] text-center py-[5px] sm:px-[15px] px-[20px] rounded-[5px] bg-[#E65661] sm:block "
        >
          <div className="cut absolute top-0 right-0 w-[20px] h-[20px] sm:bg-[#041E27] bg-[#07303F] transform rotate-45 translate-x-[50%] translate-y-[-50%] "></div>
          WITHDRAW INR
        </div>

        <div
          style={{ cursor: "pointer" }}
          onClick={() => setCurrentpopupactive("deposite")}
          className="relative sm:min-w-[200px] min-w-[0px] text-[1rem] text-center py-[5px] sm:px-[15px] px-[30px] rounded-[5px] bg-[#5AD776] sm:block"
        >
          <div className="cut absolute top-0 right-0 w-[20px] h-[20px] sm:bg-[#041E27] bg-[#07303F] transform rotate-45 translate-x-[50%] translate-y-[-50%] "></div>
          DEPOSIT INR
        </div>
      </div>
      {/* ...... fix footer start from here ........... */}
    </>
  );
};

export default FundsPage;
