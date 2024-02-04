import React from "react";
import Wrapper from "@/app/components/dashboard/Accountsetting/Wrapper/Wrapper";

export default function page() {
  return (
    <>
      <div className="relative w-[99%] h-[98%] max-h-[98%] bg-[#041E27] overflow-x-scroll rounded-[10px]">
        <div className="w-[100%] h-[10px] sm:hidden block bg-black"></div>
        <Wrapper />
      </div>
    </>
  );
}
