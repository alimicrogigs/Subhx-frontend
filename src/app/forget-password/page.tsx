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
  const [retypePassword, setRetypePassword] = useState("");
  const [emailcode, setemailcode] = useState("");

  //  this is just for frond end toggle password
  const [showRetypePassword, setShowRetypePassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // this ocntian confirm new passwor

  // to change the step
  const [currentStep, setCurrentStep] = useState("login");

  const handleToggleRetypePassword = () => {
    setShowRetypePassword((prevShowRetypePassword) => !prevShowRetypePassword);
  };
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleresendmobilecode = (e: any) => {};

  const handleresetpassword = (e: any) => {
    e.preventDefault();

    if (emailcode == "") {
      toast.custom(
        <ToasterCustom
          type="error"
          message="Please provide Email Verifictaion code  "
        />,
        {
          position: "top-right", // Set the position (e.g., "top-center")
          duration: 1000, // Set the duration in milliseconds
        }
      );
      return;
    }
    if (password == "") {
      toast.custom(
        <ToasterCustom
          type="error"
          message="Please provide password field  "
        />,
        {
          position: "top-right", // Set the position (e.g., "top-center")
          duration: 1000, // Set the duration in milliseconds
        }
      );
      return;
    }
    if (retypePassword == "") {
      toast.custom(
        <ToasterCustom
          type="error"
          message="Please provide confirm password field  "
        />,
        {
          position: "top-right", // Set the position (e.g., "top-center")
          duration: 1000, // Set the duration in milliseconds
        }
      );
      return;
    }

    if (password != retypePassword) {
      toast.custom(
        <ToasterCustom type="error" message="Password does not match  " />,
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
    });
  };
  const handlesendotp = (e: any) => {
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

    console.log({
      email,
      password,
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
        {/* <Link href="/">
          <div
            style={{
              backgroundImage: "url(/signup/crossbutton.svg)",
            }}
            className="absolute w-[50px] h-[50px]  sm:top-[50px] top-[25px] sm:right-[50px] right-[25px]  bg-center bg-no-repeat crossarrow"
          ></div>
        </Link> */}
        <div
          className={`${styles.border_to_design} sm:w-[32%]  sm:h-[90%] w-[95%] h-[100%]`}
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
                Forgot Password?
              </h1>

              <p className="text-[.8rem] text-center mt-[10px]">
                Please provide your registered email address. <br />
                We'll send a verification code to the mobile <br />
                number linked with your Aadhar.
              </p>
            </div>
            {/* ......................... */}
            <div className="w-[80%] mt-[50px]">
              <Inputfield
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Registered Email"
              />
            </div>

            <div
              style={{
                backgroundImage: "url(/signup/button.svg)",
              }}
              onClick={handlesendotp}
              className="w-[80%] sm:text-signupheading text-signupheadingmobile py-[5px] font-poppinsSemibold flex justify-center bg-center bg-contain bg-no-repeat mt-[50px]"
            >
              Send OTP
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
                Forgot Password
              </h1>
            </div>
            {/* ............. heading end ............. */}
            <div className="w-[80%] mt-[50px]  gap-[10px]">
              <Inputfield
                type="number"
                value={emailcode}
                onChange={(e) => setemailcode(e.target.value)}
                placeholder="Email Verification Code"
              />
            </div>
            {/* ........................... */}

            <div className="w-[80%] mt-[20px]">
              <Inputfield
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="New Password"
                showToggle={true}
                onToggle={handleTogglePassword}
              />
            </div>

            <div className="w-[80%]  mt-[20px]">
              <Inputfield
                type={showRetypePassword ? "text" : "password"}
                value={retypePassword}
                onChange={(e) => setRetypePassword(e.target.value)}
                placeholder="Confirm Password"
                showToggle={true}
                onToggle={handleToggleRetypePassword}
              />
            </div>
            {/* ............................... */}
            <div
              style={{
                backgroundImage: "url(/signup/button.svg)",
              }}
              onClick={handleresetpassword}
              className="sm:text-signupheading text-signupheadingmobile  w-[80%] text-[2rem] py-[5px] font-poppinsSemibold flex justify-center bg-center bg-contain bg-no-repeat mt-[30px]"
            >
              Reset Password
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
