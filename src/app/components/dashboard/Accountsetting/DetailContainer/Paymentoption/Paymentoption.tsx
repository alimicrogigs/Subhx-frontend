import React, { useState } from "react";
import HeadContainer from "../Common/HeadContainer/HeadContainer";
import UPI from "./UPI/UPI";
import BankAccount from "./BankAccount/BankAccount";

export default function Profile() {
  const [paymentoptionactive, setPaymentoptionactive] = useState("Bankaccount");
  return (
    <>
      <HeadContainer
        title="PAYMENT OPTIONS"
        logo="/dashboard/account-setting/sidebar/paymentopt.svg"
      />
      <div className="w-[100%]  bg-dashboardbgone mt-[37px] px-[20px] text-white">
        {/* ................ */}
        <div className="buttoncontainer flex justify-between pt-[20px]">
          <div
            style={{
              borderBottom: `${
                paymentoptionactive == "Bankaccount"
                  ? "5px solid #F5CD8E"
                  : "none"
              }`,
              cursor: "pointer",
            }}
            onClick={() => setPaymentoptionactive("Bankaccount")}
            className="flex-1 text-center py-[5px] border-b border-[#F5CD8E]"
          >
            Bank Account
          </div>
          <div
            style={{
              borderBottom: `${
                paymentoptionactive == "UPI" ? "5px solid #F5CD8E" : "none"
              }`,
              cursor: "pointer",
            }}
            onClick={() => setPaymentoptionactive("UPI")}
            className="flex-1 text-center py-[5px]"
          >
            UPI
          </div>
        </div>
        {/* ................ */}
        {/* ...................... */}
        <div className="w-[100%]">
          {paymentoptionactive == "Bankaccount" && <BankAccount />}
          {paymentoptionactive == "UPI" && <UPI />}
        </div>
      </div>
    </>
  );
}
