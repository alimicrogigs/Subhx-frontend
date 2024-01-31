import React from "react";
import DepositeCard from "../DepositeCard/DepositeCard";
import {useSelector} from "react-redux"; 
import CopyCard from "../../../Common/CopyCard/CopyCard";

export default function DepositeCardone() {
  const {manualAccount , vanAccount} = useSelector((state)=>state.deposite);
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
          <CopyCard heading="Beneficiary name" subheading={manualAccount[0]?.name} />
          <CopyCard heading="IFSC Code" subheading={vanAccount[0]?.ifsc_code} />
          <CopyCard heading="Bank Name" subheading={manualAccount[0]?.bank_name}/>
          <div
            className="w-[45%]
            "
          >
            <h1>Account Type</h1>
            <p>{manualAccount[0]?.type}</p>
          </div>
          <CopyCard heading="Account Number" subheading={vanAccount[0]?.van_number} />
        </div>
      </DepositeCard>
    </>
  );
}
