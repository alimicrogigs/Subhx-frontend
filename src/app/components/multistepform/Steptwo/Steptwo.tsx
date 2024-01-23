"use client";
import React, { useState } from "react";
import Inputfield from "../common/Inputfield/Inputfield";
import toast, { Toaster } from "react-hot-toast";
import ToasterCustom from "../../common/ToasterCustom/ToasterCustom";

interface SteptwoProps {
  active: boolean;
  onNextStep: () => void;
}

const Steptwo: React.FC<SteptwoProps> = ({ active, onNextStep }) => {
  const [phonecode, setphonecode] = useState("");
  const [emailcode, setemailcode] = useState("");

  const handleresendmobilecode = () => {
    // add here logic for resend mobile code
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Log all form data to the console
    // this validate that email is provided or not
    if (phonecode == "") {
      toast.custom(
        <ToasterCustom
          gif="/signup/tick.svg"
          message="Mobile verification code is empty"
        />,
        {
          position: "top-right", // Set the position (e.g., "top-center")
          duration: 1000, // Set the duration in milliseconds
        }
      );
      return;
    }
    // this validate that email is provided or not
    if (emailcode == "") {
      toast.custom(
        <ToasterCustom
          gif="/signup/tick.svg"
          message="Email verification code is empty"
        />,
        {
          position: "top-right", // Set the position (e.g., "top-center")
          duration: 1000, // Set the duration in milliseconds
        }
      );
      return;
    }

    console.log({
      phonecode,
      emailcode,
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
        <h1 className="text-[2rem] font-poppinsSemibold">
          Security Authentication
        </h1>

        <p className="text-[.8rem] text-center">
          Please complete the opreation of Security <br /> authentication.
        </p>
      </div>
      {/* ............. heading end ............. */}
      {/* ... */}

      <div className="w-[80%] mt-[50px]  gap-[10px]">
        <Inputfield
          type="number"
          value={phonecode}
          onChange={(e) => setphonecode(e.target.value)}
          placeholder="Email Verification Code"
        />
      </div>

      <div className="relative w-[80%] mt-[20px]">
        <div
          onClick={handleresendmobilecode}
          className="absolute h-[100%] top-0 right-[20px] z-[1] flex justify-center items-center text-[#DC04FF]"
        >
          Resend
        </div>
        <Inputfield
          type="number"
          value={emailcode}
          onChange={(e) => setemailcode(e.target.value)}
          placeholder="Mobile No. Verification Code"
        />
      </div>

      <div
        style={{
          backgroundImage: "url(/signup/button.svg)",
        }}
        onClick={handleSubmit}
        className="w-[80%] text-[2rem] py-[5px] font-poppinsSemibold flex justify-center bg-center bg-contain bg-no-repeat mt-[30px]"
      >
        Activate Account
      </div>
    </form>
  );
};
export default Steptwo;
