"use client";
import React, { useState } from "react";
interface WalletProps {
  onAction: (action: string) => void;
  activebutton: string;
}

const Wallet: React.FC<WalletProps> = ({ onAction, activebutton }) => {
  let user_balance = `₹ 5,689.00`;
  const handleWithdraw = () => {
    // Trigger withdraw action
    onAction("withdrawl");
  };

  const handleDeposit = () => {
    // Trigger deposit action
    onAction("deposite");
  };
  const handleHome = () => {
    onAction("home");
  };

  return (
    <div className="flex justify-between  py-[10px] ml-[5px] mr-[5px] border-b border-b-[2px] border-b-[#00BFFF] text-white ">
      {/* wallets balance  */}
      <div
        onClick={handleHome}
        className="flex gap-[20px]  items-center px-[20px]"
      >
        <p>Wallet Balance</p>
        <p>{user_balance}</p>
      </div>
      {/* withdrawl and deposite button  */}
      <div className="flex gap-[20px]  items-center px-[20px] ">
        <div
          onClick={handleWithdraw}
          style={{
            backgroundImage: `url(/dashboard/funds/${
              activebutton == "withdrawl" ? "buttonbg" : "buttonborder"
            }.svg)`,
          }}
          className="bg-center bg-no-repeat bg-contain px-[30px] py-[10px]"
        >
          Withdraw
        </div>
        <div
          onClick={handleDeposit}
          style={{
            backgroundImage: `url(/dashboard/funds/${
              activebutton == "deposite" ? "buttonbg" : "buttonborder"
            }.svg)`,
          }}
          className="bg-center bg-no-repeat bg-contain px-[40px] py-[10px]"
        >
          Deposit
        </div>
      </div>
    </div>
  );
};

export default Wallet;
