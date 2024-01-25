import React from "react";
import Link from "next/link";

export default function navbar() {
  return (
    <section className="w-[100vw] border-b border-borderline">
      <nav className="">
        <ul className="w-[95%] m-auto h-[70px] flex justify-between  text-white px-[5%]">
          <Link href="/dashboard">
            <li className="flex items-center h-[100%]">Exchange</li>
          </Link>
          <li className="flex items-center">Funds</li>
          <li className="flex items-center">
            <div
              style={{
                backgroundImage: "url(/landingpage/mainlogo.svg)",
              }}
              className="h-[100%] w-[200px]  bg-center bg-[60%] bg-no-repeat"
            ></div>
          </li>
          <li className="flex items-center">Refer & Rewardss</li>
          <li className="flex items-center ">
            <Link href="/login">
              <div
                style={{ backgroundImage: "url(/landingpage/button.svg)" }}
                className="px-[35px] py-[15px] bg-contain bg-no-repeat bg-center"
              >
                SIGN IN
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
