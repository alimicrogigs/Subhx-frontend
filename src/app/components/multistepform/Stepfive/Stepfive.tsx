"use client";
import React, { useState } from "react";
import Inputfield from "../common/Inputfield/Inputfield";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import ToasterCustom from "../../common/ToasterCustom/ToasterCustom";
import {getRequestAPIHelper} from "../../../utils/lib/requestHelpers"
const dotenv = require('dotenv');
dotenv.config();
const apiUrl = process.env.API_URL;


interface StepsixProps {
  active: boolean;
  onNextStep: () => void;
}

const Stepsix: React.FC<StepsixProps> = ({ active, onNextStep }) => {
const [video, setvideo] = useState("");
const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await getRequestAPIHelper(apiUrl + 'get-user-video-kyc-link', token);
      if (response.status === 200) {
        console.log('response---------48', response);        
        window.location.href = response.data;  
      } else {
        console.error('Unexpected status code:', response.status);
        toast.error("Unexpected status code");
      } 
    } catch (error) {
      console.error('Error fetching PAN details:', error);
      toast.error("Error fetching PAN details");
    } finally {
      setLoading(false);
    }
    
   
  };

  return (
    <form
      action=""
      style={{ display: active ? "flex" : "none" }}
      className="w-[100%] h-[100%] flex flex-col justify-center items-center text-white"
    >
      {/* ............. heading ............. */}
      <div>
        <h1 className="sm:text-signupheading text-signupheadingmobile font-poppinsSemibold">
          KYC Documentation
        </h1>
        <p className="text-[.8rem] text-center">Record your 10 seconds video</p>
      </div>
      {/* ............. heading end ............. */}
      {/* ... */}
      <div
        style={{
          backgroundImage: "url(/signup/fixavatar.svg)",
        }}
        className="relative profile w-[40%] h-[200px] bg-white mt-[20px] rounded-[5px] bg-center bg-no-repeat"
      >
        <div className="hidden absolute w-[100%] h-[100%] bg-red-500 top-0 right-0 videoelement"></div>
      </div>
      <div className="progressbar w-[40%] h-[5px] bg-white mt-[10px]"></div>
      {/* <div className="controller flex gap-[10px] mt-[30px]">
        <div
          style={{
            backgroundImage: "url(/signup/recordbutton.svg)",
          }}
          className="text-white py-[10px] px-[20px] bg-center bg-contain bg-no-repeat"
        >
          Preview
        </div>
        <div
          style={{
            backgroundImage: "url(/signup/recordfillbg.svg)",
          }}
          className="text-white py-[10px] px-[20px] bg-center bg-contain bg-no-repeat"
        >
          Record
        </div>
        <div
          style={{
            backgroundImage: "url(/signup/recordbutton.svg)",
          }}
          className="text-white py-[10px] px-[20px] bg-center bg-contain bg-no-repeat"
        >
          Retake
        </div>
      </div> */}
      <h5 className="mt-[20px] gap-[10px]">Please Proceed to complete Video KYC</h5>
      <div
        style={{
          backgroundImage: "url(/signup/button.svg)",
        }}
        onClick={handleSubmit}
        className={`w-[80%] sm:text-signupheading text-signupheadingmobile py-[5px] font-poppinsSemibold flex justify-center bg-center bg-contain bg-no-repeat mt-[20px] ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
      >
        {loading ? 'Processing...' : 'Proceed'}
    </div>
    </form>
  );
};

export default Stepsix;
