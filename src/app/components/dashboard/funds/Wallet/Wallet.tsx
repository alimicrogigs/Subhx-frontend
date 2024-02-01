"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import ToasterCustom from "../../../common/ToasterCustom/ToasterCustom";
import { depositeFundFailure, depositeFundRequest, depositeFundSuccess } from "../../../../actions/depositeFundActions"
import { storeUserData } from "../../../../actions/storeUserDataAction";
import { getRequestAPIHelper } from "../../../../utils/lib/requestHelpers"


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
  const [loading, setLoading] = useState(true);
  const [userBalance, setUserBalance] = useState<string>('0.00');
  const dispatch = useDispatch();
  const apiData = useSelector((state: any) => state.apiData);
  const token = localStorage.getItem("token");
  const handleWithdraw = () => {
    // Trigger withdraw action
    popupactive("withdraw")
  };

  const handleDeposit = async () => {
    // Trigger deposit action

    popupactive("deposite");
    try {
      // Set loading state before API call
      setLoading(true);
      // Fetch user data
      const getUserResponse = await getRequestAPIHelper(apiUrl + 'user', token);
      if (getUserResponse.success === true) {
        //save user data in redux
        console.log(getUserResponse, "line___53_")
        dispatch(storeUserData(getUserResponse));        
        console.log(getUserResponse.data.kyc_verification, "line___48_");
      }

      if (getUserResponse.success === true && getUserResponse.data.kyc_verification === "approved") {
        const getUserData = getUserResponse.data;

        // Set loading state before API call
        setLoading(true);

        // Fetch UPI address
        const upiAddressResponse = await getRequestAPIHelper(apiUrl + 'upi-address', token);
        if (upiAddressResponse.status === 200) {
          const upiAddressData = upiAddressResponse.data;
          console.log("UPI Address Data:", upiAddressData);
          // Perform actions based on upiAddressData if needed
        }

        // Set loading state before API call
        setLoading(true);

        // Fetch manual account
        const manualAccountResponse = await getRequestAPIHelper(apiUrl + 'manul-account', token);
        if (manualAccountResponse.status === 200) {
          const manualAccountData = manualAccountResponse.data;
          console.log("Manual Account Data:", manualAccountData);
          // Perform actions based on manualAccountData if needed
        }

        // Set loading state before API call
        setLoading(true);

        // Fetch user van
        const userVanResponse = await getRequestAPIHelper(apiUrl + 'get-user-van', token);
        if (userVanResponse.status === 200) {
          const userVanData = userVanResponse.data;
          console.log("User Van Data:", userVanData);
          // Perform actions based on userVanData if needed
        }

        // Trigger deposit popup
        popupactive("deposite");
      }

    } catch (error) {
      console.error('Error fetching user data:', error);
      // toast.custom(
      // <ToasterForWallet type="error" message="KYC is Pending, Deposit details will not open !!! " loading="" />,
      // {
      //   position: "top-right",
      //   duration: 1000,
      // }
      // );
      // return;
    } finally {
      // Set loading state to false after all API calls are complete
      setLoading(false);
    }
  }

  const fetchData = async () => {

    const getUserResponse = await getRequestAPIHelper(apiUrl + 'user', token);
    console.log('27', getUserResponse);
    if (getUserResponse.success === true) {
      console.log("line___112_", getUserResponse.data)
      dispatch(storeUserData( getUserResponse.data));
    }

    console.log(apiData, "apiData");
  };

  useEffect(() => {
    fetchData();

    const socketUrl = `ws://stream.bit24hr.in:8765/get_user_balance`;

    const socket = new WebSocket(socketUrl);

    socket.onopen = () => {
      console.log("WebSocket connection Get_user_balance");
      socket.send(JSON.stringify({ 'x-auth-token': token }));

    };

    socket.onmessage = (event) => {
      console.log("WebSocket message received:", event.data);
      if (event.data !== 'null') {
        const jsonData = JSON.parse(event.data);
        const inrBalance = jsonData.inr_balance;
        console.log('INR Balance:', inrBalance);
        console.log('USDT Balance:', jsonData.usdt_balance);
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

  const handleHome = () => {
    onAction("Portfolio");
  }
  const handletransferhostory = () => {
    onAction("transferhistory");
  }
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
