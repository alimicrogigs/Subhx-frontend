import React from "react";
import { SiBitcoinsv } from "react-icons/si";

interface coincardsprops {
  coinname: string;
  coinQuantity: number;
  profitlosspercentage: string;
  currentportfolio: string;
  liveprice: string;
  isbutton: boolean;
  profit: boolean;
}

const Coincard: React.FC<coincardsprops> = ({
  coinname,
  coinQuantity,
  profitlosspercentage,
  currentportfolio,
  liveprice,
  isbutton,
  profit,
}) => {
  return (
    <>
      <div className="w-[100%] flex justify-between py-[15px] text-white text-[1rem] px-[20px] py-[10px]">
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
              <div
                style={{
                  backgroundImage: "url(/dashboard/funds/portfolio/button.svg)",
                }}
                className="flex justify-center items-center px-[20px] bg-contain bg-center bg-no-repeat"
              >
                Withdraw
              </div>
              <div
                style={{
                  backgroundImage: "url(/dashboard/funds/portfolio/button.svg)",
                }}
                className="flex justify-center items-center px-[30px] bg-contain bg-center bg-no-repeat"
              >
                Deposit
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Coincard;
