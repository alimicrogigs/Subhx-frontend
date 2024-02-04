"use client"; // This is a client component 👈🏽

import React, {useState, useEffect } from "react";
import Dashboardnavbar from "../components/Dashboardnavbar/Dashboardnavbar";

interface DashboardProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardProps> = ({ children }) => {
  const [storedValue, setStoredValue] = useState();

    useEffect(() => {
      const isUserLoggedIn:any = localStorage.getItem('token');
      if (isUserLoggedIn) {
        setStoredValue(isUserLoggedIn);
      }
    }, []);
  return (
    <section className="w-[100vw] h-[100vh] sm:bg-black bg-[#041E27] ">

      <Dashboardnavbar />
      
      <div
        style={{ height: "calc(100vh - 80px )" }}
        className="w-[100%] flex items-center justify-center sm:flex-row flex-col"
      >
        {children}
      </div>
    </section>
  );
};

export default DashboardLayout;
