"use client";
import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import DetailContainer from "../DetailContainer/DetailContainer";

export default function MainContainer() {
  const [currentSection, setcurrentSection] = useState("Profile");
  const [isdetailcontainer, setIsdetailcontainer] = useState(false);

  const handleisdetailcontainer = (command: boolean) => {
    setIsdetailcontainer(command);
  };

  const handleSectionChange = (section: string) => {
    setcurrentSection(section);
  };

  return (
    <>
      <div className="relative sm:w-[70%] w-[100%] mx-auto sm:min-w-[900px] min-w-[0px]  flex mt-[50px] gap-[10px] sm:min-h-[0%] min-h-[100%]">
        {isdetailcontainer && (
          <div
            style={{
              // display: `${isdetailcontainer ? "block" : "none"}`,
              backgroundImage: "url(/signup/backarrow.svg)",
            }}
            onClick={() => setIsdetailcontainer(false)}
            className="mobile cut absolute text-red-500 top-[-6%] left-[10px]  w-[30px] h-[30px] left-0 z-[1000] bg-center bg-no-repeat bg-contain block sm:hidden block"
          ></div>
        )}
        <Sidebar
          onSectionChange={handleSectionChange}
          ismobilecontainer={handleisdetailcontainer}
        />
        <DetailContainer
          currentSection={currentSection}
          isdetailcontainer={isdetailcontainer}
        />
      </div>
    </>
  );
}
