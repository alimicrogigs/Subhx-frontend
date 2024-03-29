"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector  } from "react-redux";
import {depositeFundFailure, depositeFundRequest , depositeFundSuccess} from "../../../../actions/depositeFundActions"
import {getRequestAPIHelper} from "../../../../utils/lib/requestHelpers"

const dotenv = require('dotenv')
dotenv.config();
const apiUrl = process.env.API_URL;


const Wallet = ({
  onAction,
  activebutton,
  popupactive,

}) => {
  const dispatch = useDispatch();
  let user_balance = ₹ 5,689.00;
  const handleWithdraw = () => {
    // Trigger withdraw action
    popupactive("withdraw");
  };
  
  const handleDeposit =async () => {
    // Trigger deposit action
    try {
      const token = localStorage.getItem("token")
      dispatch(depositeFundRequest())

      const upiAddress = await getRequestAPIHelper(apiUrl + 'upi-address',token)

      if(upiAddress.data.success === true ){
        dispatch(depositeFundSuccess(upiAddress.data.data));
      }
      if(upiAddress.status === 200 ){
        popupactive("deposite");
        var upiID = upiAddress.data.data.upi_id;        
      }
    }catch (error) {
      console.error('Error UPI not generated:', error);
      // toast.error("Error fetching PAN details");
      dispatch(depositeFundFailure(error));
    }
  }

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
          <p>{user_balance}</p>
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
          <div className="flex w-[100%] justify-center gap-[20px] sm:relative absolute bottom-0 sm:py-[0px] py-[30px] sm:px-[0px] px-[20px] max-w-[100vw] sm:bg-transparent bg-[#07303F]">
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