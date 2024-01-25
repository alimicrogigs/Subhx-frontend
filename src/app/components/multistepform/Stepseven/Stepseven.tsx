"use client";
import React, { useState } from "react";
import Inputfield from "../common/Inputfield/Inputfield";
import toast, { Toaster } from "react-hot-toast";
import ToasterCustom from "../../common/ToasterCustom/ToasterCustom";

interface StepsevenProps {
  active: boolean;
  onNextStep: () => void;
}

const Stepseven: React.FC<StepsevenProps> = ({ active, onNextStep }) => {
  const [VPAaddress, setVPAaddress] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Log all form data to the console
    // Log all form data to the console
    if (VPAaddress == "") {
      toast.custom(
        <ToasterCustom type="error" message="Please provide VPA address" />,
        {
          position: "top-right", // Set the position (e.g., "top-center")
          duration: 1000, // Set the duration in milliseconds
        }
      );
      return;
    }
    console.log({
      VPAaddress,
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
          Finish Your UPI Verification
        </h1>

        <p className="text-[.8rem] text-center">
          Verify for Smooth Transactions.
        </p>
      </div>
      {/* ............. heading end ............. */}
      {/* ... */}

      <div className="w-[80%] mt-[50px]  gap-[10px]">
        <Inputfield
          type="text"
          value={VPAaddress}
          onChange={(e) => setVPAaddress(e.target.value)}
          placeholder="Your VPA Address"
        />
      </div>

      <div
        style={{
          backgroundImage: "url(/signup/button.svg)",
        }}
        onClick={handleSubmit}
        className="w-[80%] sm:text-signupheading text-signupheadingmobile py-[5px] font-poppinsSemibold flex justify-center bg-center bg-contain bg-no-repeat mt-[50px]"
      >
        Submit
      </div>
    </form>
  );
};
export default Stepseven;
