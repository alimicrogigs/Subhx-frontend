import React from "react";
import Dashboardnavbar from "../components/Dashboardnavbar/Dashboardnavbar";

interface DashboardProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardProps> = ({ children }) => {
  return (
    <section
      style={{
        backgroundImage: "url(/dashboard/bg.svg)",
      }}
      className="w-[100vw] h-[100vh] bg-center bg-cover bg-no-repeat"
    >
      <Dashboardnavbar />
      <div
        style={{ height: "calc(100vh - 60px )" }}
        className="w-[100%] flex items-center justify-center "
      >
        {children}
      </div>
    </section>
  );
};

export default DashboardLayout;
