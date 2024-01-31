"use client"
// Import React and useState hook
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Import your components
import Wallet from "@/app/components/dashboard/funds/Wallet/Wallet";
import Depositefunds from "@/app/components/dashboard/funds/Depositefunds/Depositefunds";
import Fundshome from "@/app/components/dashboard/funds/Fundshome/Fundshome";
import { getUserDataRequest, getUserDataSuccess, getUserDataFailure } from "../../actions/depositeFundActions"
import Withrawlfunds from "@/app/components/dashboard/funds/Withrawlfunds/Withrawlfunds";
import Transferhistory from "@/app/components/dashboard/funds/Transferhistory/Transferhistory";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { getRequestAPIHelper } from "../../utils/lib/requestHelpers"
const dotenv = require('dotenv')
dotenv.config();
const apiUrl = process.env.API_URL;
import 'react-loading-skeleton/dist/skeleton.css'

// Define Props interface
interface FundsPageProps {}



// Define FundsPage component
const FundsPage: React.FC<FundsPageProps> = () => {
  const dispatch = useDispatch();
  // const { loading, upiAddress, error } = useSelector((state) => state.deposite)
  const [currentfundsstep, setCurrentfundsstep] = useState<string>("Portfolio");
  const [currentpopupactive, setCurrentpopupactive] = useState<string>("");
  // const [userData, setUserData] = useState<object>({});
  // Handler to update current funds step
  const handleWalletAction = (action: string): void => {
    setCurrentfundsstep(action)
  }

  // Handler to update current popup active
  const handlePopupActive = (action: string): void => {
    { setCurrentpopupactive(action)}
  }
  
  useEffect(() => {
    // Function to fetch user details from API
    const fetchUserData = async () => {
      const token = localStorage.getItem('token')

      try {
        dispatch(getUserDataRequest())
        // Make the API call to fetch user details
        const getUserDataResponse = await getRequestAPIHelper(apiUrl + 'user', token)
        console.log(getUserDataResponse);
        dispatch(getUserDataSuccess(getUserDataResponse.data))

      } catch (error) {
        console.error('Error fetching user details:', error);
        dispatch(getUserDataFailure(error));
      }
    }

    // Call the fetchUserData function when the component mounts
    fetchUserData();

    // Clean up function (optional)
    return () => {
      // Any cleanup code if needed
    };
  }, [])


  return (
    <div className="relative w-[99%] h-[98%] max-h-[98%] bg-[#041E27] overflow-y-scroll rounded-[10px]">
      {/* Render deposit popup if active */}
      {currentpopupactive === "deposite" && (
        <div
          style={{ backgroundColor: "rgba(4, 30, 39, .9)" }}
          className="absolute w-[100%] h-[100%]  top-0 right-0 z-[1000] overflow-x-scroll"
        >
          {/* Back button */}
          <div
            style={{
              backgroundImage: "url(/signup/backarrow.svg)",
            }}
            className="fixed top-[100px] sm:left-[100px] left-[20px] w-[50px] h-[50px] bg-center bg-no-repeat bg-contain"
            onClick={() => setCurrentpopupactive("")}
          ></div>
          <Depositefunds />
        </div>
      )}

      {/* Render withdraw popup if active */}
      {currentpopupactive === "withdraw" && (
        <div
          style={{ backgroundColor: "rgba(4, 30, 39, .9)" }}
          className="absolute w-[100%] h-[100%]  top-0 right-0 z-[1000] overflow-x-scroll"
        >
          {/* Back button */}
          <div
            style={{
              backgroundImage: "url(/signup/backarrow.svg)",
            }}
            className="fixed top-[100px] sm:left-[100px] left-[20px] w-[50px] h-[50px] bg-center bg-no-repeat bg-contain"
            onClick={() => setCurrentpopupactive("")}
          ></div>
          <Withrawlfunds />
        </div>
      )}

      {/* Render main wallet component */}
      <Wallet
        onAction={handleWalletAction}
        popupactive={handlePopupActive}
        activebutton={currentfundsstep}
      />

      {/* Render main content */}
      <div className="w-[100%] relative overflow-scroll">
        {currentfundsstep === "Portfolio" && <Fundshome />}
        {currentfundsstep === "transferhistory" && <Transferhistory />}

        <div className="w-[99%] h-[98%] max-h-[98%] bg-dashbgtrans overflow-x-scroll">
          {/* Wallet component */}
          {/* Render different components based on current step */}
          <div className="w-[100%] relative">
            {currentfundsstep === "home" && <Fundshome />}
            {currentfundsstep === "deposite" && <Depositefunds />}
            {currentfundsstep === "withdrawl" && <Withrawlfunds />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundsPage; // Export FundsPage as default
