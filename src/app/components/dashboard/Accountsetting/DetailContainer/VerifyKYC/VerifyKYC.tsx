import React from "react";
import HeadContainer from "../Common/HeadContainer/HeadContainer";
import Link from "next/link";

export default function Profile() {
  return (
    <>
      <HeadContainer
        title="Verify KYC"
        logo="/dashboard/account-setting/sidebar/verifykyc.svg"
      />
      <div className="w-[100%]  bg-dashboardbgone mt-[37px] px-[20px] text-white pb-[20px]">
        {/* .................. status ............ */}
        <div className="w-[60%] mx-auto bg-white h-[50px]"></div>

        <h1 className="w-[100%] text-center font-poppinsSemibold pt-[30px]">
          Congratulations!
        </h1>
        <p className="pt-[10px] text-[.8rem] text-center pb-[10px]">
          Your BIT24HR account has been successfully approved.
        </p>

        {/* ................... */}
        <div className="py-[20px] flex justify-center  border-t  border-t-[#041E27] ">
          <Link href="/dashboard/exchange">
            <div
              style={{
                backgroundImage:
                  "url(/dashboard/account-setting/verifykyc/button.svg)",
              }}
              className="inline bg-center bg-no-repeat bg-contain px-[50px] py-[20px]"
            >
              Start Trading
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
