"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import ToasterCustom from "../../../common/ToasterCustom/ToasterCustom";
import 'react-loading-skeleton/dist/skeleton.css'
import { getUpiAddressRequest, getUpiAddressSuccess, getUpiAddressFailure, getManualAccountFailure, getManualAccountRequest, getManualAccountSuccess, getUserVanFailure, getUserVanRequest, getUserVanSuccess } from "../../../../actions/depositeFundActions"
import { getRequestAPIHelper } from "../../../../utils/lib/requestHelpers"
// import CardSkeleton from "@/app/components/common/skeleton/depositSkeleton";
import 'react-loading-skeleton/dist/skeleton.css'

import { depositeFundFailure, depositeFundRequest, depositeFundSuccess } from "../../../../actions/depositeFundActions"
import { storeUserData } from "../../../../actions/storeUserDataAction";



interface WalletProps {
  onAction: (action: string) => void;
  popupactive: (action: string) => void;
  activebutton: string;
}


const apiUrl = process.env.API_URL;

// Define your custom toaster component
// const ToasterCustom = ({ type, message, loading }) => {
//   return (
//     <div className={`toaster toaster-${type}`}>
//       {loading ? <span>Loading...</span> : <span>{message}</span>}
//     </div>
//   );
// };


const Wallet: React.FC<WalletProps> = ({
  onAction,
  activebutton,
  popupactive,

}) => {
  const dispatch = useDispatch();
  const { loading, upiAddress, error } = useSelector((state:any) => state.deposite)
  console.log("upiAddressformredux___", upiAddress)
  // const [loading, setLoading] = useState(true);
  const [apiHitTime, setApiHitTime] = useState(null)


  let user_balance = `₹ 5,689.00`
  const [userBalance, setUserBalance] = useState<string>('0.00');

  const apiData = useSelector((state: any) => state.apiData);
  const token = localStorage.getItem("token");
  const handleWithdraw = () => {
    // Trigger withdraw action
    popupactive("withdraw")
  }
  const getUPIaddress = async () => {
    const token = localStorage.getItem("token");
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
    const token = localStorage.getItem("token");
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
    const token = localStorage.getItem("token");
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
    // Trigger deposit action
    const token = localStorage.getItem("token");
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
      }else{
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
  // useEffect(() => {
  //   // Simulate getting token from localStorage or cookie
  //   const token = localStorage.getItem('token');
  //   checkAuthorization(token);
  // }, []);
  return (
    <>
      <div className="flex justify-between  sm:py-[20px] py-[0px]  border-b border-b-[2px] border-b-[#00BFFF] text-white sm:text-[1.5rem] text-[1rem] sm:flex-row flex-col-reverse sm:gap-0 gap-[20px] ">
        {/* wallets balance  */}
        <div className="flex gap-[20px]  items-center sm:px-[20px] px-[0px] sm:justify-auto justify-center  sm:bg-transparent bg-[#07303F] sm:py-[0px] py-[10px]">
          <p>Wallet Balance</p>
          <p>₹ {userBalance}</p>
        </div>
        {/* withdrawl and deposite button  */}
        <div className="flex sm:gap-[20px] gap-[0px]  items-center sm:px-[20px] px-[5px] sm:pt-[0px] pt-[10px]">
          <div
            style={{
              cursor: "pointer",
              backgroundColor: `${activebutton == "Portfolio" ? "#07303F" : ""
                }`,
            }}
            onClick={handleHome}
            className="sm:min-w-[200px] min-w-[150px] text-[1rem] text-center py-[5px]  rounded-[5px] sm:border-[2px] sm:border-buttonborder"
          >
            PORTFOLIO
          </div>

          <div
            style={{
              cursor: "pointer",
              backgroundColor: `${activebutton == "transferhistory" ? "#07303F" : ""
                }`,
            }}
            onClick={handletransferhostory}
            className="sm:min-w-[200px] min-w-[180px] text-[1rem] text-center py-[5px] px-[15px] rounded-[5px] sm:border-[2px] sm:border-buttonborder"
          >
            TRANSFER HISTORY
          </div>
          {/* .... */}
          <div className="flex w-[100%] justify-center gap-[20px] sm:relative absolute bottom-0 sm:py-[0px] py-[30px] sm:px-[0px] px-[20px] max-w-[100vw] sm:bg-transparent bg-[#07303F] sm:z-[0] z-[1000]">
            <div
              style={{ cursor: "pointer" }}
              onClick={handleWithdraw}
              className="relative sm:min-w-[200px] min-w-[0px] text-[1rem] text-center py-[5px] sm:px-[15px] px-[20px] rounded-[5px] bg-[#E65661] sm:block "
            >
              <div className="cut absolute top-0 right-0 w-[20px] h-[20px] sm:bg-[#041E27] bg-[#07303F] transform rotate-45 translate-x-[50%] translate-y-[-50%] "></div>
              WITHDRAW INR
            </div>

            <div
              style={{ cursor: "pointer" }}
              onClick={handleDeposit}
              className="relative sm:min-w-[200px] min-w-[0px] text-[1rem] text-center py-[5px] sm:px-[15px] px-[30px] rounded-[5px] bg-[#5AD776] sm:block"
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
