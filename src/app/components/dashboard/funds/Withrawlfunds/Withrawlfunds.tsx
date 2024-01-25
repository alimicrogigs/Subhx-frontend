"use client";
import React, { useState } from "react";

export default function Withrawlfunds() {
  const [withdrawlamount, setWithdrawlamount] = useState(0);
  const handlewithdrawal = () => {
    console.log({ withdrawlamount });
  };
  return (
    <>
      <section className="w-[100%]">
        <div className="w-[45%] min-w-[600px] m-auto bg-[#041E27]  px-[30px] text-white pb-[80px]">
          <h1 className="pt-[20px] text-white font-poppinsSemibold text-[1.6rem]">
            Withdraw INR to Bank
          </h1>
          {/* ..... inr wallet balance ... */}

          {/* forst card start from here  */}
          <div className="bg-[#07303F] mt-[30px] font-poppinsSemibold pt-[30px] px-[30px] text-[1.5rem] pb-[30px] rounded-[10px]">
            <h1>
              {" "}
              <span className="mr-[20px] ">₹</span>INR Wallet Balance
            </h1>

            <ul className="w-[100%] text-[1rem] mt-[30px] font-poppinsRegular flex justify-between pr-[25%]">
              {/* .... */}
              <div>
                <li className="flex ">
                  <p>Available</p>
                </li>
                {/* ........ */}
                <li className="flex  ">
                  <p>Locked</p>
                </li>
                {/* ......... */}
                <li className="flex ">
                  <p>Total</p>
                </li>
              </div>
              {/* .......... */}

              <div>
                <li className="flex ">
                  <p>₹ 5,520.00</p>
                </li>
                {/* ........ */}
                <li className="flex  ">
                  <p>₹ 244.00</p>
                </li>
                {/* ......... */}
                <li className="flex ">
                  <p>₹ 5,764.00</p>
                </li>
              </div>

              {/* ....... */}
            </ul>
          </div>
          {/* end at here first card  */}

          {/* forst card start from here  */}
          <div className="bg-[#07303F] mt-[30px] font-poppinsSemibold pt-[30px] px-[30px] text-[1.5rem] pb-[30px] rounded-[10px]">
            <h1>
              {" "}
              <span className="mr-[20px] ">₹</span>Your bank accounts details :
            </h1>

            <ul className="w-[100%] text-[1rem] mt-[30px] font-poppinsRegular flex justify-between pr-[15%]">
              {/* .... */}
              <div>
                <li className="flex ">
                  <p>Beneficiary Name</p>
                </li>
                {/* ........ */}
                <li className="flex  ">
                  <p>Account Number</p>
                </li>
                {/* ......... */}
                <li className="flex ">
                  <p>IFSC</p>
                </li>
              </div>
              {/* .......... */}

              <div>
                <li className="flex ">
                  <p>Jason Jones</p>
                </li>
                {/* ........ */}
                <li className="flex  ">
                  <p>12545698555465</p>
                </li>
                {/* ......... */}
                <li className="flex ">
                  <p>SBIN002365</p>
                </li>
              </div>

              {/* ....... */}
            </ul>
          </div>
          {/* end at here first card  */}
          {/* ............. */}
          <h1 className="mt-[20px] text-[1.5rem] pl-[30px]">Withdraw Amount</h1>
          <input
            className="focus:border-none focus:outline-none ml-[30px] py-[10px] pl-[20px] w-[90%] bg-[#0C4E66] rounded-[5px] mt-[20px]"
            type="number"
            name="Amount"
            id="Amount"
            placeholder="₹ 2,000.00"
            value={withdrawlamount}
            onChange={(e) => setWithdrawlamount(Number(e.target.value))}
          />
          {/* ........... */}
          <div
            onClick={handlewithdrawal}
            style={{
              backgroundImage: "url(/dashboard/funds/redbutton.svg)",
            }}
            className="bg-center bg-contain bg-no-repeat text-center  ml-[30px] mr-[30px] mt-[50px] py-[20px]"
          >
            Withdraw
          </div>
        </div>
      </section>
    </>
  );
}
