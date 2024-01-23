import React from "react";
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
  return (
    <section
      style={{
        backgroundImage: "url(/signup/signupbg.svg)",
      }}
      className="w-[100vw] h-[100vh] min-h-[600px] bg-center bg-cover flex justify-center items-center"
    >
      <div className={`${styles.border_to_design} w-[32%] h-[90%] `}>
        <Stepfive />
      </div>
    </section>
  );
}
