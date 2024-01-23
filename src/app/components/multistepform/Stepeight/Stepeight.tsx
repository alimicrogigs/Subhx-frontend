import React, { useState } from "react";

interface stepeightprops {
  active: boolean;
  onNextStep: () => void;
}

const Stepeight: React.FC<stepeightprops> = ({ active, onNextStep }) => {
  const gotohome = () => {
    onNextStep();
  };

  return (
    <div
      style={{ display: active ? "flex" : "none" }}
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
        <h1 className="text-[2rem] font-poppinsSemibold mt-[50px]">
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
  );
};
export default Stepeight;
