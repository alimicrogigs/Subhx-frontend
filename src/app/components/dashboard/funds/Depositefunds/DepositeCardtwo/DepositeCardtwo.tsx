import React from "react";
import DepositeCard from "../DepositeCard/DepositeCard";
import CopyCard from "../../../Common/CopyCard/CopyCard";

export default function DepositeCardone() {
  return (
    <>
      <DepositeCard eventKey="1" heading="NEFT">
        <h1 className="text-center mb-[30px] sm:text-[1.2rem] text-[1rem]">
          Add the account details mentioned below as{" "}
          <span className="sm:inline hidden">
            <br />
          </span>
          a beneficiary and make the payment.
        </h1>
        <div className="flex w-[100%] flex-wrap gap-[20px] justify-between">
          <CopyCard heading="Beneficiary name" subheading="JJ Trading Cmpany" />
          <CopyCard heading="IFSC Code" subheading="SBIN000466" />
          <CopyCard heading="Bank Name" subheading="State Bank of India" />
          <div
            className="w-[45%]
            "
          >
            <h1>Account Type</h1>
            <p>Savings</p>
          </div>
          <CopyCard heading="Account Number" subheading="ZANM1754665623" />
        </div>
      </DepositeCard>
    </>
  );
}
