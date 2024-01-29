import React from "react";
import Dashboardnavbar from "../components/Dashboardnavbar/Dashboardnavbar";

interface DashboardProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardProps> = ({ children }) => {
  return (
    <section
      style={{
        background: "black",
      }}
      className="w-[100vw] h-[100vh]"
    >
      {/* <Dashboardnavbar /> */}
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
