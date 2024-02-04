"use client";
import React, { useState } from "react";
import Inputfield from "../common/Inputfield/Inputfield";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import ToasterCustom from "../../common/ToasterCustom/ToasterCustom";
import { motion, AnimatePresence } from "framer-motion";

interface StepthreeProps {
  active: boolean;
  onNextStep: () => void;
}

const Stepthree: React.FC<StepthreeProps> = ({ active, onNextStep }) => {
  // .... for animation .....
  const [adharverified, setadharverified] = useState(false);
  // ......... for animaton end here .....
  const [adharno, setadharno] = useState("");
  const [adharotp, setadharotp] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Log all form data to the console
    if (adharno == "") {
      toast.custom(
        <ToasterCustom type="error" message="Please provide adhar no " />,
        {
          position: "top-right", // Set the position (e.g., "top-center")
          duration: 1000, // Set the duration in milliseconds
        }
      );
      return;
    }

    // Log all form data to the console
    if (adharotp == "") {
      toast.custom(
        <ToasterCustom type="error" message="Please provide adhar OTP" />,
        {
          position: "top-right", // Set the position (e.g., "top-center")
          duration: 1000, // Set the duration in milliseconds
        }
      );
      return;
    }

    console.log({
      adharno,
      adharotp,
    });
    onNextStep();
  };

  return (
    <form
      action=""
      style={{ display: active ? "flex" : "none" }}
      className="w-[100%] h-[100%]  flex flex-col justify-center items-center text-white"
    >
      {/* ............. heading ............. */}

      <div>
        <h1 className="sm:text-signupheading text-signupheadingmobile font-poppinsSemibold">
          KYC Documentation
        </h1>

        <p className="text-[.8rem] text-center">
          Fill Your details as per Aadhar card
        </p>
      </div>
      {/* ............. heading end ............. */}
      {/* ... */}

      <div className="relative w-[80%] mt-[20px]  gap-[10px]">
        <div
          style={{
            backgroundImage: "url(/signup/tick.svg)",
          }}
          className="absolute top-[20%] right-[10px] w-[50px] h-[60%] z-[1] bg-contain bg-center bg-no-repeat"
        ></div>
        <Inputfield
          type="number"
          value={adharno}
          onChange={(e) => setadharno(e.target.value)}
          placeholder="Aadhar Card Number"
        />
      </div>

      <div className="relative w-[80%] mt-[20px]">
        <div
          style={{
            backgroundImage: "url(/signup/tick.svg)",
          }}
          className="absolute top-[20%] right-[10px] w-[50px] h-[60%] z-[1] bg-contain bg-center bg-no-repeat"
        ></div>
        <Inputfield
          type="number"
          value={adharotp}
          onChange={(e) => setadharotp(e.target.value)}
          placeholder="Aadhar OTP"
        />
      </div>
      <div
        onClick={() => {
          setadharverified(true);
        }}
      >
        verifed adhar{" "}
      </div>
      {/* ......... adhar detail to be animated ......... */}
      <AnimatePresence>
        {adharverified && (
          <motion.div className="w-[80%] mt-[20px] flex bg-white text-[#00090C] py-[20px] px-[20px] gap-[30px] rounded-[5px]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100, transition: { duration: 0 } }}
              className="w-[120px] h-[150px]  rounded-[5px]"
            >
              <Image
                src="/signup/avatar.svg"
                alt="Avatar"
                width={120}
                height={150}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100, transition: { duration: 0 } }}
              className="flex-1 "
            >
              <ul className="text-[.6rem] h-[100%] flex-col flex justify-center gap-[10px] font-poppinsMedium">
                <li> Full Name : Random Jones</li>
                <li>D.O.B : 02/11/2016</li>
                <li>Gender : Female</li>
                <li>Father : Randomness</li>
                <li>
                  {" "}
                  Address : 83849 Mayert Squares, Hudsonport, MT 99884-6612
                </li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* ..................................................... */}
      <div
        style={{
          backgroundImage: "url(/signup/button.svg)",
        }}
        onClick={handleSubmit}
        className="w-[80%] sm:text-signupheading text-signupheadingmobile py-[5px] font-poppinsSemibold flex justify-center bg-center bg-contain bg-no-repeat mt-[30px]"
      >
        Next
      </div>
    </form>
  );
};
export default Stepthree;
