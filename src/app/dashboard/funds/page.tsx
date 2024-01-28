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
    <div className="w-[99%] h-[98%] max-h-[98%] bg-dashbgtrans overflow-x-scroll">
      <Wallet onAction={handleWalletAction} activebutton={currentfundsstep} />

      {/* three container goes here */}
      <div className="w-[100%] relative">
        {/* <Fundshome /> */}
        {/* <div className="w-[100%] top-0 absolute bg-absolutetrans min-h-[100vh]"> */}
        {currentfundsstep === "home" && <Fundshome />}
        {currentfundsstep === "deposite" && <Depositefunds />}
        {currentfundsstep === "withdrawl" && <Withrawlfunds />}
        {/* </div> */}
      </div>
    </div>
  );
};

export default FundsPage;
