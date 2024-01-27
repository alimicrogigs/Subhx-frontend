import React from "react";
import HeadContainer from "../Common/HeadContainer/HeadContainer";

export default function Profile() {
  const handlegenerateAPIkey = () => {};
  return (
    <>
      <HeadContainer
        title="API KEY MANAGER"
        logo="/dashboard/account-setting/sidebar/api.svg"
      />
      <div className="w-[100%]  bg-dashboardbgone mt-[37px] px-[20px] text-white pb-[20px]">
        <p className="py-[20px]">Create new API key</p>
        <div>
          <p className="text-[.8rem] pr-[100px] py-[20px] border-t  border-t-[#041E27] ">
            Generate an API private key to access BIT24HR markets and real time{" "}
            trading services through third-party sites or applications. Explore{" "}
            API Documentation for more details.
          </p>

          <div
            onClick={handlegenerateAPIkey}
            className="relative text-[.8rem] text-black bg-[#F5CD8E] inline px-[10px] py-[5px] font-poppinsSemibold"
          >
            GENERATE NEW KEY
          </div>
        </div>
      </div>
      {/* .......................... */}
      <div className="w-[100%]  bg-dashboardbgone mt-[10px] px-[20px] text-white pb-[20px]">
        <p className="py-[10px]">List of API Keys</p>
        <div className="border-t  border-t-[#041E27] pt-[10px]">
          <p className="text-[.7rem]">Currently list is empty </p>
        </div>
      </div>
    </>
  );
}
