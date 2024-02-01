"use client";
import React, { useEffect, useState } from "react";
import Inputfield from "../common/Inputfield/Inputfield";
import InputField_colorfull from "../common/Inputfield/InputField_colorfull";
import toast, { Toaster } from "react-hot-toast";
import ToasterCustom from "../../common/ToasterCustom/ToasterCustom";
import Link from "next/link";
import {postRequestAPIHelper} from "../../../utils/lib/requestHelpers"
const dotenv = require('dotenv');
dotenv.config();
const apiUrl = process.env.API_URL;
import InputField_colorfull from "../common/Inputfield/InputField_colorfull";

interface SteponeProps {
  active: boolean;
  onNextStep: () => void
}


const Stepone: React.FC<SteponeProps> = ({ active, onNextStep }) => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [retypePassword, setRetypePassword] = useState("");
  const [showRetypePassword, setShowRetypePassword] = useState(false);
  const [referalcode, setreferalcode] = useState("");
  const [referralOptional, setReferralOptional] = useState<boolean | undefined>(undefined);
  const [inputBorderColor, setInputBorderColor] = useState('gray');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleToggleRetypePassword = () => {
    setShowRetypePassword((prevShowRetypePassword) => !prevShowRetypePassword);
  };
<<<<<<< HEAD
  const handleReferralOptionalChange = (e:any) => {
    console.log(e.target.value)
    setReferralOptional((prevValue) => !prevValue);

    // setReferralOptional((prevReferralOptional) => !prevReferralOptional);
=======
  const handleReferralOptionalChange = () => {
    
    setReferralOptional((prevValue) => !prevValue);
>>>>>>> a25303134637797efea753a005790913f34dea8b
  };

  const handleAgreeTermsChange = () => {
    setAgreeTerms((prevAgreeTerms) => !prevAgreeTerms);
  }
  const Handlesetreferalcode = async (e: any)=>{
    setreferalcode(e.target.value)
    if(referalcode.length >= 6){
      const requestData: { referral_code: string} = { referral_code :e.target.value};
      try{
        const response = await postRequestAPIHelper(apiUrl+'check-referral-code', null, requestData);
        if(response.success === true) {
          console.log("referal code correct !!!")

          setInputBorderColor('green');
        }else {
          console.log("referal code is invalid !!!")

          setInputBorderColor('rose');
        }
      }catch(err){
        console.log(err);
      }
    } 
  }


  const Handlesetreferalcode = async (e: any)=>{
    setreferalcode(e.target.value)
    if(referalcode.length >= 6){
      const requestData: { referral_code: string} = { referral_code :e.target.value};
      try{
        const response = await postRequestAPIHelper(apiUrl+'check-referral-code', null, requestData);
        if(response.success === true) {
          console.log("referal code correct !!!")

          setInputBorderColor('green');
        }else {
          console.log("referal code is invalid !!!")

          setInputBorderColor('rose');
        }
      }catch(err){
        console.log(err);
      }
    } 
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    // this validate that email is provided or not
    if (email == "") {
      toast.custom(
        <ToasterCustom
          type="error"
          message="Please provide Your Email address "
        />,
        {
          position: "top-right", // Set the position (e.g., "top-center")
          duration: 1000, // Set the duration in milliseconds
        }
      );
      return;
    }
    // this validate that email is valid
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.custom(
        <ToasterCustom type="error" message="this is not a valid email " />,
        {
          position: "top-right", // Set the position (e.g., "top-center")
          duration: 1000, // Set the duration in milliseconds
        }
      );
      return;
    }

    // this validate that validate agree terms
    if (!agreeTerms) {
      toast.custom(
        <ToasterCustom
          type="error"
          message="Please Accept our Terms and Condition "
        />,
        {
          position: "top-right", // Set the position (e.g., "top-center")
          duration: 1000, // Set the duration in milliseconds
        }
      );
      return;
    }
    // this validate is password match or confirm password does not match ...
    if (password != retypePassword) {
      toast.custom(
        <ToasterCustom type="error" message="Password Does not match ! " />,
        {
          position: "top-right", // Set the position (e.g., "top-center")
          duration: 1000, // Set the duration in milliseconds
        }
      );
      return;
    }
    // this validate that password and confirm password is empty
    if (password == "" || retypePassword == "") {
      toast.custom(
        <ToasterCustom
          type="error"
          message="Password or Confirm-Password should not be empty"
        />,
        {
          position: "top-right", // Set the position (e.g., "top-center")
          duration: 1000, // Set the duration in milliseconds
        }
      );
      return;
    }

    // this validate that terms and condiotn is signed or not
    if (phoneNumber == "") {
      toast.custom(
        <ToasterCustom
          type="error"
          message="Please provide Your Mobile no! "
        />,
        {
          position: "top-right", // Set the position (e.g., "top-center")
          duration: 1000, // Set the duration in milliseconds
        }
      )
      return;
    }
    if (phoneNumber.length < 10) {
      toast.custom(
        <ToasterCustom
          type="error"
          message="Please provide 10 digit mobile no "
        />,
        {
          position: "top-right", // Set the position (e.g., "top-center")
          duration: 1000, // Set the duration in milliseconds
        }
      );
      return;
    }

    console.log({
      email,
      phoneNumber,
      password,
      retypePassword,
      referralOptional,
      agreeTerms,
    });


    try {
        const requestData: {
          email: string;
          phone: string;
          password: string;
          confirm_password: string;
          register_type: string;
          referral_code?: null | undefined;
        } = {
          email,
          phone: phoneNumber,
          password,
          confirm_password: retypePassword,
          register_type: 'individual',
          referral_code: null, 
        };
<<<<<<< HEAD
=======
        console.log('API URL:', apiUrl)

>>>>>>> a25303134637797efea753a005790913f34dea8b
        const response = await postRequestAPIHelper(apiUrl+'register', null, requestData);
        console.log('172',response);
        if (response.status === 200){
          const token = (response.data.token)

          if (token) {
<<<<<<< HEAD
            localStorage.setItem('token', response.data.token);
            toast.custom(
              <ToasterCustom
                type="success"
                message="Account Created Successfully"
              />,
              {
                position: "top-right", 
                duration: 1000, 
              }
            );
=======
            localStorage.setItem('token', response.data.token); 
            console.log(referralOptional)
>>>>>>> a25303134637797efea753a005790913f34dea8b
            onNextStep();
          } else {
            console.log('Token not found in response:', response.data);
          }        
        } else {

          toast.custom(
            <ToasterCustom
              type="error"
              message={response.response.data.message}
            />,
            {
              position: "top-right", 
              duration: 1000, 
            }
          );
          console.log('Registration failed:', response.data);
        }
    } catch (error) {
      // Handle API error in your controller
      console.error('Controller Error:', error)
      
    }
  };

  return (
    <form  
      action=""
      style={{ display: active ? "flex" : "none" }}
      className="w-[100%] h-[100%]  flex flex-col justify-center items-center text-white"
    >
      {/* .............heading ............. */}

      <div>
        <h1 className="sm:text-signupheading text-signupheadingmobile font-poppinsSemibold">
          Create Your Account
        </h1>

        <p className="text-[.8rem] text-center">
          Already have an account?
          <Link href="/login">
            <span className="ml-[90px] text-[#00BFFF]">Login</span>
          </Link>
        </p>
      </div>
      {/* ............. heading end ............. */}
      {/* ... */}
      <div className="w-[80%]  mt-[20px]">
        <Inputfield
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
        />
      </div>

      <div className="w-[80%] mt-[20px] flex gap-[10px]">
        <div className="bg-white text-black rounded-[10px] font-poppinsSemibold px-[15px] flex justify-center items-center">
          +91
        </div>
        <Inputfield
          type="number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Your phone number"
        />
      </div>

      <div className="w-[80%] mt-[20px]">
        <Inputfield
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Type Password"
          showToggle={true}
          onToggle={handleTogglePassword}
        />
      </div>

      <div className="w-[80%]  mt-[20px]">
        <Inputfield
          type={showRetypePassword ? "text" : "password"}
          value={retypePassword}
          onChange={(e) => setRetypePassword(e.target.value)}
          placeholder="Retype Password"
          showToggle={true}
          onToggle={handleToggleRetypePassword}
        />
      </div>
      {/* ... */}
      <div className="w-[80%] flex gap-[10px] mt-[15px] pl-[5px]">
        <input
          className="h-[100%] w-[20px]"
          type="checkbox"
          checked={referralOptional || false}
          
          onChange={handleReferralOptionalChange}
        />
        <p className="text-[.8rem]">I have Referral Optional </p>
      </div>
      <div className="w-[80%] flex gap-[10px] mt-[20px] pl-[5px]">
        <input
          className="h-[100%] w-[20px]"
          type="checkbox"
          checked={agreeTerms}
          onChange={handleAgreeTermsChange}
        />
        <p className="text-[.8rem]">I agree to BIT24HR Term & Conditions </p>
      </div>
<<<<<<< HEAD
               {/* .................................... */}
=======
            {/* .................................... */}
>>>>>>> a25303134637797efea753a005790913f34dea8b
      {referralOptional && (
        <div className="w-[80%]  mt-[20px]">
          <InputField_colorfull
            type="text"
            value={referalcode}
            onChange={Handlesetreferalcode}
            placeholder="Your Referal code "
            bgColor={inputBorderColor} 
          />
        </div>
      )}
<<<<<<< HEAD
=======

      {/* ................................. */}
>>>>>>> a25303134637797efea753a005790913f34dea8b
      <div
        style={{
          backgroundImage: "url(/signup/button.svg)",
        }}
        onClick={handleSubmit}
        className="w-[80%] text-[2rem] py-[5px] font-poppinsSemibold flex justify-center bg-center bg-contain bg-no-repeat mt-[30px]"
      >
        Create Account
      </div>
    </form>
  );
};
export default Stepone;