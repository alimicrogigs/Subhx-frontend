"use client";
import { useState } from "react";

// =============================
import { useDispatch, useSelector } from "react-redux";
import {
  depositeFundRequest,
  depositeFundSuccess,
  depositeFundFailure,
} from "../../actions/depositeFundActions";
import { orderTypeSet } from "@/app/actions/coinsActions";
import { getRequestAPIHelper } from "../../helperfunctions";
// =====================

export default function OrderSection() {
  const [selectedTab, setSelectedTab] = useState("buy"); // Default to 'buy'
  const [selectLimit, setSelectLimit] = useState("instant");
  const [enteredAmountUSDT, setEnteredAmountUSDT] = useState("0.00");
  const [enteredAmountINR, setEnteredAmountINR] = useState("0.00");

  console.log("enteredAmount===", enteredAmountUSDT);

  // ===========use selector to get api data from store=======
  const { loading, error, upiAddress } = useSelector((state) => state.deposite);

  const { selectedCoin, currentRates, orderType } = useSelector(
    (state: any) => state.coin
  );
  console.log("upiAddress=====", upiAddress);
  console.log("selectedCoinfrom_ordersection", selectedCoin);
  console.log("ordertype=====", orderType);

  // ========================
  const dispatch = useDispatch();

  const handleOrderSwitch = (tab: any) => {
    console.log("==tab===", tab);
    setSelectedTab(tab);
    dispatch(orderTypeSet(tab));
  };

  const handleLimitSwitch = (tab: any) => {
    setSelectLimit(tab);
  };

  const handleAmountChangeUSDT = (event) => {
    setEnteredAmountUSDT(event.target.value);
    const enteredAmountNumeric = parseFloat(event.target.value);

    if (orderType === "buy") {
      const totalAmount = isNaN(enteredAmountNumeric)
        ? "0.00"
        : (
            enteredAmountNumeric *
            (currentRates[selectedCoin.lowerCaseName]?.buy || 0)
          ).toFixed(2);
      setEnteredAmountINR(totalAmount);
    } else if (orderType === "sell") {
      const totalAmount = isNaN(enteredAmountNumeric)
        ? "0.00"
        : (
            enteredAmountNumeric *
            (currentRates[selectedCoin.lowerCaseName]?.sell || 0)
          ).toFixed(2);
      setEnteredAmountINR(totalAmount);
    }
  };

  const handleAmountChangeINR = (event) => {
    setEnteredAmountINR(event.target.value);
    const enteredAmountNumeric = parseFloat(event.target.value);
    if (orderType === "buy") {
      const totalAmount = isNaN(enteredAmountNumeric)
        ? "0.00"
        : (
            enteredAmountNumeric /
            (currentRates[selectedCoin.lowerCaseName]?.buy || 0)
          ).toFixed(2);
      setEnteredAmountUSDT(totalAmount);
    } else if (orderType === "sell") {
      const totalAmount = isNaN(enteredAmountNumeric)
        ? "0.00"
        : (
            enteredAmountNumeric /
            (currentRates[selectedCoin.lowerCaseName]?.sell || 0)
          ).toFixed(2);
      setEnteredAmountUSDT(totalAmount);
    }
  };

  // ====================

  //===========function that calls on click ==================

  const handleDeposit = async () => {
    try {
      const token =
        "163|$2y$10$TNMR1LoblGCWHFrm.nJbE.NJPBNLlcWXih5qcZBKn30m8VMv.0G8y5c765261";
      dispatch(depositeFundRequest());
      const response = await getRequestAPIHelper(
        "http://authentication.bit24hr.in/api/v1/upi-address",
        token
      );
      console.log("response=====", response);
      if (response.success === true) {
        dispatch(depositeFundSuccess(response.data));
      }
    } catch (error) {
      dispatch(depositeFundFailure(error));
    }
  };
  // ====================
  return (
    <section className="bg-dashbgtrans  rounded-lg flex sm:flex-col sm:w-[26.2vw] sm:h-[100%]">
      <div className="flex sm:h-[15%] bg-dashbgtrans sm:flex-row sm:justify-center sm:items-center">
        <div
          onClick={() => handleOrderSwitch("buy")}
          className={`cursor-pointer ${
            selectedTab === "buy" ? "border-b-[6px]" : "border-b-2"
          } border-borderline sm:px-8 sm:py-2`}
        >
          <span className="font-poppinsSemibold text-[0.9rem]">Buy USDT</span>
        </div>
        <div
          onClick={() => handleOrderSwitch("sell")}
          className={`cursor-pointer ${
            selectedTab === "sell" ? "border-b-[6px]" : "border-b-2"
          } border-borderline sm:px-8 sm:py-2`}
        >
          <span className="font-poppinsSemibold text-[0.9rem]">Sell USDT</span>
        </div>
      </div>
      <div className="sm:h-[10%] flex sm:flex-row sm:justify-center sm:items-center ">
        <span
          onClick={() => handleLimitSwitch("instant")}
          className={`sm:px-4 border border-borderline sm:py-1 ${
            selectedCoin?.lowerCaseName !== "usdt"
              ? "sm:rounded-l"
              : "sm:rounded"
          } sm:rounded-l sm:text-[0.6rem] ${
            selectLimit === "instant" ? "bg-switchColor" : ""
          }`}
        >
          Instant Trade
        </span>

        {selectedCoin?.lowerCaseName !== "usdt" && (
          <span
            onClick={() => handleLimitSwitch("limit")}
            className={`border  border-borderline sm:rounded-r sm:px-4 sm:py-1 sm:text-[0.6rem] ${
              selectLimit === "limit" ? "bg-switchColor" : ""
            }`}
          >
            Limit Trade
          </span>
        )}
      </div>
      <div className="flex sm:flex-col ">
        <span className="sm:ml-5 sm:text-[0.5rem] sm:py-1">Amount</span>
        <div className="flex sm:flex-row sm:justify-evenly sm:items-center">
          <div className="flex sm:flex-row  sm:w-[60%]">
            <input
              value={enteredAmountUSDT}
              onChange={handleAmountChangeUSDT}
              className="  focus:outline-none sm:px-2 sm:w-[90%] rounded-l sm:bg-inputBg text-black sm:h-[2rem] "
            />
            <div className="sm:h-[2rem]   sm:w-[2.5rem] flex sm:items-center sm:text-center sm:justify-center font-poppinsRegular sm:bg-inputBg sm:text-[0.6rem] text-dashbgtrans rounded-r">
              USDT
            </div>
          </div>

          <div className="sm:w-17% sm:px-2 sm:bg-inputBg text-[1.6rem] text-dashbgtrans sm:text-center flex sm:items-center rounded sm:h-[2rem] ">
            +
          </div>
          <div className="sm:w-17% sm:px-2 sm:bg-inputBg text-[1.8rem] text-dashbgtrans sm:text-center flex sm:items-center rounded sm:h-[2rem] ">
            -
          </div>
        </div>
      </div>

      {selectLimit === "limit" && (
        <div className="flex sm:flex-col sm:mt-2  ">
          <span className="sm:ml-5 sm:text-[0.5rem] sm:py-1">Price</span>
          <div className="flex sm:flex-row sm:justify-evenly sm:items-center">
            <div className="flex sm:flex-row  sm:w-[60%]">
              <input className="  focus:outline-none sm:px-2 sm:w-[90%] rounded-l sm:bg-inputBg text-black sm:h-[2rem] " />
              <div className="sm:h-[2rem] sm:w-[2.3rem] flex sm:items-center font-poppinsRegular sm:bg-inputBg sm:text-[0.6rem] text-dashbgtrans rounded-r">
                USDT
              </div>
            </div>
            <div className="sm:w-17% sm:px-2 sm:bg-inputBg text-[1.6rem] text-dashbgtrans sm:text-center flex sm:items-center rounded sm:h-[2rem] ">
              +
            </div>
            <div className="sm:w-17% sm:px-2 sm:bg-inputBg text-[1.8rem] text-dashbgtrans sm:text-center flex sm:items-center rounded sm:h-[2rem]">
              -
            </div>
          </div>
        </div>
      )}

      <div className="flex sm:flex-col sm:mt-2 ">
        <span className="sm:ml-5 sm:text-[0.5rem] sm:py-1">Total</span>
        <div className="flex sm:flex-row sm:justify-evenly sm:items-center">
          <div className="flex sm:flex-row  sm:w-[89%]">
            <input
              value={enteredAmountINR}
              onChange={handleAmountChangeINR}
              className="  focus:outline-none sm:px-2 sm:w-[90%] rounded-l sm:bg-inputBg text-black sm:h-[2rem] "
            />
            <div className="sm:h-[2rem] sm:p-2 sm:w-[2.3rem] flex sm:items-center font-poppinsRegular sm:bg-inputBg sm:text-[0.65rem] text-dashbgtrans rounded-r">
              INR
            </div>
          </div>
        </div>
      </div>

      <div className="flex sm:flex-col sm:mt-8  ">
        {selectedTab === "buy" ? (
          <div
            onClick={handleDeposit}
            className="sm:w-[100%] sm:text-[1.3rem] font-poppinsBold sm:h-[2.6rem] flex sm:justify-center sm:items-center bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage: "url(/dashboard/exchange/buyButton.svg)",
            }}
          >
            BUY USDT
          </div>
        ) : (
          <div
            className="sm:w-[100%] sm:text-[1.3rem]  font-poppinsBold sm:h-[2.6rem] flex sm:justify-center sm:items-center bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage: "url(/dashboard/exchange/sellButton.svg)",
            }}
          >
            SELL USDT
          </div>
        )}
      </div>
    </section>
  );
}
