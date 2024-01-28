"use client";
import React, { useState } from "react";
import HeadContainer from "../Common/HeadContainer/HeadContainer";
import { SiSpringsecurity } from "react-icons/si";
import { RxActivityLog } from "react-icons/rx";
import { FaPlay } from "react-icons/fa";

export default function Profile() {
  // data

  const [twofacteropen, settwofacteropen] = useState(false);
  const [Activitylogopen, setActivitylogopen] = useState(false);

  return (
    <>
      <HeadContainer
        title="ACCOUNT SECURITY
"
        logo="/dashboard/account-setting/sidebar/acountsetting.svg"
      />
      {/* ............... USser detail */}
      <div className="w-[100%]  bg-dashboardbgone mt-[37px] text-white px-[20px]">
        {/* ........ */}
        <div
          onClick={() => settwofacteropen(!twofacteropen)}
          className="w=[100%] py-[10px] border-t border-t-[#041E27] flex justify-between"
        >
          <h1 className="flex gap-[20px]">
            <div className="text-[#F5CD8E]">
              {" "}
              <SiSpringsecurity />
            </div>
            Two Factor Authentication
          </h1>
          <div
            style={{
              transition: ".1s all ease-in-out",
              transform: `${twofacteropen ? "rotate(90deg)" : "rotate(0deg)"}`,
            }}
            className="mr-[20px] text-[#F5CD8E]"
          >
            <FaPlay />
          </div>
        </div>
        {/* ........ */}
        {/* nominee list goes here ... */}
        <div style={{ display: `${twofacteropen ? "block" : "none"}` }}>
          <p>goes here </p>
        </div>
        {/* nominee list goes here ... */}

        {/* ........ */}
        <div
          onClick={() => setActivitylogopen(!Activitylogopen)}
          className="w=[100%] py-[10px] border-t border-t-[#041E27] flex justify-between"
        >
          <h1 className="flex gap-[20px]">
            <div className="text-[#F5CD8E]">
              {" "}
              <RxActivityLog />
            </div>
            Activity Log
          </h1>
          <div
            style={{
              transition: ".1s all ease-in-out",
              transform: `${
                Activitylogopen ? "rotate(90deg)" : "rotate(0deg)"
              }`,
            }}
            className="mr-[20px] text-[#F5CD8E]"
          >
            <FaPlay />
          </div>
        </div>
        {/* ........ */}
        {Activitylogopen && (
          <div className="flex gap-[20px] w-[100%] ">goes here</div>
        )}
      </div>
    </>
  );
}
