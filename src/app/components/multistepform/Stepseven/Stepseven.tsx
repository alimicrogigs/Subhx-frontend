"use client";
import React, { useState } from "react";
import Inputfield from "../common/Inputfield/Inputfield";

export default function Steptwo() {
  const [VPAaddress, setVPAaddress] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Log all form data to the console

    console.log({
      VPAaddress,
    });
  };

  return (
    <form
      action=""
      className="w-[100%] h-[100%]  flex flex-col justify-center items-center text-white"
    >
      {/* ............. heading ............. */}

      <div>
        <h1 className="text-[1.8rem] font-poppinsSemibold">
          Finish Your UPI Verification
        </h1>

        <p className="text-[.8rem] text-center">
          Verify for Smooth Transactions.
        </p>
      </div>
      {/* ............. heading end ............. */}
      {/* ... */}

      <div className="w-[80%] mt-[50px]  gap-[10px]">
        <Inputfield
          type="text"
          value={VPAaddress}
          onChange={(e) => setVPAaddress(e.target.value)}
          placeholder="Your VPA Address"
        />
      </div>

      <div
        style={{
          backgroundImage: "url(/signup/button.svg)",
        }}
        onClick={handleSubmit}
        className="w-[80%] text-[2rem] py-[5px] font-poppinsSemibold flex justify-center bg-center bg-contain bg-no-repeat mt-[50px]"
      >
        Submit
      </div>
    </form>
  );
}
