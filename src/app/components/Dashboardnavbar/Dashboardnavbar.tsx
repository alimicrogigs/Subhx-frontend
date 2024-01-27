"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function () {
  const [mobilemenuopen, setMobilemenuopen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  let pathname = usePathname();
  // let active = href == pathname;

  const closeallmenu = () => {
    setDropdownOpen(false);
    setMobilemenuopen(false);
  };
  console.log(pathname);
  return (
    <div className="w-[100%] h-[80px] bg-dashboardbgone text-white">
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
                  transition: "all .2s ease-in-out",
                  width: `${
                    pathname === "/dashboard/exchange" ? "120%" : "0%"
                  }`,
                }}
                className="active absolute   h-[6px] bottom-[0px] bg-activedashboardbutton"
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
                  transition: "all .2s ease-in-out",
                  width: `${pathname === "/dashboard/funds" ? "150%" : "0%"}`,
                }}
                className="active absolute   h-[6px] bottom-[0px] bg-activedashboardbutton"
              ></div>
              {/* this is active bar  end here  */}s
            </li>
          </Link>
        </ul>

        <ul className="flex gap-[50px] pr-[50px] h-[100%] ">
          {/* ......... */}
          <li
            style={{ cursor: "pointer" }}
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="relative flex items-center justify-center gap-[10px]"
          >
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
            <div
              style={{
                transform: `${
                  dropdownOpen ? "rotate(-180deg)" : "rotate(0deg)"
                }`,
                transition: "all .1s ease-in-out",
              }}
            >
              <IoIosArrowDropdownCircle />
            </div>
            {/* drop diwn for account seeting  */}
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.1 }}
                  className="absolute top-[100%] w-[400%] bg-[#07303F] right-0 z-[100] rounded-bl-[10px] rounded-br-[10px]"
                >
                  {/* ....... first menu ........ */}
                  <Link href="/dashboard/account-setting">
                    <div className="flex gap-[20px] py-[10px] text-[1.2rem] items-center pl-[10px] hover:bg-[#041E27]">
                      <div
                        style={{
                          backgroundImage:
                            "url(/dashboard/dashboradnavbar/accountseting.svg)",
                        }}
                        className="h-[30px] w-[30px] bg-no-repeat bg-contain bg-center"
                      ></div>
                      <p>Account Settings</p>
                    </div>
                  </Link>
                  {/* ..... second item ..... */}
                  <Link href="/dashboard/account-setting">
                    <div className="flex gap-[20px] py-[10px] text-[1.2rem] items-center pl-[10px] hover:bg-[#041E27]">
                      <div
                        style={{
                          backgroundImage:
                            "url(/dashboard/dashboradnavbar/refer.svg)",
                        }}
                        className="h-[30px] w-[30px] bg-no-repeat bg-contain bg-center"
                      ></div>
                      <p>refer & rewards</p>
                    </div>
                  </Link>
                  {/* ......... third item .......... */}
                  <Link href="/dashboard/account-setting">
                    <div className="flex gap-[20px] py-[10px] text-[1.2rem] items-center pl-[10px] hover:bg-[#041E27]">
                      <div
                        style={{
                          backgroundImage:
                            "url(/dashboard/dashboradnavbar/logout.svg)",
                        }}
                        className="h-[30px] w-[30px] bg-no-repeat bg-contain bg-center"
                      ></div>
                      <p>logout</p>
                    </div>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
            {/* ............. */}
          </li>
          {/* ...... */}
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
                className="w-[100%] py-[20px] pl-[20px] text-[1.2rem]  border-b border-b-[.5px] "
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
                className="w-[100%] py-[20px] pl-[20px] text-[1.2rem] bg-[#07303F] border-b border-b-[.5px]"
              >
                Funds
              </div>
            </Link>
            <div className="w-[100%] py-[20px] pl-[20px] text-[1.2rem] bg-[#07303F] border-b border-b-[.5px]">
              Refer & Rewards
            </div>
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-[100%] py-[20px] pl-[20px] text-[1.2rem] bg-[#07303F] border-b border-b-[.5px] flex gap-[20px] items-center"
            >
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
              <div
                style={{
                  transform: `${
                    dropdownOpen ? "rotate(-180deg)" : "rotate(0deg)"
                  }`,
                  transition: "all .1s ease-in-out",
                }}
              >
                <IoIosArrowDropdownCircle />
              </div>
            </div>
            {/* .................................................................................................. */}
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.1 }}
                  className="  bg-[#07303F] rounded-bl-[10px] rounded-br-[10px]"
                >
                  {/* ....... first menu ........ */}
                  <Link href="/dashboard/account-setting">
                    <div
                      onClick={closeallmenu}
                      className="flex gap-[20px] py-[10px] text-[1.2rem] items-center pl-[10px] "
                    >
                      <div
                        style={{
                          backgroundImage:
                            "url(/dashboard/dashboradnavbar/accountseting.svg)",
                        }}
                        className="h-[30px] w-[30px] bg-no-repeat bg-contain bg-center"
                      ></div>
                      <p>Account Settings</p>
                    </div>
                  </Link>
                  {/* ..... second item ..... */}
                  <Link href="/dashboard/account-setting">
                    <div className="flex gap-[20px] py-[10px] text-[1.2rem] items-center pl-[10px]">
                      <div
                        style={{
                          backgroundImage:
                            "url(/dashboard/dashboradnavbar/refer.svg)",
                        }}
                        className="h-[30px] w-[30px] bg-no-repeat bg-contain bg-center"
                      ></div>
                      <p>refer & rewards</p>
                    </div>
                  </Link>
                  {/* ......... third item .......... */}
                  <Link href="/dashboard/account-setting">
                    <div className="flex gap-[20px] py-[10px] text-[1.2rem] items-center pl-[10px]">
                      <div
                        style={{
                          backgroundImage:
                            "url(/dashboard/dashboradnavbar/logout.svg)",
                        }}
                        className="h-[30px] w-[30px] bg-no-repeat bg-contain bg-center"
                      ></div>
                      <p>logout</p>
                    </div>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
            {/* .................................................................................................. */}
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}
