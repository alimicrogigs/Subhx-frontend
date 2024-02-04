import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function page() {
  return (
    <section
      style={{
        backgroundImage: "url(/signup/signupbg.svg)",
      }}
      className="relative w-[100vw] h-[100vh] min-h-[700px] bg-center bg-cover flex justify-center items-center"
    >
      <Link href="/">
        <div
          style={{
            backgroundImage: "url(/signup/crossbutton.svg)",
          }}
          className="absolute w-[30px] h-[30px] bg-center bg-no-repeat bg-contain top-[50px] right-[50px]"
        ></div>
      </Link>
      {/* ... main start from here .... */}
      <div
        className={`${styles.border_to_design} sm:w-[32%] w-[95%] sm:h-[95%] h-[95%] `}
      >
        {/* ..... */}
        <div
          //   style={{ display: active ? "flex" : "none" }}
          className="w-[100%] h-[100%]  flex flex-col justify-center items-center text-white"
        >
          {/* ............. heading ............. */}

          <div
            style={{
              backgroundImage: "url(/signup/tick.svg)",
            }}
            className="w-[200px] h-[200px] bg-center bg-no-repeat bg-contain"
          ></div>

          <div>
            <h1 className="sm:text-signupheading text-signupheadingmobile font-poppinsSemibold mt-[50px] text-center">
              Congratulations!
            </h1>

            <p className="text-[.8rem] text-center mt-[20px]">
              Your KYC submission has been successfully
              <br /> received. Please note that the verification
              <br /> process may take between 24 to 48 hours <br />
              for completion.
            </p>
          </div>
          {/* ............. heading end ............. */}
          {/* ... */}
        </div>
      </div>
    </section>
  );
}
