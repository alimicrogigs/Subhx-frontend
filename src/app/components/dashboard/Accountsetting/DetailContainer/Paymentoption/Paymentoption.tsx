import React from "react";
import HeadContainer from "../Common/HeadContainer/HeadContainer";

export default function Profile() {
  return (
    <>
      <HeadContainer
        title="PAYMENT OPTIONS"
        logo="/dashboard/account-setting/sidebar/paymentopt.svg"
      />
      <div className="w-[100%] h-[1000px] bg-dashboardbgone mt-[37px]"></div>
    </>
  );
}
