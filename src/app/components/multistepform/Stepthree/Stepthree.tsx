"use client";
import React, { useState } from "react";
import Inputfield from "../common/Inputfield/Inputfield";
import Image from "next/image";
import axios from "axios"
import toast, { Toaster } from "react-hot-toast";
import ToasterCustom from "../../common/ToasterCustom/ToasterCustom";

interface StepthreeProps {
  active: boolean,
  onNextStep: () => void
}

const apiUrl = process.env.API_URL;

const Stepthree: React.FC<StepthreeProps> = ({ active, onNextStep }) => {
  const [adharno, setadharno] = useState("");
  const [adharotp, setadharotp] = useState("");

  const handleAdharNoChange = async(e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setadharno(value)

    if (adharno.length === 11) {
      try{
        const token = localStorage.getItem("token")
      // console.log("line__39" + token) 
      // console.log("line__39" + apiUrl) 
      const response = await axios.post(apiUrl+'aadhar-verification/sendOTP',{
        aadhar_number:value       
      },{ headers: { 'token': token,
      'Content-Type': 'application/json',
      'Authorization': `Bearer `+ token}})

      console.log('requestId   :', (response.data.data.requestId));
      if (response.status === 200) {
        let requestId =response.data.data.requestId;
        localStorage.setItem('requestId', (requestId));
        console.log('Otp is valid', requestId)
        if (response.status === 200) {
          toast.custom(
            <ToasterCustom
              type="text"
              message="OTP Send"
            />,
            {
              position: "top-right", // Set the position (e.g., "top-center")
              duration: 1000, // Set the duration in milliseconds
            }
          );
          return;
        }
      }else {
        console.log('OTP not valid:', response)
        
      }
    }catch(err){
      console.log(err);
    }
  } 
    
  }
  
  
  
  const handleAdharOTPChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setadharotp(value)
    // console.log(value + "__09")

    console.log({
      adharotp,
    })
// console.log("anshul")

    if(adharotp.length === 5){
      try{
        const token = localStorage.getItem("token")
        const requestID = localStorage.getItem("requestId")
        
        const response = await axios.post(apiUrl+'aadhar-verification/verifyOTP',{
          requestId:requestID,
          otp:adharotp ,       
        },{ headers: { 'token': token,
                       'Content-Type': 'application/json',
                       'Authorization': `Bearer `+ token}})
  
        if (response.status === 200) {
          // console.log('Otp is valid', response)
          if (response.status === 200) {
            toast.custom(
              <ToasterCustom type="message" message="Otp is valid" />,
              {
                position: "top-right", // Set the position (e.g., "top-center")
                duration: 1000, 
              }
            )
            return;
          }   
        }else {
          console.log('OTP not valid:', response)
        }
      }catch(err){
        console.log(err);
      }
    }

  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (adharotp == "") {
      toast.custom(
        <ToasterCustom type="error" message="Please provide adhar OTP" />,
        {
          position: "top-right", // Set the position (e.g., "top-center")
          duration: 1000, 
        }
      )
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
          onChange={handleAdharNoChange}
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
          onChange={handleAdharOTPChange}
          placeholder="Aadhar OTP"
        />

      </div>

      <div className="w-[80%] mt-[20px] flex bg-white text-[#00090C] py-[20px] px-[20px] gap-[30px] rounded-[5px]">
        <div className="w-[120px] h-[150px]  rounded-[5px]">
          <Image
            src="/signup/avatar.svg"
            alt="Avatar"
            width={120}
            height={150}
          />
        </div>
        <div className="flex-1 ">
          <ul className="text-[.6rem] h-[100%] flex-col flex justify-center gap-[5px] font-poppinsSemibold">
            <li> Full Name : Random Jones</li>
            <li>D.O.B : 02/11/2016</li>
            <li>Gender : Female</li>
            <li>Father : Randomness</li>
            <li> Address : 83849 Mayert Squares, Hudsonport, MT 99884-6612</li>
          </ul>
        </div>
      </div>

      <div
        style={{
          backgroundImage: "url(/signup/button.svg)",
        }}
        onClick={handleSubmit}
        className="w-[80%] text-[1.6rem] py-[5px] font-poppinsSemibold flex justify-center bg-center bg-contain bg-no-repeat mt-[30px]"
      >
        Next
      </div>
    </form>
  )
};

export default Stepthree;
