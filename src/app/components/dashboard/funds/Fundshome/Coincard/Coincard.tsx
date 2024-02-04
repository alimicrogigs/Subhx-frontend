"use client";
import React, { useState } from "react";
import { SiBitcoinsv } from "react-icons/si";
import { FaExclamationCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { GoTriangleDown } from "react-icons/go";

interface coincardsprops {
  coinname: string;
  coinQuantity: number;
  profitlosspercentage: string;
  currentportfolio: string;
  liveprice: string;
  isbutton: boolean;
  profit: boolean;
  backgroundcolor?: string;
  onAction: (depositeBTCdetail: {
    amount: string | null;
    remark: string;
  }) => void;
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
  onAction,
}) => {
  const [iswithdrawopen, setiswithdrawopen] = useState(false);
  const [isdepositewopen, setisdepositewopen] = useState(false);
  const [isexpand, setisexpand] = useState(false);
  const [depositeBTCdetail, setdepositeBTCdetail] = useState({
    amount: null as string | null,
    remark: "",
  });

  return (
    <>
      <div
        style={{
          background: `${backgroundcolor ? backgroundcolor : "transparent"}`,
        }}
        className="relative w-[100%] flex justify-between py-[15px] text-white sm:text-[1rem] text-[.6rem] sm:px-[20px] px-[5px] py-[10px]"
      >
        <div
          style={{
            transition: "all .1s ease-in-out ",
            transform: `${isexpand ? "rotate(-180deg)" : "rotate(0deg)"}`,
          }}
          onClick={() => {
            setisexpand(!isexpand);
            setisdepositewopen(false);
            setiswithdrawopen(false);
          }}
          className="sm:hidden block absolute top-[30%] text-[1rem] right-[30px]"
        >
          <GoTriangleDown />
        </div>
        {/* .... first row .... */}
        <div className="flex-1 items-center flex">
          {" "}
          <SiBitcoinsv className="mr-[5px] text-[1.5rem]" />
          {coinname}
        </div>

        {/* .... second row .... */}
        <div className="flex-1 items-center flex">
          {coinQuantity} {coinname}
        </div>

        {/* .... third row .... */}
        <div
          style={{
            color: `${profit ? "#5AD776" : "#E65661"}`,
          }}
          className="flex-1 items-center flex text-center"
        >
          {profitlosspercentage}
        </div>
        {/* .... forth row .... */}
        <div className="flex-1 justify-center sm:flex  flex-col hidden">
          ₹ {currentportfolio}
          <br />
          <span className="text-[.7rem] opacity-50"> Live : ₹{liveprice} </span>
        </div>

        {/* ........ */}
        <div className="flex-1  sm:gap-[20px] gap-[5px] justify-evenly  sm:flex hidden">
          {isbutton && (
            <>
              <motion.div
                whileTap={{ x: 2, y: 2 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                onClick={() => {
                  setiswithdrawopen(!iswithdrawopen);
                  setisdepositewopen(false);
                }}
                style={{
                  backgroundImage: "url(/dashboard/funds/portfolio/button.svg)",
                  cursor: "pointer",
                }}
                className="flex justify-center items-center px-[40px] bg-contain bg-center bg-no-repeat"
              >
                Withdraw
              </motion.div>
              <motion.div
                whileTap={{ x: 2, y: 2 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                onClick={() => {
                  setisdepositewopen(!isdepositewopen);
                  setiswithdrawopen(false);
                }}
                style={{
                  backgroundImage:
                    "url(/dashboard/funds/portfolio/greenbutton.svg)",

                  cursor: "pointer",
                }}
                className="flex justify-center items-center px-[40px] bg-contain bg-center bg-no-repeat"
              >
                Deposit
              </motion.div>
            </>
          )}
        </div>
      </div>

      {/* this is for mobile view  */}
      <AnimatePresence>
        {isexpand && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100, transition: { duration: 0 } }}
            className="w-[100%] text-white sm:hidden flex px-[20px] py-[10px]"
          >
            {/* ................ */}
            <div className="flex-1 text-[.7rem] justify-center sm:flex  flex-col ">
              ₹ {currentportfolio}
              <br />
              <span className="text-[.7rem] opacity-50">
                {" "}
                Live : ₹{liveprice}{" "}
              </span>
            </div>
            {/* ...................... */}
            <div className="flex flex-1 text-[.8rem] gap-[15px]">
              <motion.div
                whileTap={{ x: 2, y: 2 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                onClick={() => {
                  setiswithdrawopen(!iswithdrawopen);
                  setisdepositewopen(false);
                }}
                style={{
                  backgroundImage: "url(/dashboard/funds/portfolio/button.svg)",
                  cursor: "pointer",
                }}
                className="flex justify-center items-center px-[15px] bg-contain bg-center bg-no-repeat"
              >
                Withdraw
              </motion.div>
              <motion.div
                whileTap={{ x: 2, y: 2 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                onClick={() => {
                  setisdepositewopen(!isdepositewopen);
                  setiswithdrawopen(false);
                }}
                style={{
                  backgroundImage:
                    "url(/dashboard/funds/portfolio/greenbutton.svg)",

                  cursor: "pointer",
                }}
                className="flex justify-center items-center px-[20px] bg-contain bg-center bg-no-repeat"
              >
                Deposit
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* form below the deposite form start .... */}
      {/* .......................................................................... */}
      <AnimatePresence>
        {iswithdrawopen && (
          <motion.div
            className="w-[100%] bg-[#041E27] text-white border-t border-t-[#07303F] border-t-[2px]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100, transition: { duration: 0 } }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className="sm:w-[55%] w-[90%] mx-auto pt-[70px] pb-[10px]">
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
                    value={depositeBTCdetail.amount || ""}
                    onChange={(e) =>
                      setdepositeBTCdetail((prev) => ({
                        ...prev,
                        amount: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
              {/* remark field .... */}
              <div className="mt-[30px]">
                <p className="pb-[5px]">Remarks</p>
                <input
                  value={depositeBTCdetail.remark || ""}
                  onChange={(e) =>
                    setdepositeBTCdetail((prev) => ({
                      ...prev,
                      remark: e.target.value,
                    }))
                  }
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
                <div
                  onClick={() => {
                    onAction(depositeBTCdetail);
                  }}
                  className="bg-[#E65661] inline mx-auto sm:px-[100px] px-[50px] py-[5px] sm:text-[2rem] text-[1.2rem] font-poppinsSemibold rounded rounded-[5px]"
                >
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
      {isdepositewopen && (
        <AnimatePresence>
          <motion.div
            className="w-[100%] bg-[#041E27] text-white border-t border-t-[#07303F] border-t-[2px]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100, transition: { duration: 0 } }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className="sm:w-[50%] w-[90%] mx-auto pt-[50px] pb-[10px]">
              <p className="border-b border-b-[#07303F] border-b-[2px] pb-[10px]">
                Kindly make sure to choose the TRON (TRC20) network at the
                sender's wallet.
              </p>
              {/* ........... */}

              <div className="mt-[50px]">
                <p className="pb-[5px]">TRC20</p>
                <div className="relative flex justify-betweeb bg-[#0C4E66] px-[30px] py-[15px] rounded-[5px]">
                  <div>fmbHfnpaZjKFvyi1okTjJJusN455paPH</div>
                  {/* .......Copy button ...... */}
                  <div
                    style={{
                      backgroundImage:
                        "url(/dashboard/funds/portfolio/copygreen.svg)",
                    }}
                    className="bg-center bg-no-repeat bg-contain absolute h-[100%] text-[#5AD776] w-[20px] right-[60px] top-0 flex justify-center items-center"
                  ></div>
                  {/* ............. */}
                  {/* scan butoon .... */}
                  <div
                    style={{
                      backgroundImage:
                        "url(/dashboard/funds/portfolio/scan.svg)",
                    }}
                    className=" bg-center bg-no-repeat bg-contain absolute h-[100%] text-[#5AD776] w-[20px] right-[20px] top-0 flex justify-center items-center"
                  ></div>
                  {/* ..................... */}
                  <div></div>
                </div>
              </div>
              {/* .................... */}

              {/* .. disclamer  */}
              <div className="text-[#E65661] flex items-center gap-[10px] pb-[10px] border-b border-b-[#07303F] border-b-[2px] mt-[50px]">
                <FaExclamationCircle /> <p>Disclaimer</p>
              </div>
              <p
                style={{ color: "rgba(247, 247, 247, 0.75)" }}
                className="mt-[30px] text-[.75rem] pb-[30px]"
              >
                Please confirm the selection of the Tron (TRC20) network at the
                sender's wallet. <br /> Exclusively use the Tron (TRC20) network
                for sending. Any other network usage may lead to fund loss.{" "}
                <br /> Deposit only USDT to this deposit address. Depositing any
                other asset will result in a loss of funds.
              </p>
              {/* ........................... */}
            </div>
          </motion.div>
        </AnimatePresence>
      )}
      {/* form below the deposite form start .... */}
    </>
  );
};
export default Coincard;
