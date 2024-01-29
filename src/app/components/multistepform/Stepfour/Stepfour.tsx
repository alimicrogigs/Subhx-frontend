"use client";
import React, { useState } from "react";
import axios from "axios"
const apiUrl = process.env.API_URL;
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
  // const [PANdetails, setPANdetails] = useState<any>(null);
  const [userName, setUserName] = useState("Your Name");
  const [userPANresponse, setUserPANresponse] = useState({});

  const handlePANChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPANno(value);
    console.log("line24__" + value);
    if (PANno == "") { 
      toast.custom(
        <ToasterCustom type="error" message="Please provide Pan no " />,
        {
          position: "top-right", // Set the position (e.g., "top-center")
          duration: 1000, // Set the duration in milliseconds
        }
      )
      return
    }
    console.log("line35__"+ PANno)
    if (value.length ==  10 ) { // Assuming PAN number has 10 characters
      try {
        const token = localStorage.getItem("token")
        console.log(PANno)
        const response = await axios.post(apiUrl + 'pan-verification',{
        pan_number : value,
      },{ headers: { 'token': token,
                     'Content-Type': 'application/json',
                     'Authorization': `Bearer `+ token}
        }); 
        setUserName(response.data.data.name);
        setUserPANresponse(response.data.data)
      } catch (error) {
        console.error('Error fetching PAN details:', error);
        toast.error("Error fetching PAN details");
      }
    }
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const token = localStorage.getItem("token")
      console.log(userPANresponse );
      const response = await axios.post(apiUrl + 'save-pan-response',{
      pan_number : PANno , pan_response : userPANresponse 
    },{ headers: { 'token': token,
                   'Content-Type': 'application/json',
                   'Authorization': `Bearer `+ token}
      })
      if(response.status ===200){
        onNextStep();
      }
    } catch (error) {
      console.error('Error fetching PAN details:', error);
      toast.error("Error fetching PAN details");
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
          type="text"
          value={PANno}
          onChange={handlePANChange}
          placeholder="PAN Card Number"
        />
      </div>

      <div className="relative w-[80%] mt-[20px] bg-white text-black rounded-[10px]">
        <h1 className="pl-[20px] py-[20px]">{userName}</h1>
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