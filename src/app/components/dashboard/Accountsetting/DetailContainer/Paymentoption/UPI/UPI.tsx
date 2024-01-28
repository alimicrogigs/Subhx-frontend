import React from "react";
import { BsBank2 } from "react-icons/bs";

export default function UPI() {
  return (
    <div className="w-[100%]">
      <div className="flex justify-between py-[20px]">
        <p className="flex gap-[10px] items-center ">
          {" "}
          <div className="text-[#F5CD8E]">
            <BsBank2 />
          </div>
          Your VPA details
        </p>
        <div
          style={{ border: "1px solid #5AD776" }}
          className="text-[#5AD776] px-[20px] py-[5px] rounded-[5px]"
        >
          Verified
        </div>
      </div>
      {/* ...................................... */}
      <div className="border-t border-t border-t-[#041E27] flex flex-col gap-[10px] py-[20px] text-[.8rem]">
        <div className="flex ">
          <p className="flex-1">UPI / VPA ID</p>
          <p className="flex-1">randompayments@upi</p>
        </div>
      </div>
      {/* ........................................... */}
      <div className="border-t border-t border-t-[#041E27] flex flex-col gap-[10px] py-[20px]">
        <p className="w-[100%] text-center"> ADD A NEW PAYMENT OPTION</p>
      </div>
    </div>
  );
}
