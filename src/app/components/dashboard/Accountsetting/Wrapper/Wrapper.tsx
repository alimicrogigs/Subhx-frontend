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
      <div className="w-[70%] mx-auto min-w-[900px]  flex mt-[50px] gap-[10px]">
        <Sidebar onSectionChange={handleSectionChange} />
        <DetailContainer currentSection={currentSection} />
      </div>
    </>
  );
}
