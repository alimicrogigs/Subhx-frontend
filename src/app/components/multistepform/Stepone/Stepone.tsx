"use client";
import React, { useState } from "react";
import Inputfield from "../common/Inputfield/Inputfield";

interface SteponeProps {
  active: boolean;
  onNextStep: () => void;
}

const Stepone: React.FC<SteponeProps> = ({ active, onNextStep }) => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [retypePassword, setRetypePassword] = useState("");
  const [showRetypePassword, setShowRetypePassword] = useState(false);
  const [referralOptional, setReferralOptional] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

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
    // Log all form data to the console
    if (password != retypePassword) {
      alert("password not match ");
      return;
    }
    if (password == "" || retypePassword == "") {
      alert("password is empty  ");
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
        <h1 className="text-[2rem] font-poppinsSemibold">
          Create Your Account
        </h1>

        <p className="text-[.8rem] text-center">
          Already have an account?
          <span className="ml-[90px] text-[#00BFFF]">Login</span>
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
