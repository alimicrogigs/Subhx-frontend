"use client";
import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import DetailContainer from "../DetailContainer/DetailContainer";

export default function MainContainer() {
  const [currentSection, setcurrentSection] = useState("Profile");

  const handleSectionChange = (section: string) => {
    setcurrentSection(section);
  };

  return (
    <>
      <div className="relative sm:w-[70%] w-[100%] mx-auto sm:min-w-[900px] min-w-[0px]  flex mt-[50px] gap-[10px]">
        <Sidebar onSectionChange={handleSectionChange} />
        <DetailContainer currentSection={currentSection} />
      </div>
    </>
  );
}
