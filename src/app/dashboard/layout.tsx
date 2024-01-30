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
    <section
      style={{
        background: "black",
      }}
      className="w-[100vw] h-[100vh]"
    >

      <Dashboardnavbar />
      
      <div
        style={{ height: "100%" }}
        className="w-[100%]  flex"
      >
        {children}
      </div>
    </section>
  );
};

export default DashboardLayout;
