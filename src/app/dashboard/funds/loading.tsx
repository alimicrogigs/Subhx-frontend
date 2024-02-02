import React from "react";
import styles from "./page.module.css";

export default function () {
  return (
    <>
      <section className="bg-[#041E27] w-[100%] h-[100%]">
        <div className="relative bg-[#07303F] w-[100%] h-[80px] mt-[10px]"></div>

        <div className="mt-[20px] w-[100%] flex flex-col gap-[20px]">
          <div className="w-[100%] h-[80px] bg-[#07303F] "></div>
          <div className="w-[100%] h-[80px] bg-[#07303F] "></div>
          <div className="w-[100%] h-[80px] bg-[#07303F] "></div>

          <div></div>
        </div>
      </section>
    </>
  );
}
