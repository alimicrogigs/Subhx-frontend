"use client";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ToasterCustom from "@/app/components/common/ToasterCustom/ToasterCustom";
import ReferHIstory from "@/app/components/dashboard/ReferandReward/ReferHIstory/ReferHIstory";
import Referfriend from "@/app/components/dashboard/ReferandReward/Referfriend/Referfriend";
import styles from "./page.module.css";
import {
  motion,
  useAnimation,
  useScroll,
  useViewportScroll,
  useTransform,
} from "framer-motion";

export default function page() {
  // .. testing
  const { scrollYProgress } = useScroll();

  // for animation
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();

  useEffect(() => {
    const animateText = async () => {
      await controls1.start({ opacity: 1, y: 0 });
      await controls2.start({ opacity: 1, y: 0 });
      await controls3.start({ opacity: 1, y: 0 });
      await controls6.start({ opacity: 1, y: 0 });
      await controls4.start({ opacity: 1, y: 0 });
      await controls5.start({ opacity: 1, y: 0 });
    };

    animateText();
  }, [controls1, controls2, controls6, controls5, controls3, controls4]);
  //..........
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
        <div className="w-[100%] sm:h-[100%] h-[100vh] text-white flex sm:flex-row flex-col">
          <div
            className={`${styles.texttobealign} flex-1 h-[100%] sm:px-[120px] sm:text-[3.5rem] text-[2rem] font-poppinsBold flex flex-col sm:gap-[10px] pt-[130px]`}
          >
            <motion.h1
              animate={controls1}
              initial={{ opacity: 0, y: 30 }}
              whileHover={{
                x: 20,
              }}
            >
              Unlock <span className="text-[#F5CD8E]">Rewards</span>
            </motion.h1>

            <motion.h1
              animate={controls2}
              initial={{ opacity: 0, y: 30 }}
              whileHover={{
                x: 20,
              }}
            >
              with Our Referral
            </motion.h1>

            <motion.h1
              className="text-[#F5CD8E]"
              animate={controls3}
              initial={{ opacity: 0, y: 30 }}
              whileHover={{
                x: 20,
              }}
            >
              Program
            </motion.h1>
            <motion.p
              className="sm:text-[1.5rem] text-[1rem] font-poppinsRegular mt-[30px]"
              animate={controls4}
              initial={{ opacity: 0, y: 30 }}
              whileHover={{
                x: 20,
              }}
            >
              Unlock fee free trading by inviting friends. Share{" "}
              <span className="sm:block inline"></span>
              your link and earn rewards with every referral.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 100,
            }}
            style={{
              backgroundImage: "url(/dashboard/refer/hero.svg)",
            }}
            className={`${styles.photo} sm:w-[35%] w-[100%] h-[100%]  bg-center bg-no-repeat bg-contain`}
          ></motion.div>
        </div>
        {/* .................................. hero section  end.............. */}
        {/* .................................. card section .............. */}
        <div className="w-[100%] sm:h-[80vh] flex justify-center items-center sm:gap-[100px] gap-[0px] text-white sm:flex-row flex-col">
          {/* ...... 1st card goes here .... */}
          <motion.div
            style={{
              backgroundImage: "url(/dashboard/refer/border.svg)",
            }}
            className="text-center  bg-center bg-no-repeat bg-contain px-[20px] sm:py-[440px] py-[40px] sm:mt-[0px] mt-[50px]"
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
          </motion.div>
          {/* .... */}

          {/* ...... 2nd card goes here .... */}
          <div
            style={{
              backgroundImage: "url(/dashboard/refer/border.svg)",
            }}
            className="text-center  bg-center bg-no-repeat bg-contain px-[20px] sm:py-[440px] py-[40px] sm:mt-[0px] mt-[50px]"
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
            className="text-center  bg-center bg-no-repeat bg-contain px-[20px] sm:py-[440px] py-[40px] sm:mt-[0px] mt-[50px]"
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

        <div className="sm:w-[40%] w-[90%] mx-auto flex justify-between gap-[10px] sm:text-[.8rem] text-[.6rem]">
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

        <div className="sm:w-[40%] w-[90%] mx-auto flex justify-between sm:gap-[10px] gap-[10px] sm:text-[.8rem] text-[.6rem] mt-[20px]">
          {/* ............. */}
          <div className="flex sm:items-center text-left justify-between flex-1 sm:px-[20px] px-[20px] text-white bg-[#07303F] rounded-[5px] sm:flex-row flex-col sm:py-[0px] py-[15px]">
            <h1 className="font-poppinsSemibold sm:py-[20px]">Referral Link</h1>
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

        <div className="sm:w-[60%] w-[90%] mx-auto flex flex-col justify-between gap-[10px] text-[.8rem] mt-[50px] bg-[#07303F] text-white sm:mb-[100px] mb-[50px] rounded-[5px]">
          <div className="sm:w-[90%] w-[95%] flex border-b mx-auto border-b-[#F5CD8E]">
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
