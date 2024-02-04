import React from "react";
import styles from "./page.module.css";

export default function () {
  return (
    <>
      <section className="bg-black w-[100%] h-[100%] flex justify-center items-center">
        <img
          src="https://media0.giphy.com/media/hTOsxwPaV59LoEtNq4/giphy.gif?cid=ecf05e47lb6avxtgdn23dflaccdpmo1djsg5rgid3tto612v&ep=v1_gifs_related&rid=giphy.gif&ct=g"
          alt=""
        />
        {/* <div className="relative bg-[#07303F] w-[100%] h-[80px] mt-[10px]"></div>

        <div className="mt-[20px] w-[100%] flex flex-col gap-[20px]">
          <div className="w-[100%] h-[80px] bg-[#07303F] "></div>
          <div className="w-[100%] h-[80px] bg-[#07303F] "></div>
          <div className="w-[100%] h-[80px] bg-[#07303F] "></div>

          <div></div>
        </div> */}
      </section>
    </>
  );
}
