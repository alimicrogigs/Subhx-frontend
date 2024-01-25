"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function () {
  let pathname = usePathname();
  // let active = href == pathname;
  console.log(pathname);
  return (
    <div className="w-[100%] h-[60px] bg-dashboardbg text-white">
      <nav className="flex h-[100%] items-center justify-between">
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
          <li className="flex items-center justify-center ">Refer & Rewards</li>
          <li className="flex items-center justify-center ">Refer & Rewards</li>
        </ul>
      </nav>
    </div>
  );
}
