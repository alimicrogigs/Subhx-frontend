"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import ToasterCustom from "../../../common/ToasterCustom/ToasterCustom";
import 'react-loading-skeleton/dist/skeleton.css'
import { getUpiAddressRequest, getUpiAddressSuccess, getUpiAddressFailure, getManualAccountFailure, getManualAccountRequest, getManualAccountSuccess, getUserVanFailure, getUserVanRequest, getUserVanSuccess } from "../../../../actions/depositeFundActions"
import { getRequestAPIHelper } from "../../../../utils/lib/requestHelpers"
import 'react-loading-skeleton/dist/skeleton.css'
import { depositeFundFailure, depositeFundRequest, depositeFundSuccess } from "../../../../actions/depositeFundActions"
import { storeUserData } from "../../../../actions/storeUserDataAction";


import styles from "./page.module.css";
interface WalletProps {
  onAction: (action: string) => void;
  popupactive: (action: string) => void;
  activebutton: string;
}

const apiUrl = process.env.API_URL;

const Wallet: React.FC<WalletProps> = ({
  onAction,
  activebutton,
  popupactive,

}) => {
  const dispatch = useDispatch();
  const { loading, upiAddress, error } = useSelector((state: any) => state.deposite)
  console.log("upiAddressformredux___", upiAddress)
  // const [loading, setLoading] = useState(true);
  const [apiHitTime, setApiHitTime] = useState(null)


  const [userBalance, setUserBalance] = useState<string>('0.00');

  const apiData = useSelector((state: any) => state.apiData);
  var token = localStorage.getItem("token");
  const handleWithdraw = () => {
    popupactive("withdraw")
  }
  const getUPIaddress = async () => {
    try {
      dispatch(getUpiAddressRequest())
      // Fetch UPI address
      const upiAddressResponse = await getRequestAPIHelper(apiUrl + 'upi-address', token);
      if (upiAddressResponse.status === 200) {
        const upiAddressData = upiAddressResponse.data;
        console.log("UPI Address Data:", upiAddressData);
        dispatch(getUpiAddressSuccess(upiAddressResponse.data))
        // Perform actions based on upiAddressData if needed
      }
    } catch (error) {
      console.error('Error fetching UPI address:', error);
      dispatch(getUpiAddressFailure(error));
    }
  }
  const getManaualAccount = async () => {
   
    try {
      dispatch(getManualAccountRequest())
      // Fetch UPI address
      const manualAccountResponse = await getRequestAPIHelper(apiUrl + 'manul-account', token);
      if (manualAccountResponse.status === 200) {
        dispatch(getManualAccountSuccess(manualAccountResponse.data))
        // Perform actions based on upiAddressData if needed
      }
    } catch (error) {
      console.error('Error fetching manual account:', error);
      dispatch(getManualAccountFailure(error));
    }
  }

  const getVanUser = async () => {
  
    try {
      dispatch(getUserVanRequest())
      // Fetch UPI address
      const vanUserResponse = await getRequestAPIHelper(apiUrl + 'get-user-van', token);
      if (vanUserResponse.status === 200) {
        dispatch(getUserVanSuccess(vanUserResponse.data))
        // Perform actions based on upiAddressData if needed
      }
    } catch (error) {
      console.error('Error fetching VAN USER account:', error);
      dispatch(getUserVanFailure(error));
    }
  }

  const handleDeposit = async () => {

    try {
      // Fetch UPI address
      const getUserResponse = await getRequestAPIHelper(apiUrl + 'user', token)
      // setLoading(true);
      console.log(getUserResponse.data.kyc_verification)
      if (getUserResponse.status === 200 && getUserResponse.data.kyc_verification === "approved") {
        const getUserData = getUserResponse.data;
        console.log("UPI Address Data:", getUserData)
        // Perform actions based on upiAddressData if needed
        getUPIaddress();
        getManaualAccount();
        getVanUser();
      } else {
        toast.custom(
          <ToasterCustom type="error" message="KYC is Pending , Desposite details will not open !!! " />,
          {
            position: "top-right",
            duration: 1000,
          }
        )
        return;
      }
    }
    catch (error) {
      console.error('Error fetching UPI address:', error);
      toast.custom(
        <ToasterCustom type="error" message="KYC is Pending , Desposite details will not open !!! " />,
        {
          position: "top-right",
          duration: 1000,
        }
      )
      return;
    }

  };

  const handleHome = () => {
    onAction("Portfolio");
  }
  const handletransferhostory = () => {
    onAction("transferhistory");
  }
    useEffect(() => {     
      var token = localStorage.getItem("token");
          const socketUrl = `ws://stream.bit24hr.in:8765/get_user_balance`;
          const socket = new WebSocket(socketUrl);  
          socket.onopen = () => {
            console.log("WebSocket connection get_user_balance");
            socket.send(JSON.stringify({ 'x-auth-token': token }));
          };

          socket.onmessage = (event) => {
            console.log("WebSocket data received:", event.data);
            // add consition to check if the event.data not null
             if(event.data !== null){
              const jsonData = JSON.parse(event.data);
              const inrBalance = jsonData?.inr_balance;
              console.log('INR Balance:', inrBalance);
              setUserBalance(inrBalance);
             }                     
          };

          socket.onclose = (event) => {
            console.log("WebSocket connection closed:", event);
          };
          return () => {
            socket.close();
          };  
        
      }, []);
  return (
    <>
      <div className="flex justify-between  sm:py-[25px] py-[0px]  border-b border-b-[2px] border-b-[#00BFFF] text-white sm:text-[1.5rem] text-[1rem] sm:flex-row flex-col-reverse sm:gap-0 gap-[0px] ">
        {/* wallets balance  */}
        <div className="flex gap-[20px]   sm:px-[20px] px-[20px] sm:justify-auto   sm:bg-transparent bg-[#07303F] sm:py-[0px] py-[20px] ">
          <p className="flex items-center">Wallet Balance</p>
          <p className="flex items-center">₹ {userBalance} </p>
        </div>
        {/* withdrawl and deposite button  */}
        <div className="flex sm:gap-[20px] gap-[0px]  items-center sm:px-[20px] px-[0px] sm:pt-[0px] sm:pt-[10px] pt-[0px] sm:justify-auto justify-between">
          <div
            style={{
              cursor: "pointer",
              backgroundColor: `${activebutton == "Portfolio" ? "#07303F" : ""
                }`,
              borderBottom: `${
                activebutton == "Portfolio" ? "5px solid #829CA5" : ""
              }`,
            }}
            onClick={handleHome}
            className={`${styles.walletheading} flex-1 sm:min-w-[200px] min-w-[150px] text-[1rem] text-center sm:py-[5px] py-[15px]  sm:rounded-[5px] rounded-[0px] sm:border-[2px] sm:border-buttonborder`}
          >
            PORTFOLIO
          </div>

          <div
            style={{
              cursor: "pointer",
              backgroundColor: `${activebutton == "transferhistory" ? "#07303F" : ""
                }`,
              borderBottom: `${
                activebutton == "transferhistory" ? "5px solid #829CA5" : ""
              }`,
            }}
            onClick={handletransferhostory}
            className={`${styles.walletheading} flex-1 sm:min-w-[200px]  min-w-[180px] text-[1rem] text-center sm:py-[5px] py-[15px] px-[15px] sm:rounded-[5px] rounded-[0px] sm:border-[2px] sm:border-buttonborder`}
          >
            TRANSFER HISTORY
          </div>
          {/* .... */}
          <div className="sm:flex hidden w-[100%] justify-center gap-[20px] sm:relative bottom-0 sm:py-[0px] py-[30px] sm:px-[0px] px-[20px] max-w-[100vw] sm:bg-transparent bg-[#07303F] sm:z-[0] z-[1000]">
            <div
              style={{ cursor: "pointer" }}
              onClick={handleWithdraw}
              className="relative sm:min-w-[160px] min-w-[0px] text-[1rem] text-center py-[5px] sm:px-[15px] px-[20px] rounded-[5px] bg-[#E65661] sm:block "
            >
              <div className="cut absolute top-0 right-0 w-[20px] h-[20px] sm:bg-[#041E27] bg-[#07303F] transform rotate-45 translate-x-[50%] translate-y-[-50%] "></div>
              WITHDRAW INR
            </div>

            <div
              style={{ cursor: "pointer" }}
              onClick={handleDeposit}
              className="relative sm:min-w-[160px] min-w-[0px] text-[1rem] text-center py-[5px] sm:px-[15px] px-[30px] rounded-[5px] bg-[#5AD776] sm:block"
            >
              <div className="cut absolute top-0 right-0 w-[20px] h-[20px] sm:bg-[#041E27] bg-[#07303F] transform rotate-45 translate-x-[50%] translate-y-[-50%] "></div>
              DEPOSIT INR
            </div>
          </div>
          {/* .......... */}

          {/* <div
          onClick={handleWithdraw}
          style={{
            backgroundImage: `url(/dashboard/funds/${
              activebutton == "withdrawl" ? "buttonbg" : "buttonborder"
            }.svg)`,
          }}
          className="bg-center bg-no-repeat bg-contain px-[30px] py-[10px]"
        >

        Withdraw

        Withdraw
        </div> */}

          {/* <div
          onClick={handleWithdraw}
          style={{
            backgroundImage: `url(/dashboard/funds/${
              activebutton == "deposite" ? "buttonbg" : "buttonborder"
            }.svg)`,
          }}
          className="bg-center bg-no-repeat bg-contain px-[40px] py-[10px]"
        >
          Deposit
        </div> */}
          {/* ... */}
        </div>
      </div>
    </>
  );
};

export default Wallet;

function dispatch(arg0: { type: string; payload: any; }) {
  throw new Error("Function not implemented.");
}
