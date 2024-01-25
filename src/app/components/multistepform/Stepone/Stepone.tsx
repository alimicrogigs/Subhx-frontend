"use client";
import React, { useState } from "react";
import Inputfield from "../common/Inputfield/Inputfield";
import toast, { Toaster } from "react-hot-toast";
import ToasterCustom from "../../common/ToasterCustom/ToasterCustom";
import Link from "next/link";

interface SteponeProps {
  active: boolean;
  onNextStep: () => void;
}

const Stepone: React.FC<SteponeProps> = ({ active, onNextStep }) => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [referalcode, setreferalcode] = useState("");
  const [referralOptional, setReferralOptional] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  // this for togglig the password
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleToggleRetypePassword = () => {
    setShowRetypePassword((prevShowRetypePassword) => !prevShowRetypePassword);
  };
  const handleReferralOptionalChange = () => {
    setReferralOptional((prevReferralOptional) => !prevReferralOptional);
  };

  const handleAgreeTermsChange = () => {
    setAgreeTerms((prevAgreeTerms) => !prevAgreeTerms);
  };

  const handleSubmit = (e: any) => {
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
      );
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
          Create Your Account
        </h1>

        <p className="text-[.8rem] text-center">
          Already have an account?
          <Link href="/login">
            <span className="sm:ml-[90px] ml-[20px] text-[#00BFFF]">Login</span>
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
          checked={referralOptional}
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
      {/* .................................... */}
      {referralOptional && (
        <div className="w-[80%]  mt-[20px]">
          <Inputfield
            type="text"
            value={referalcode}
            onChange={(e) => setreferalcode(e.target.value)}
            placeholder="Your Referal code "
          />
        </div>
      )}

      {/* ................................. */}
      <div
        style={{
          backgroundImage: "url(/signup/button.svg)",
        }}
        onClick={handleSubmit}
        className="w-[80%] text-[2rem] py-[5px] font-poppinsSemibold flex justify-center bg-center bg-contain bg-no-repeat mt-[20px]"
      >
        Create Account
      </div>
      {/* .......................................... */}
    </form>
  );
};
export default Stepone;
