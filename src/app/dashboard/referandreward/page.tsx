"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ToasterCustom from "@/app/components/common/ToasterCustom/ToasterCustom";
import ReferHIstory from "@/app/components/dashboard/ReferandReward/ReferHIstory/ReferHIstory";
import Referfriend from "@/app/components/dashboard/ReferandReward/Referfriend/Referfriend";

export default function page() {
  const [currentstate, setcurrentstate] = useState("refer-history");
  let user = {
    referalcode: "JAJO12BIT00",
    referallink: "https://www.bit24hr.in/refer/JAJO12BIT00",
  };

  const handleCopyClick = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast.custom(
          <ToasterCustom type="success" message={`${text} is copied `} />,
          {
            position: "top-right",
            duration: 1000,
          }
        );
      },
      (err) => {
        console.error("Error copying text: ", err);
      }
    );
  };
  // .....
  return (
    <>
      <div className="relative w-[99%] h-[98%] max-h-[98%] bg-[#041E27] overflow-x-scroll rounded-[10px]">
        {/* .................................. hero section .............. */}
        <div className="w-[100%] h-[100%] text-white flex">
          <div className="flex-1 h-[100%] px-[120px] text-[3.5rem] font-poppinsBold flex flex-col gap-[10px] pt-[130px]">
            <h1>
              Unlock <span className="text-[#F5CD8E]">Rewards</span>
            </h1>
            <h1>with Our Referral</h1>
            <h1 className="text-[#F5CD8E]">Program</h1>
            <p className="text-[1.5rem] font-poppinsRegular mt-[30px]">
              Unlock fee free trading by inviting friends. Share <br />
              your link and earn rewards with every referral.
            </p>
          </div>
          <div
            style={{
              backgroundImage: "url(/dashboard/refer/hero.svg)",
              transform: "translateX(-100px)",
            }}
            className="w-[35%] h-[100%]  bg-center bg-no-repeat bg-contain"
          ></div>
        </div>
        {/* .................................. hero section  end.............. */}
        {/* .................................. card section .............. */}
        <div className="w-[100%] h-[80vh] flex justify-center items-center gap-[100px] text-white">
          {/* ...... 1st card goes here .... */}
          <div
            style={{
              backgroundImage: "url(/dashboard/refer/border.svg)",
            }}
            className="text-center  bg-center bg-no-repeat bg-contain px-[20px] py-[440px]"
          >
            <div
              style={{
                backgroundImage: "url(/dashboard/refer/graplink.svg)",
              }}
              className="w-[50%] mx-auto h-[100px] bg-center bg-no-repeat bg-[50%]"
            ></div>
            <h1 className="text-[1.5rem] font-poppinsSemibold">
              Grab Your Link
            </h1>
            <p className="text-[.8rem] pt-[20px]">
              Share your exclusive referral <br /> link and earn from the trades{" "}
              <br /> of every user who signs up <br /> using your link.
            </p>
          </div>
          {/* .... */}

          {/* ...... 2nd card goes here .... */}
          <div
            style={{
              backgroundImage: "url(/dashboard/refer/border.svg)",
            }}
            className="text-center  bg-center bg-no-repeat bg-contain px-[20px] py-[440px]"
          >
            <div
              style={{
                backgroundImage: "url(/dashboard/refer/invite.svg)",
              }}
              className="w-[50%] mx-auto h-[100px] bg-center bg-no-repeat bg-[50%]"
            ></div>
            <h1 className="text-[1.5rem] font-poppinsSemibold">
              Invite Your Circle
            </h1>
            <p className="text-[.8rem] pt-[20px]">
              Invite friends for fee free <br /> trading. Share your link on{" "}
              <br />
              social media and earn more <br />
              with each invite!
            </p>
          </div>
          {/* .... */}

          {/* ...... 3rd card goes here .... */}
          <div
            style={{
              backgroundImage: "url(/dashboard/refer/border.svg)",
            }}
            className="text-center  bg-center bg-no-repeat bg-contain px-[20px] py-[440px]"
          >
            <div
              style={{
                backgroundImage: "url(/dashboard/refer/reward.svg)",
              }}
              className="w-[50%] mx-auto h-[100px] bg-center bg-no-repeat bg-[50%]"
            ></div>
            <h1 className="text-[1.5rem] font-poppinsSemibold">
              Collect Rewards
            </h1>
            <p className="text-[.8rem] pt-[20px]">
              Earn 50% from your referral's <br /> trading fees. More Referrals,{" "}
              <br /> More Rewards!
            </p>
          </div>
          {/* .... */}
        </div>
        {/* .................................. card section  end.............. */}

        {/* ....................... referal card and referal code start here ......... */}

        <div className="w-[40%] mx-auto flex justify-between gap-[10px] text-[.8rem]">
          {/* ............. */}
          <div className="flex items-center justify-between flex-1 px-[20px] text-white bg-[#07303F] rounded-[5px] ">
            <h1 className="font-poppinsSemibold py-[20px]">Referral Code</h1>
            <p style={{ color: "rgba(255, 255, 255, 0.60)" }}>
              {user.referalcode}
            </p>
          </div>
          {/* ............... */}
          <div
            onClick={() => handleCopyClick(user.referalcode)}
            className="bg-[#0C4E66] py-[10px] px-[20px] text-white rounded-[5px] font-poppinsSemibold flex items-center justify-center"
          >
            COPY
          </div>
        </div>

        {/* ....... second card .... */}

        <div className="w-[40%] mx-auto flex justify-between gap-[10px] text-[.8rem] mt-[20px]">
          {/* ............. */}
          <div className="flex items-center justify-between flex-1 px-[20px] text-white bg-[#07303F] rounded-[5px] ">
            <h1 className="font-poppinsSemibold py-[20px]">Referral Link</h1>
            <p style={{ color: "rgba(255, 255, 255, 0.60)" }}>
              {user.referallink}
            </p>
          </div>
          {/* ............... */}
          <div
            onClick={() => handleCopyClick(user.referallink)}
            className="bg-[#0C4E66] py-[10px] px-[20px] text-white rounded-[5px] font-poppinsSemibold flex items-center justify-center"
          >
            COPY
          </div>
        </div>
        {/* .................................................................. */}
        <div className="w-[60%] mx-auto flex flex-col justify-between gap-[10px] text-[.8rem] mt-[50px] bg-[#07303F] text-white">
          <div className="w-[90%] flex border-b mx-auto border-b-[#F5CD8E]">
            <div
              onClick={() => setcurrentstate("refer-history")}
              style={{
                borderBottom: `${
                  currentstate == "refer-history" ? "5px solid #F5CD8E" : "none"
                }`,
                cursor: "pointer",
              }}
              className="flex-1 text-center text-[.8rem] font-poppinsSemibold py-[20px] "
            >
              Reward History
            </div>
            <div
              onClick={() => setcurrentstate("refer-friend")}
              style={{
                borderBottom: `${
                  currentstate == "refer-friend" ? "5px solid #F5CD8E" : "none"
                }`,
                cursor: "pointer",
              }}
              className="flex-1 text-center text-[.8rem] font-poppinsSemibold py-[20px]"
            >
              Refered friends
            </div>
          </div>
          <div className="w-[90%] mx-auto">
            {currentstate == "refer-history" && <ReferHIstory />}
            {currentstate == "refer-friend" && <Referfriend />}
          </div>
        </div>
        {/* ....................... referal card and referal code end here ......... */}
      </div>
    </>
  );
}
