import React, { useState } from "react";
import HeadContainer from "../Common/HeadContainer/HeadContainer";

export default function Profile() {
  const [selectedCurrency, setSelectedCurrency] = useState("");

  const handleCurrencyChange = (event: any) => {
    setSelectedCurrency(event.target.value);
  };
  return (
    <>
      <HeadContainer
        title="Currency Preference"
        logo="/dashboard/account-setting/sidebar/currency.svg"
      />
      <div className="w-[100%]  bg-dashboardbgone mt-[37px] text-white px-[20px] ">
        <p className="py-[20px]">
          Choose your desired display currency for all markets.
        </p>

        {/* .......... first preference ....... */}
        <div className="w-[100%] flex py-[10px]  border-t border-t-[#041E27] flex justify-between">
          <div className="flex gap-[10px] items-center">
            <div
              style={{
                backgroundImage:
                  "url(/dashboard/account-setting/currencypreferences/usdt.svg)",
              }}
              className="w-[20px] h-[20px] bg-center bg-contain bg-no-repeat"
            ></div>
            TetherUS ( USDT )
          </div>
          <div>
            <input
              // value="USDT"
              // type="radio"
              // name="currencypreferences"
              // id="currencypreferences"
              value="USDT"
              type="radio"
              name="currencypreferences"
              id="usdt"
              checked={selectedCurrency === "USDT"}
              onChange={handleCurrencyChange}
            />
          </div>
        </div>
        {/* .......... first preference  end....... */}
        {/* .......... second preference ....... */}
        <div className="w-[100%] flex py-[10px]  border-t border-t-[#041E27] flex justify-between">
          <div className="flex gap-[10px] items-center">
            <div
              style={{
                backgroundImage:
                  "url(/dashboard/account-setting/currencypreferences/bitcoin.svg)",
              }}
              className="w-[20px] h-[20px] bg-center bg-contain bg-no-repeat"
            ></div>
            Bitcoin ( BTC )
          </div>
          <div>
            <input
              // value="BTC"
              // type="radio"
              // name="currencypreferences"
              // id="currencypreferences"
              value="BTC"
              type="radio"
              name="currencypreferences"
              id="btc"
              checked={selectedCurrency === "BTC"}
              onChange={handleCurrencyChange}
            />
          </div>
        </div>
        {/* .......... second preference  end....... */}
        {/* .......... third preference ....... */}
        <div className="w-[100%] flex py-[10px]  border-t border-t-[#041E27] flex justify-between">
          <div className="flex gap-[10px] items-center">
            <div
              style={{
                backgroundImage:
                  "url(/dashboard/account-setting/currencypreferences/inr.svg)",
              }}
              className="w-[20px] h-[20px] bg-center bg-contain bg-no-repeat"
            ></div>
            Rupee ( INR )
          </div>
          <div>
            <input
              // value="INR"
              // type="radio"
              // name="currencypreferences"
              // id="currencypreferences"
              value="INR"
              type="radio"
              name="currencypreferences"
              id="inr"
              checked={selectedCurrency === "INR"}
              onChange={handleCurrencyChange}
            />
          </div>
        </div>
        {/* .......... third preference  end....... */}
      </div>
    </>
  );
}
