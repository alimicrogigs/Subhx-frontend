"use client";
import React, { useState } from "react";
import Card from "./Card/Card";

interface SidebarProps {
  onSectionChange: (section: string) => void;
  ismobilecontainer: (section: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  onSectionChange,
  ismobilecontainer,
}) => {
  const [currentActiveButton, setCurrentActiveButton] = useState("Profile");

  const handleCardClick = (title: string) => {
    setCurrentActiveButton(title);
    onSectionChange(title);
    ismobilecontainer(true);
  }
  
  return (
    <div className="sm:w-[38%] w-[90%]   sm:m-none mx-auto text-white">
      <h1 className="pb-[50px] text-[1.5rem] font- poppinsMedium">
        Account Settings
      </h1>
      <Card
        action={() => handleCardClick("Profile")}
        isActive={currentActiveButton == "Profile" ? true : false}
        title="PROFILE"
        logo="/dashboard/account-setting/sidebar/avatar.svg"
      />
      <Card
        action={() => handleCardClick("Account-security")}
        isActive={currentActiveButton == "Account-security" ? true : false}
        title="ACCOUNT SECURITY"
        logo="/dashboard/account-setting/sidebar/acountsetting.svg"
      />{" "}
      <Card
        action={() => handleCardClick("Currency-preference")}
        isActive={currentActiveButton == "Currency-preference" ? true : false}
        iconscale="1.1"
        title="CURRENCY PREFERENCE"
        logo="/dashboard/account-setting/sidebar/currency.svg"
      />{" "}
      <Card
        action={() => handleCardClick("verify-kyc")}
        isActive={currentActiveButton == "verify-kyc" ? true : false}
        title="VERIFY KYC"
        logo="/dashboard/account-setting/sidebar/verifykyc.svg"
      />{" "}

      <Card
        action={() => handleCardClick("referal")}
        isActive={currentActiveButton == "referal" ? true : false}
        iconscale="1.1"
        title="REFERRAL"
        logo="/dashboard/account-setting/sidebar/refereal.svg"
      />{" "}
      <Card
        action={() => handleCardClick("payment-option")}
        isActive={currentActiveButton == "payment-option" ? true : false}
        title="PAYMENT OPTIONS"
        logo="/dashboard/account-setting/sidebar/paymentopt.svg"
      />{" "}

      <Card
        action={() => handleCardClick("Api-key-manager")}
        isActive={currentActiveButton == "Api-key-manager" ? true : false}
        title="API KEY MANAGER"
        logo="/dashboard/account-setting/sidebar/api.svg"
      />
      {/* ... add two button not in admin ...... */}
      <Card
        action={() => handleCardClick("change-password")}
        isActive={currentActiveButton == "change-password" ? true : false}
        title="CHANGE PASSWORD"
        logo="/dashboard/account-setting/sidebar/paymentopt.svg"
      />{" "}

      <Card
        action={() => handleCardClick("")}
        isActive={currentActiveButton == "logout" ? true : false}
        title="LOGOUT"
        logo="/dashboard/account-setting/sidebar/api.svg"
      />
      
    </div>
  );
}
export default Sidebar;
