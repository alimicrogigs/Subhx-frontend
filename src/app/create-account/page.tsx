"use client";
import React, { useState } from "react";
import Stepone from "../components/multistepform/Stepone/Stepone";
import Steptwo from "../components/multistepform/Steptwo/Steptwo";
import Stepthree from "../components/multistepform/Stepthree/Stepthree";
import Stepfour from "../components/multistepform/Stepfour/Stepfour";
import Stepfive from "../components/multistepform/Stepfive/Stepfive";
import Stepsix from "../components/multistepform/Stepsix/Stepsix";
import Stepseven from "../components/multistepform/Stepseven/Stepseven";
import Stepeight from "../components/multistepform/Stepeight/Stepeight";
import styles from "./page.module.css";
export default function page() {
  const [currentstep, setcurrentstep] = useState(1);
  const handleNextStep = () => {
    // Update the current step to move to the next one
    setcurrentstep((prevStep) => prevStep + 1);
  };
  return (
    <section
      style={{
        backgroundImage: "url(/signup/signupbg.svg)",
      }}
      className="w-[100vw] h-[100vh] min-h-[600px] bg-center bg-cover flex justify-center items-center"
    >
      <div className={`${styles.border_to_design} w-[32%] h-[90%] `}>
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
        <Stepfive
          onNextStep={handleNextStep}
          active={currentstep == 5 ? true : false}
        />
        <Stepsix
          onNextStep={handleNextStep}
          active={currentstep == 6 ? true : false}
        />
        <Stepseven
          onNextStep={handleNextStep}
          active={currentstep == 7 ? true : false}
        />
        <Stepeight
          onNextStep={handleNextStep}
          active={currentstep == 8 ? true : false}
        />
      </div>
    </section>
  );
}
