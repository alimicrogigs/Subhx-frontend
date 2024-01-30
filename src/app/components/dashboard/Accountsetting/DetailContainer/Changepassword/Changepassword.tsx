import React from "react";
import HeadContainer from "../Common/HeadContainer/HeadContainer";

export default function Changepassword() {
  return (
    <>
      <HeadContainer
        title="CHANGE PASSWORD"
        logo="/dashboard/account-setting/sidebar/acountsetting.svg"
      />
      <div className="w-[100%]  bg-dashboardbgone mt-[37px] text-white px-[20px] flex flex-col items-center pt-[50px] pb-[50px] gap-[20px]">
        <input
          type="text"
          name=""
          id=""
          placeholder="Your Current Password "
          className="py-[10px] pl-[10px] w-[80%] px-[20px] focus:border-none focus:outline-none text-black rounded-[5px]"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Your New Password"
          className="py-[10px] pl-[10px] w-[80%] px-[20px] focus:border-none focus:outline-none text-black rounded-[5px]"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Your New Password"
          className="py-[10px] pl-[10px] w-[80%] px-[20px] focus:border-none focus:outline-none text-black rounded-[5px]"
        />

        <button className="mt-[20px] py-[10px] bg-[#F5CD8E] px-[20px] rounded-[5px] text-black font-poppinsSemibold">
          {" "}
          CHANGE PASSWORD
        </button>
      </div>
    </>
  );
}
