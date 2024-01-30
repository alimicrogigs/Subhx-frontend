import React, { useState } from "react";
import Profile from "./Profile/Profile";
import Accountsecurity from "./Accountsecurity/Accountsecurity";
import Currencypreferences from "./Currencypreferences/Currencypreferences";
import VerifyKYC from "./VerifyKYC/VerifyKYC";
import Paymentoption from "./Paymentoption/Paymentoption";
import APIkeygeneration from "./APIkeygeneration/APIkeygeneration";
import Changepassword from "./Changepassword/Changepassword";

interface DetailContainerProps {
  currentSection: string;
  isdetailcontainer: boolean;
}

<<<<<<< HEAD

const MainContainer: React.FC<DetailContainerProps> = ({ currentSection }) => {
=======
const MainContainer: React.FC<DetailContainerProps> = ({
  currentSection,
  isdetailcontainer,
}) => {
>>>>>>> 6c921e71a3731e66f029af4270e40b08845b4174
  return (
    <div
      className={`sm:pt-[0px] pt-[30px] sm:block flex-1  sm:relative absolute w-[100%] sm:bg-transparent bg-dashboardbgone sm:min-h-[0px] min-h-[100%] sm:top-0 top-[0px] ${
        isdetailcontainer ? "block" : "hidden"
      }`}
    >
      {currentSection == "Profile" && <Profile />}
      {currentSection == "Account-security" && <Accountsecurity />}
      {currentSection == "Currency-preference" && <Currencypreferences />}
      {currentSection == "verify-kyc" && <VerifyKYC />}
      {currentSection == "referal" && <>referal</>}
      {currentSection == "payment-option" && <Paymentoption />}
      {currentSection == "Api-key-manager" && <APIkeygeneration />}
      {currentSection == "change-password" && <Changepassword />}
    </div>
  )
};
export default MainContainer;
