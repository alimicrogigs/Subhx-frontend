"use client";
import React, { useState } from "react";
import Wallet from "@/app/components/dashboard/funds/Wallet/Wallet";
import Depositefunds from "@/app/components/dashboard/funds/Depositefunds/Depositefunds";
import Fundshome from "@/app/components/dashboard/funds/Fundshome/Fundshome";
import Withrawlfunds from "@/app/components/dashboard/funds/Withrawlfunds/Withrawlfunds";

interface FundsPageProps {}

const FundsPage: React.FC<FundsPageProps> = () => {
  const [currentfundsstep, setCurrentfundsstep] = useState<string>("home");

  const handleWalletAction = (action: string): void => {
    // Update the currentfundsstep based on the action
    setCurrentfundsstep(action);
  };

  return (
    <div className="w-[99%] h-[98%] max-h-[98%] bg-dashbgtrans overflow-x-scroll">
      <Wallet onAction={handleWalletAction} activebutton={currentfundsstep} />

      {/* three container goes here */}
      <div className="w-[100%]">
        {currentfundsstep === "home" && <Fundshome />}
        {currentfundsstep === "deposite" && <Depositefunds />}
        {currentfundsstep === "withdrawl" && <Withrawlfunds />}
      </div>
    </div>
  );
};

export default FundsPage;
