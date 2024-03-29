"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import Stepone from "../components/multistepform/Stepone/Stepone";
import Steptwo from "../components/multistepform/Steptwo/Steptwo";
import Stepthree from "../components/multistepform/Stepthree/Stepthree";
import Stepfour from "../components/multistepform/Stepfour/Stepfour";
import Stepfive from "../components/multistepform/Stepfive/Stepfive";
import Stepsix from "../components/multistepform/Stepsix/Stepsix";
import Stepseven from "../components/multistepform/Stepseven/Stepseven";
import Stepeight from "../components/multistepform/Stepeight/Stepeight";
import Link from "next/link";

import styles from "./page.module.css";
export default function page() {
  //..
  const controls = useAnimation();
  //..
  const [currentstep, setcurrentstep] = useState(1);
  ///.....
  useEffect(() => {
    // Add animations based on the current step
    if (currentstep === 1) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: -200 });
    }
  }, [currentstep, controls]);
  ////...
  const handleNextStep = () => {
    // Update the current step to move to the next one
    setcurrentstep((prevStep) => (prevStep < 8 ? prevStep + 1 : prevStep));
  };
  const handlePrevStep = () => {
    // Update the current step to move to the previous one, but not below 1
    setcurrentstep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };
  return (
    <motion.section
      style={{
        backgroundImage: "url(/signup/signupbg.svg)",
      }}
      className="relative w-[100vw] h-[100vh] sm:min-h-[650px] min-h-[500px] bg-center bg-cover flex justify-center items-center"
    >
      <Link href="/">
        <div
          style={{
            backgroundImage: "url(/signup/crossbutton.svg)",
            display: `${currentstep == 1 ? "block" : "none"}`,
          }}
          className="absolute sm:w-[50px] sm:h-[50px] h-[20px] w-[20px] sm:top-[50px] top-[5px] sm:right-[50px] right-[25px] bg-center bg-no-repeat crossarrow bg-contain"
        ></div>
      </Link>
      <div
        onClick={handlePrevStep}
        style={{
          backgroundImage: "url(/signup/backarrow.svg)",
          display: `${currentstep == 1 ? "none" : "block"}`,
        }}
        className="absolute w-[50px] h-[50px]  sm:top-[50px] top-[25px] sm:left-[50px] left-[25px] bg-center bg-no-repeat"
      ></div>

      <div className={`${styles.border_to_design} sm:w-[32%] w-[95%] h-[95%] `}>
        <Stepone
          onNextStep={handleNextStep}
          active={currentstep == 1 ? true : false}
        />
        <Steptwo
          onNextStep={handleNextStep}
          active={currentstep == 2 ? true : false}
        />
        <Stepthree
          onNextStep={handleNextStep}
          active={currentstep == 3 ? true : false}
        />
        <Stepfour
          onNextStep={handleNextStep}
          active={currentstep == 4 ? true : false}
        />
        {/* i chnge this step five on curent step to 7 bcz 
        we need to have video step in very last thats why below may 
        have diiferent nam eand current step */}

        {/* <Stepfive
          onNextStep={handleNextStep}
          active={currentstep == 5 ? true : false}
        /> */}

        <Stepsix
          onNextStep={handleNextStep}
          active={currentstep == 5 ? true : false}
        />
        <Stepseven
          onNextStep={handleNextStep}
          active={currentstep == 6 ? true : false}
        />
        <Stepfive
          onNextStep={handleNextStep}
          active={currentstep == 7 ? true : false}
        />
        <Stepeight
          onNextStep={handleNextStep}
          active={currentstep == 8 ? true : false}
        />
      </div>
    </motion.section>
  );
}
