import React from "react";
import Stepone from "../components/multistepform/Stepone/Stepone";
import Steptwo from "../components/multistepform/Steptwo/Steptwo";
import styles from "./page.module.css";
export default function page() {
  return (
    <section
      style={{
        backgroundImage: "url(/signup/signupbg.svg)",
      }}
      className="w-[100vw] h-[100vh] bg-center bg-cover flex justify-center items-center"
    >
      <div className={`${styles.border_to_design} w-[32%] h-[90%] `}>
        <Steptwo />
      </div>
    </section>
  );
}
