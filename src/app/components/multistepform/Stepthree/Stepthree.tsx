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
  const [imageSrc, setImageSrc] = useState('/signup/avatar.svg');
  const [fullName, setFullName] = useState('Random Jones');
  const [fatherName, setFatherName] = useState('Randomness');
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [dob, setDOB] = useState('02/11/2016');
  const [gender, setGender] = useState('Female');
  const [address, setAddress] = useState('83849 Mayert Squares, Hudsonport, MT 99884-6612');
  const [isResponseReceived, setIsResponseReceived] = useState(false);

  const handleAdharNoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setadharno(value)

    if (adharno.length === 11) {
      try {
        const token = localStorage.getItem("token")
        const response = await axios.post(apiUrl + 'aadhar-verification/sendOTP', {
          aadhar_number: value
        }, {
          headers: {
            'token': token,
            'Content-Type': 'application/json',
            'Authorization': `Bearer ` + token
          }
        })

        console.log('requestId   :', (response.data.data.requestId));
        if (response.status === 200) {
          let requestId = response.data.data.requestId;
          localStorage.setItem('requestId', (requestId));
          console.log('Otp is valid', requestId)
          if (response.status === 200) {
            toast.custom(
              <ToasterCustom
                type="success"
                message="OTP Send"
              />,
              {
                position: "top-right", // Set the position (e.g., "top-center")
                duration: 1000, // Set the duration in milliseconds
              }
            );
            return;
          }
        } else {
          console.log('OTP not valid:', response)

        }
      } catch (err) {
        console.log(err);
      }
    }
  }


  const handleAdharOTPChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setadharotp(value)

    console.log({
      adharotp,
    })

    if (adharotp.length === 5) {
      try {
        const token = localStorage.getItem("token")
        const requestID = localStorage.getItem("requestId")

        const response = await axios.post(apiUrl + 'aadhar-verification/verifyOTP', {
          requestId: requestID,
          otp: adharotp,
        }, {
          headers: {
            'token': token,
            'Content-Type': 'application/json',
            'Authorization': `Bearer ` + token
          }
        })
        
        if (response.status === 200) {
          setIsResponseReceived(true);
          setFullName(response.data.data[0].full_name);
          setFatherName(response.data.data[0].father_name);
          setAadhaarNumber(response.data.data[0].aadhaar_number);
          setDOB(response.data.data[0].dob);
          setGender(response.data.data[0].gender);
      
          // Combine address fields into a single string
          const formattedAddress = `${response.data.data[0].address.house}, ${response.data.data[0].address.street}, ${response.data.data[0].address.landmark}, ${response.data.data[0].address.loc}, ${response.data.data[0].address.po}, ${response.data.data[0].address.subdist}, ${response.data.data[0].address.dist}, ${response.data.data[0].address.state}, ${response.data.data[0].address.country}`;
          setAddress(formattedAddress);
          // get base64 image into variable
          const fileURL = response.data.data[0].profile_image;          
          // Set the URL as the image source
          setImageSrc(fileURL);

          // console.log('Otp is valid', response)
          if (response.status === 200) {
            toast.custom(
              <ToasterCustom type="success" message="Otp is valid" />,
              {
                position: "top-right", // Set the position (e.g., "top-center")
                duration: 1000,
              }
            )
            return;
          }
        } else {
          console.log('OTP not valid:', response)
        }
      } catch (err) {
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
      {isResponseReceived && (
      <div className="w-[80%] mt-[20px] flex bg-white text-[#00090C] py-[20px] px-[20px] gap-[30px] rounded-[5px] ">
        <div className="w-[120px] h-[150px]  rounded-[5px]">
          <Image
            src={imageSrc}
            alt="Avatar"
            width={120}
            height={150}
          />
        </div>
        <div className="flex-1 ">
          <ul className="text-[.6rem] h-[100%] flex-col flex justify-center gap-[5px] font-poppinsSemibold">                 
            <li>Full Name: {fullName}</li>
            <li>Aadhaar Number: {aadhaarNumber}</li>
            <li>DOB: {dob}</li>
            <li>Gender: {gender}</li>
            <li>Father Name: {fatherName}</li>
            <li>Address: {address}</li>
          </ul>
        </div>
      </div>
    )}

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
