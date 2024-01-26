"use client";
import React, { useState, ChangeEvent } from "react";
import DepositeCard from "../DepositeCard/DepositeCard";
import CopyCard from "../../../Common/CopyCard/CopyCard";

export default function DepositeCardone() {
  const [IMPSrrnNumber, setIMPSrrnNumber] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIMPSrrnNumber(e.target.value);
  };

  const handleSubmit = () => {
    // Add your logic to handle the submission with rrnNumber
    console.log({ IMPSrrnNumber });
  };
  return (
    <>
      <DepositeCard eventKey="0" heading="IMPS">
        <div className="flex w-[100%] flex-wrap gap-[20px] justify-between">
          <CopyCard heading="Beneficiary name" subheading="JJ Trading Cmpany" />
          <CopyCard heading="IFSC Code" subheading="SBIN000466" />
          <CopyCard heading="Bank Name" subheading="State Bank of India" />
          <div
            className="w-[45%]
            "
          >
            <h1>Account Type</h1>
            <select
              className="bg-[#002B50] py-[3px] mt-[5px] px-[5px] w-[100%] focus:border-none focus:outline-none "
              name=""
              id=""
            >
              <option value="">Saving </option>
              <option value="">Current</option>
            </select>
          </div>
          <CopyCard heading="Account Number" subheading="ZANM1754665623" />
        </div>
        {/* ........... */}
        <div className="w-[100%] mt-[20px]">
          <input
            className="w-[100%] bg-[#233D55] pl-[20px] py-[20px] focus:outline-none focus:border-none"
            type="text"
            placeholder="Enter RRN / UTN Number"
            value={IMPSrrnNumber}
            onChange={handleInputChange}
          />
        </div>
        {/* .......... */}
        <div className="mt-[30px]">
          <div
            onClick={handleSubmit}
            style={{
              backgroundImage: "url(/dashboard/funds/longsubbutton.svg)",
            }}
            className="w-[100%] m-auto text-center bg-center bg-no-repeat bg-contain py-[5px] text-[2rem] "
          >
            Submit
          </div>
        </div>
      </DepositeCard>
    </>
  );
}
