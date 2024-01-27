"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function () {
  const [mobilemenuopen, setMobilemenuopen] = useState(false);
  let pathname = usePathname();
  // let active = href == pathname;
  console.log(pathname);
  return (
    <div className="w-[100%] h-[60px] bg-dashboardbg text-white">
      <nav className="sm:flex hidden h-[100%] items-center justify-between">
        <ul className="flex gap-[50px] pl-[50px] h-[100%] ">
          <li className="flex items-center justify-center h-[100%] ">
            <Link href="/">
              <img
                src="/landingpage/mainlogo.svg"
                alt="logo"
                width={100}
                height={80}
              />
            </Link>
          </li>
          <Link href="/dashboard/exchange">
            <li className="relative h-[100%] flex items-center justify-center ">
              Exchange
              {/* this is active bar  */}
              <div
                style={{
                  transition: "all .3s ease-in-out",
                  background:
                    "linear-gradient(91deg, #DC04FF 18.05%, #00BFFF 90.72%)",
                  borderRadius: "5px 5px 0px 0px",
                  width: `${
                    pathname === "/dashboard/exchange" ? "120%" : "0%"
                  }`,
                }}
                className="active absolute   h-[6px] bottom-[0px]"
              ></div>
              {/* this is active bar  end here  */}
            </li>
          </Link>
          <Link href="/dashboard/funds">
            <li className="relative h-[100%] flex items-center justify-center">
              Fund
              {/* this is active bar  */}
              <div
                style={{
                  transition: "all .3s ease-in-out",
                  width: `${pathname === "/dashboard/funds" ? "150%" : "0%"}`,
                  background:
                    "linear-gradient(91deg, #DC04FF 18.05%, #00BFFF 90.72%)",
                  borderRadius: "5px 5px 0px 0px",
                }}
                className="active absolute   h-[6px] bottom-[0px]"
              ></div>
              {/* this is active bar  end here  */}s
            </li>
          </Link>
        </ul>

        <ul className="flex gap-[50px] pr-[50px] h-[100%] ">
          <li className="flex items-center justify-center gap-[10px]">
            <div
              style={{
                background: "url(/avatar.svg)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
              className="w-[20px] h-[30px]"
            ></div>
            jason
          </li>
          <li className="flex items-center justify-center ">Refer & Rewards</li>
        </ul>
      </nav>
      {/* ...... responsive navbar ,........ */}
      <nav className="sm:hidden flex h-[100%] items-center justify-between">
        <ul className="w-[100%] h-[100%] flex justify-between items-center">
          <li className="flex items-center justify-center h-[100%] pl-[20px] ">
            <Link href="/">
              <img
                src="/landingpage/mainlogo.svg"
                alt="logo"
                width={100}
                height={80}
              />
            </Link>
          </li>
          <li
            onClick={() => setMobilemenuopen(!mobilemenuopen)}
            className={`relative w-[50px] h-[70%] bg-tableodd mr-[20px]`}
          >
            <div
              className={`${
                mobilemenuopen ? "top-[45%] transform -rotate-45" : "top-[30%]"
              } absolute w-[70%] bg-white h-[10%]  left-[15%] rounded-[20px] transition-all duration-300 ease-in-out`}
            ></div>
            <div
              className={`${
                mobilemenuopen
                  ? "bottom-[45%] transform rotate-45"
                  : "bottom-[30%]"
              } absolute w-[70%] bg-white h-[10%]  left-[15%] rounded-[20px] transition-all duration-300 ease-in-out`}
            ></div>
          </li>
        </ul>
      </nav>
      {mobilemenuopen && (
        <div
          style={{ background: "rgba(4, 30, 39, .7)" }}
          className="absolute w-[100%] h-[90vh]  z-[100] flex "
        >
          <div className="containermobile w-[100%]">
            <Link href="/dashboard/exchange">
              <div
                style={{
                  background: `${
                    pathname === "/dashboard/exchange" ? "#041E27" : "#07303F"
                  }`,
                }}
                onClick={() => setMobilemenuopen(!mobilemenuopen)}
                className="w-[100%] py-[20px] pl-[20px] text-[1.8rem]  border-b border-b-[.5px] "
              >
                Exchange
              </div>
            </Link>
            <Link href="/dashboard/funds">
              <div
                style={{
                  background: `${
                    pathname === "/dashboard/funds" ? "#041E27" : "#07303F"
                  }`,
                }}
                onClick={() => setMobilemenuopen(!mobilemenuopen)}
                className="w-[100%] py-[20px] pl-[20px] text-[1.8rem] bg-[#07303F] border-b border-b-[.5px]"
              >
                Funds
              </div>
            </Link>
            <div className="w-[100%] py-[20px] pl-[20px] text-[1.8rem] bg-[#07303F] border-b border-b-[.5px]">
              Refer & Rewards
            </div>
            <div className="w-[100%] py-[20px] pl-[20px] text-[1.8rem] bg-[#07303F] border-b border-b-[.5px] flex gap-[20px] items-center">
              <div
                style={{
                  background: "url(/avatar.svg)",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }}
                className="w-[30px] h-[40px]"
              ></div>
              <p> jason</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
