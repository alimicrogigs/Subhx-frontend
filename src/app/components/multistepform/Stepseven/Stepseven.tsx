"use client";
import React, { useState } from "react";
import axios from "axios"
const apiUrl = process.env.API_URL;
import Inputfield from "../common/Inputfield/Inputfield";
import toast, { Toaster } from "react-hot-toast";
import ToasterCustom from "../../common/ToasterCustom/ToasterCustom";
import { postRequestAPIHelper } from "../../../utils/lib/requestHelpers";

interface StepsevenProps {
  active: boolean;
  onNextStep: () => void;
}

const Stepseven: React.FC<StepsevenProps> = ({ active, onNextStep }) => {
  const [VPAaddress, setVPAaddress] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (VPAaddress == "") {
      toast.custom(
        <ToasterCustom type="error" message="Please provide VPA address" />,
        {
          position: "top-right",
          duration: 1000, 
        }
      );
      return;
    }
    if (!VPAaddress.includes("@")) {
      toast.custom(
        <ToasterCustom
          type="error"
          message="Please provide valid VPA address"
        />,
        {
          position: "top-right", // Set the position (e.g., "top-center")
          duration: 1000, // Set the duration in milliseconds
        }
      );
      return;
    }

    console.log({
      VPAaddress,
    })

      try {
        const token = localStorage.getItem("token")

        const requestData: {
            vpa: string;
          } = {
            vpa: VPAaddress,
          };
    
          const response = await postRequestAPIHelper(apiUrl + "upi-verification", token, requestData);
          console.log("response===== 61", response);
          if (response.success === true) {     
            // Add custom toaster here
            toast.custom(
              <ToasterCustom
                type="success"
                message="UPI Verified"
              />, 
              {
                position: "top-right", // Set the position (e.g., "top-center")
                duration: 1000, // Set the duration in milliseconds
              }
            );
            onNextStep();
            return;
            
          }else{
            toast.custom(
              <ToasterCustom
                type="error"
                message="UPI not verified"
              />,
              {
                position: "top-right", // Set the position (e.g., "top-center")
                duration: 1000, // Set the duration in milliseconds
              }
            );
            return;
          }
        
      }
      catch (error) {
        console.error('upi not found:', error);
        toast.error("upi not found");
      }
    
    
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
        className="w-[80%] text-[2rem] py-[5px] font-poppinsSemibold flex justify-center bg-center bg-contain bg-no-repeat mt-[50px]"
      >
        Submit
      </div>
    </form>
  );
};
export default Stepseven;
