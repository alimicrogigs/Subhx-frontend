"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Inputfield from "../components/multistepform/common/Inputfield/Inputfield";
import toast, { Toaster } from "react-hot-toast";
import ToasterCustom from "../components/common/ToasterCustom/ToasterCustom";
import Link from "next/link";

export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phonecode, setphonecode] = useState("");
  const [emailcode, setemailcode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [signmein, setSignmein] = useState(false);

  const [currentStep, setCurrentStep] = useState("login");

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handlesignmein = () => {
    setSignmein((prevsetSignmein) => !prevsetSignmein);
  };
  const handleresendmobilecode = (e: any) => {};

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log({
      email,
      password,
    });
  };
  const handleloginSubmit = (e: any) => {
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
    // this validate that password and confirm password is empty
    if (password == "") {
      toast.custom(
        <ToasterCustom
          type="error"
          message="Password field should not be empty"
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
      password,
      signmein,
    });

    setCurrentStep("validate");
  };

  return (
    <>
      <section
        style={{
          backgroundImage: "url(/signup/signupbg.svg)",
        }}
        className="relative w-[100vw] h-[100vh] min-h-[600px] bg-center bg-cover flex justify-center items-center"
      >
        <Link href="/">
          <div
            style={{
              backgroundImage: "url(/signup/crossbutton.svg)",
            }}
            className="absolute w-[50px] h-[50px]  sm:top-[50px] top-[25px] sm:right-[50px] right-[25px]  bg-center bg-no-repeat crossarrow"
          ></div>
        </Link>
        <div
          className={`${styles.border_to_design} sm:w-[32%] w-[90%] h-[90%] `}
        >
          {/* ............................................................ */}
          {/* login form start from here  */}
          {/* ............................................................ */}
          <form
            action=""
            style={{ display: currentStep === "login" ? "flex" : "none" }}
            className="w-[100%] h-[100%]  flex flex-col justify-center items-center text-white"
          >
            <div>
              <h1 className="sm:text-signupheading text-signupheadingmobile font-poppinsSemibold text-center">
                Login Your Account
              </h1>

              <p className="text-[.8rem] text-center">
                Don't have an account?{" "}
                <Link href="/create-account">
                  <span className="text-[#00BFFF] ml-[20px]">
                    Create Account
                  </span>
                </Link>
              </p>
            </div>
            {/* ......................... */}
            <div className="w-[80%]  mt-[50px]">
              <Inputfield
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email or Phone"
              />
            </div>
            {/* .............................. */}
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
            {/* ..................................... */}
            {/* ..................................... */}
            <div className="w-[80%] flex gap-[10px] mt-[15px] pl-[5px] justify-between items-center">
              <div className="flex gap-[10px]  pl-[5px] items-center">
                <input
                  className="h-[100%] w-[20px]"
                  type="checkbox"
                  checked={signmein}
                  onChange={handlesignmein}
                />
                <p className="text-[.8rem]">Keep me signed in. </p>
              </div>{" "}
              <Link href="/forget-password">
                <div className="text-[.8rem]">Forget Password?</div>
              </Link>
            </div>
            {/* ..................................... */}
            <div
              style={{
                backgroundImage: "url(/signup/button.svg)",
              }}
              onClick={handleloginSubmit}
              className="w-[80%] text-[2rem] py-[5px] font-poppinsSemibold flex justify-center bg-center bg-contain bg-no-repeat mt-[50px]"
            >
              Login Account
            </div>
            {/* ............................................ */}
          </form>
          {/* ............................................................ */}
          {/*login form end from here   */}
          {/* ............................................................ */}
          {/* ............................................................ */}
          {/* code authentication form start from here  */}
          {/* ............................................................ */}
          <form
            style={{ display: currentStep === "validate" ? "flex" : "none" }}
            action=""
            className="w-[100%] h-[100%]  flex flex-col justify-center items-center text-white"
          >
            {/* ............. heading ............. */}

            <div>
              <h1 className="sm:text-signupheading text-signupheadingmobile font-poppinsSemibold text-center">
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
            {/* ................ */}
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
            {/* .......................... */}
            <div
              style={{
                backgroundImage: "url(/signup/button.svg)",
              }}
              onClick={handleSubmit}
              className="w-[80%] text-[2rem] py-[5px] font-poppinsSemibold flex justify-center bg-center bg-contain bg-no-repeat mt-[30px]"
            >
              Submit
            </div>
          </form>
          {/* ............................................................ */}
          {/* code authentication form end from here  */}
          {/* ............................................................ */}
        </div>
      </section>
    </>
  );
}
