"use client";
import React, { useState } from "react";
import Inputfield from "../common/Inputfield/Inputfield";

export default function Stepsix() {
  const [bankaccount, setbankaccount] = useState("");
  const [confirmbankaccount, setconfirmbankaccount] = useState("");
  const [ifsc, setifsc] = useState("");

  const handleifscfind = () => {
    // add logic to find ifsc code here
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Log all form data to the console

    console.log({
      bankaccount,
      confirmbankaccount,
      ifsc,
    });
  };

  return (
    <form
      action=""
      className="w-[100%] h-[100%]  flex flex-col justify-center items-center text-white"
    >
      {/* ............. heading ............. */}

      <div>
        <h1 className="text-[1.6rem] font-poppinsSemibold">
          Bank Account Verification
        </h1>

        <p className="text-[.8rem] text-center">
          Verify for Smooth Transactions.
        </p>
      </div>
      {/* ............. heading end ............. */}
      {/* ... */}

      <div className="w-[80%] mt-[50px]  gap-[10px]">
        <Inputfield
          type="number"
          value={bankaccount}
          onChange={(e) => setbankaccount(e.target.value)}
          placeholder="Bank Account Number"
        />
      </div>

      <div className="w-[80%] mt-[20px]">
        <Inputfield
          type="number"
          value={confirmbankaccount}
          onChange={(e) => setconfirmbankaccount(e.target.value)}
          placeholder="Confirm Bank Account Number"
        />
      </div>

      <div className="relative w-[80%] mt-[20px] flex">
        <div
          onClick={handleifscfind}
          className="absolute h-[100%] top-0 right-0 z-[1] 
        text-white flex justify-center items-center bg-black
         pl-[10px] pr-[10px] border-t border-b border-r border-[2px]
         rounded-b-[10px] rounded-t-[10px]"
        >
          Find IFSC
        </div>
        <Inputfield
          type="text"
          value={ifsc}
          onChange={(e) => setifsc(e.target.value)}
          placeholder="Enter IFSC Code"
        />
      </div>
      <div
        style={{
          backgroundImage: "url(/signup/button.svg)",
        }}
        onClick={handleSubmit}
        className="w-[80%] text-[1.6rem] py-[5px] font-poppinsSemibold flex justify-center bg-center bg-contain bg-no-repeat mt-[30px]"
      >
        Next
      </div>
    </form>
  );
}
