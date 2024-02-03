"use client"
// Import React and useState hook
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router';


// Import your components
import Wallet from "@/app/components/dashboard/funds/Wallet/Wallet";
import Depositefunds from "@/app/components/dashboard/funds/Depositefunds/Depositefunds";
import Fundshome from "@/app/components/dashboard/funds/Fundshome/Fundshome";
import tokenMiddleware from '../../../app/middleware/tokenMiddleware';
import { getUserDataRequest, getUserDataSuccess, getUserDataFailure } from "../../actions/depositeFundActions"
import Withrawlfunds from "@/app/components/dashboard/funds/Withrawlfunds/Withrawlfunds";
import Transferhistory from  "@/app/components/dashboard/funds/Transferhistory/Transferhistory";
import { getRequestAPIHelper } from "../../utils/lib/requestHelpers"
const dotenv = require('dotenv')
dotenv.config()
const apiUrl = process.env.API_URL;
import 'react-loading-skeleton/dist/skeleton.css'
interface FundsPageProps {}
// Define FundsPage component
const FundsPage: React.FC<FundsPageProps> = () => {
  const dispatch = useDispatch();
  // const { loading, upiAddress, error } = useSelector((state) => state.deposite)
  const [currentfundsstep, setCurrentfundsstep] = useState<string>("Portfolio");

  const [currentpopupactive, setCurrentpopupactive] = useState<string>("");

  const [userBalance, setUserBalance] = useState<string>('0.00');
  // const [userData, setUserData] = useState<object>({});
  // Handler to update current funds step
  const handleWalletAction = (action: string): void => {
    setCurrentfundsstep(action)
  }

  // Handler to update current popup active
  const handlePopupActive = (action: string): void => {
    { setCurrentpopupactive(action)}
  }
  
  // const router = useRouter();
  useEffect(() => {
    // Function to fetch user details from API
    const token = localStorage.getItem('token');


    const fetchUserData = async () => {
      const token = localStorage.getItem('token');

      try {
        dispatch(getUserDataRequest())
        // Make the API call to fetch user details
        const getUserDataResponse = await getRequestAPIHelper(apiUrl + 'user', token)
        console.log("line___57")
        console.log(getUserDataResponse.data.error)
        console.log(getUserDataResponse.error)
      // 196|$2y$10$gYHdRlPzMDTYJfAI8I4vX.oSZH5FtAFRrCy8L0C0aobdqyAwxGsIi747d31eb
        console.log(getUserDataResponse)
        dispatch(getUserDataSuccess(getUserDataResponse.data))
      } catch (err) {
        console.log('Error fetching user details:', err.response.data.error);
        if(err.response.data.error === "Unauthenticated."){
          console.log("Token does not exist. Redirecting to login page...")
          setTimeout(() => {
              window.location.href = '/login';
          }, 10)
        }
        dispatch(getUserDataFailure(err));
      }
    }
    // Call the fetchUserData function when the component mounts
    fetchUserData()
    return () => {
      // Any cleanup code if needed
    };
  }, [])

  const handledepositeinsdiecoin = () => {};
  return (
    <>
      {/* below condition is for if popup active scroll disable  */}
      <div
        style={{
          overflowY: `${
            currentpopupactive === "deposite" ||
            currentpopupactive === "withdraw"
              ? "hidden"
              : "scroll"
          }`,
        }}
        className="relative w-[99%] h-[98%] max-h-[98%] bg-[#041E27]  sm:rounded-[10px] rounded-[0px]"
      >
    <div className="relative w-[99%] h-[98%] max-h-[98%] bg-[#041E27] overflow-y-scroll rounded-[10px]">
        {/* first popup  */}
        {currentpopupactive === "deposite" && (
          <div
            style={{ backgroundColor: "rgba(4, 30, 39, .9)" }}
            className="absolute w-[100%] h-[100%]  top-0 right-0 z-[1000] overflow-x-scroll"
          >
            {/* this is back button */}
            <div
              style={{
                backgroundImage: "url(/signup/backarrow.svg)",
              }}
              className="fixed top-[100px] sm:left-[100px] left-[20px] w-[50px] h-[50px] bg-center bg-no-repeat bg-contain"
              onClick={() => setCurrentpopupactive("")}
            ></div>

            {/* this is back button  ........*/}
            <Depositefunds />
          </div>
        )}
        {/* second popup  */}
        {currentpopupactive === "withdraw" && (
          <div
            style={{ backgroundColor: "rgba(4, 30, 39, .9)" }}
            className="absolute w-[100%] h-[100%]  top-0 right-0 z-[1000] overflow-x-scroll"
          >
            {/* this is back button */}
            <div
              style={{
                backgroundImage: "url(/signup/backarrow.svg)",
              }}
              className="fixed top-[100px] sm:left-[100px] left-[20px] w-[50px] h-[50px] bg-center bg-no-repeat bg-contain"
              onClick={() => setCurrentpopupactive("")}
            ></div>
            {/* this is back button */}
            <Withrawlfunds />
          </div>
        )}
        {/* wallet start form here  */}
        {/* <Wallet
          onAction={handleWalletAction}
          popupactive={handlePopupActive}
          activebutton={currentfundsstep}
        /> */}

        {/* <div className="w-[100%] relative overflow-scroll">
          {currentfundsstep === "Portfolio" && <Fundshome />}
          {currentfundsstep === "transferhistory" && <Transferhistory />}
        </div> */}
     

      <Wallet
        onAction={handleWalletAction}
        popupactive={handlePopupActive}
        activebutton={currentfundsstep}
      /> 

      
      <div className="w-[100%] relative overflow-scroll">
        {currentfundsstep === "Portfolio" && <Fundshome />}
        {currentfundsstep === "transferhistory" && <Transferhistory />}

        <div className="w-[99%] h-[98%] max-h-[98%] bg-dashbgtrans ">
          {/* Wallet component */}
          {/* Render different components based on current step */}
          <div className="w-[100%] relative">
            {currentfundsstep === "home" && <Fundshome />}
            {currentfundsstep === "deposite" && <Depositefunds />}
            {currentfundsstep === "withdrawl" && <Withrawlfunds />}
          </div>
        </div>
      </div>
      {/* ...... fix footer start from here ........... */}
      <div className="sticky bottom-0 w-[100%] py-[20px] bg-[#07303F] sm:hidden block flex justify-evenly ">
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setCurrentpopupactive("withdraw")}
          className="relative sm:min-w-[200px] min-w-[0px] text-[1rem] text-center py-[5px] sm:px-[15px] px-[20px] rounded-[5px] bg-[#E65661] sm:block "
        >
          <div className="cut absolute top-0 right-0 w-[20px] h-[20px] sm:bg-[#041E27] bg-[#07303F] transform rotate-45 translate-x-[50%] translate-y-[-50%] "></div>
          WITHDRAW INR
        </div>

        <div
          style={{ cursor: "pointer" }}
          onClick={() => setCurrentpopupactive("deposite")}
          className="relative sm:min-w-[200px] min-w-[0px] text-[1rem] text-center py-[5px] sm:px-[15px] px-[30px] rounded-[5px] bg-[#5AD776] sm:block"
        >
          <div className="cut absolute top-0 right-0 w-[20px] h-[20px] sm:bg-[#041E27] bg-[#07303F] transform rotate-45 translate-x-[50%] translate-y-[-50%] "></div>
          DEPOSIT INR
        </div>
      </div>
      {/* ...... fix footer start from here ........... */}
    </>
  );
      

};

export default FundsPage; 
