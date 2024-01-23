"use client";
import React, { useState } from "react";
import Inputfield from "../common/Inputfield/Inputfield";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import ToasterCustom from "../../common/ToasterCustom/ToasterCustom";

interface StepfourProps {
  active: boolean;
  onNextStep: () => void;
}

const Stepfour: React.FC<StepfourProps> = ({ active, onNextStep }) => {
  const [PANno, setPANno] = useState("");

  const handleifscfind = () => {
    // add logic to find ifsc code here
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Log all form data to the console
    // Log all form data to the console
    if (PANno == "") {
      toast.custom(
        <ToasterCustom type="error" message="Please provide Pan no " />,
        {
          position: "top-right", // Set the position (e.g., "top-center")
          duration: 1000, // Set the duration in milliseconds
        }
      );
      return;
    }

    console.log({
      PANno,
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
          Fill Your details as per PAN card
        </p>
      </div>
      {/* ............. heading end ............. */}
      {/* ... */}

      <div className="relative w-[80%] mt-[50px]  gap-[10px]">
        <div
          style={{
            backgroundImage: "url(/signup/tick.svg)",
          }}
          className="absolute top-[20%] right-[10px] w-[50px] h-[60%] z-[1] bg-contain bg-center bg-no-repeat"
        ></div>
        <Inputfield
          type="number"
          value={PANno}
          onChange={(e) => setPANno(e.target.value)}
          placeholder="PAN Card Number"
        />
      </div>

      <div className="relative w-[80%] mt-[20px] bg-white text-black rounded-[10px]">
        <h1 className="pl-[20px] py-[20px]">Random Jones</h1>
      </div>

      <div
        style={{
          backgroundImage: "url(/signup/button.svg)",
        }}
        onClick={handleSubmit}
        className="w-[80%] text-[1.6rem] py-[5px] font-poppinsSemibold flex justify-center bg-center bg-contain bg-no-repeat mt-[50px]"
      >
        Next
      </div>
    </form>
  );
};
export default Stepfour;