"use client";
import React, { useState } from "react";
import { SiBitcoinsv } from "react-icons/si";
import { FaExclamationCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface coincardsprops {
  coinname: string;
  coinQuantity: number;
  profitlosspercentage: string;
  currentportfolio: string;
  liveprice: string;
  isbutton: boolean;
  profit: boolean;
  backgroundcolor?: string;
}

const Coincard: React.FC<coincardsprops> = ({
  coinname,
  coinQuantity,
  profitlosspercentage,
  currentportfolio,
  liveprice,
  isbutton,
  profit,
  backgroundcolor,
}) => {
  const [iswithdrawopen, setiswithdrawopen] = useState(false);
  const [isdepositewopen, setisdepositewopen] = useState(false);

  return (
    <>
      <div
        style={{
          background: `${backgroundcolor ? backgroundcolor : "transparent"}`,
        }}
        className="w-[100%] flex justify-between py-[15px] text-white text-[1rem] px-[20px] py-[10px]"
      >
        <div className="flex-1 items-center flex">
          {" "}
          <SiBitcoinsv className="mr-[5px] text-[1.5rem]" />
          {coinname}
        </div>
        <div className="flex-1 items-center flex">
          {coinQuantity} {coinname}
        </div>
        <div
          style={{
            color: `${profit ? "#5AD776" : "#E65661"}`,
          }}
          className="flex-1 items-center flex text-center"
        >
          {profitlosspercentage}
        </div>
        {/* ........ */}
        <div className="flex-1 justify-center flex  flex-col ">
          ₹ {currentportfolio}
          <br />
          <span className="text-[.7rem] opacity-50"> Live : ₹{liveprice} </span>
        </div>
        {/* ........ */}
        <div className="flex-1 flex gap-[20px] justify-evenly ">
          {isbutton && (
            <>
              <motion.div
                whileTap={{ x: 2, y: 2 }}
                transition={{ type: "spring", stiffness: 500, damping: 5 }}
                onClick={() => {
                  setiswithdrawopen(!iswithdrawopen);
                  setisdepositewopen(false);
                }}
                style={{
                  backgroundImage: "url(/dashboard/funds/portfolio/button.svg)",
                  cursor: "pointer",
                }}
                className="flex justify-center items-center px-[20px] bg-contain bg-center bg-no-repeat"
              >
                Withdraw
              </motion.div>
              <motion.div
                whileTap={{ x: 2, y: 2 }}
                transition={{ type: "spring", stiffness: 500, damping: 5 }}
                onClick={() => {
                  setisdepositewopen(!isdepositewopen);
                  setiswithdrawopen(false);
                }}
                style={{
                  backgroundImage: "url(/dashboard/funds/portfolio/button.svg)",
                  cursor: "pointer",
                }}
                className="flex justify-center items-center px-[30px] bg-contain bg-center bg-no-repeat"
              >
                Deposit
              </motion.div>
            </>
          )}
        </div>
      </div>
      {/* form below the deposite form start .... */}
      {/* .......................................................................... */}
      <AnimatePresence>
        {iswithdrawopen && (
          <motion.div
            className="w-[100%] bg-[#041E27] text-white border-t border-t-[#07303F] border-t-[2px]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100, transition: { duration: 0 } }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-[55%] mx-auto pt-[70px] pb-[10px]">
              <h1 className=" border-b border-b-[#07303F] border-b-[2px] pb-[10px] text-[.9rem]">
                Move BTC from your BIT24HR Wallet to another.
              </h1>
              {/* address.... */}
              <div className="mt-[50px] ">
                <p className="pb-[5px]">BTC Address</p>
                <p className="py-[15px] bg-[#0C4E66] px-[30px] rounded-[5px] ">
                  fmbHfnpaZjKFvyi1okTjJJusN455paPH
                </p>
              </div>

              {/* amount ..... */}
              <div>
                <div className="flex justify-between mt-[30px]">
                  <p className="pb-[5px]">BTC Amount</p>
                  <p>Available BTC : 0.00000265</p>
                </div>
                <div>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="py-[15px] bg-[#0C4E66] px-[30px] rounded-[5px] w-[100%]"
                    placeholder="0.00000254"
                  />
                </div>
              </div>
              {/* remark field .... */}
              <div className="mt-[30px]">
                <p className="pb-[5px]">Remarks</p>
                <input
                  type="text"
                  className="py-[20px] bg-[#0C4E66] px-[30px] rounded-[5px] w-[100%]"
                />
              </div>
              {/* ... agree .... */}
              <div className="flex mt-[30px]">
                <div className="mr-[20px]">
                  <input type="checkbox" name="" id="" className="inline" />{" "}
                </div>
                <p style={{ color: "rgba(247, 247, 247, 0.75)" }}>
                  I verify that this cryptocurrency asset withdrawal is going to
                  my designated wallet as indicated above. I grant permission to
                  share travel rule information with the destination wallet
                  service provider where applicable.
                </p>
              </div>
              {/* submit button ... */}
              <div className="w-[100%] flex justify-center mt-[30px]">
                <div className="bg-[#E65661] inline mx-auto px-[100px] py-[5px] text-[2rem] font-poppinsSemibold rounded rounded-[5px]">
                  Proceed with Withdrawal
                </div>
              </div>

              {/* .. disclamer  */}
              <div className="text-[#E65661] flex items-center gap-[10px] pb-[10px] border-b border-b-[#07303F] border-b-[2px] mt-[20px]">
                <FaExclamationCircle /> <p>Disclaimer</p>
              </div>
              <p
                style={{ color: "rgba(247, 247, 247, 0.75)" }}
                className="text-[.75rem] pt-[20px] pb-[30px]"
              >
                Please double-check the destination address. Withdrawals to
                Smart Contract Addresses, payments, or participation in
                ICOs/Airdrops are not supported and will be irretrievable.
                Withdrawal requests cannot be revoked once submitted.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* the deposite form end here  .... */}
      {/* .......................................................................... */}

      {/* form below the deposite form start .... */}
    </>
  );
};
export default Coincard;
