import React from "react";
import Profile from "./Profile/Profile";
import Accountsecurity from "./Accountsecurity/Accountsecurity";
import Currencypreferences from "./Currencypreferences/Currencypreferences";
import VerifyKYC from "./VerifyKYC/VerifyKYC";
import Paymentoption from "./Paymentoption/Paymentoption";
import APIkeygeneration from "./APIkeygeneration/APIkeygeneration";

interface DetailContainerProps {
  currentSection: string;
}

const MainContainer: React.FC<DetailContainerProps> = ({ currentSection }) => {
  return (
    <div className="sm:block flex-1  sm:relative absolute w-[100%] hidden">
      {currentSection == "Profile" && <Profile />}
      {currentSection == "Account-security" && <Accountsecurity />}
      {currentSection == "Currency-preference" && <Currencypreferences />}
      {currentSection == "verify-kyc" && <VerifyKYC />}
      {currentSection == "referal" && <>referal</>}
      {currentSection == "payment-option" && <Paymentoption />}
      {currentSection == "Api-key-manager" && <APIkeygeneration />}
    </div>
  );
};
export default MainContainer;
