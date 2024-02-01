"use client";
import React, {useEffect, useState } from "react";
import { getRequestAPIHelper } from "@/app/utils/lib/requestHelpers";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { storeUserData } from "@/app/actions/storeUserDataAction";

const apiUrl = process.env.API_URL;
export default function Withrawlfunds() {
  const [userBalance, setUserBalance] = useState<string>('0.00');
  const [freezeamount, setFreezeamount] = useState(0);
  const [withdrawlamount, setWithdrawlamount] = useState(0);
  const token = localStorage.getItem("token");

  useEffect(() => {    
   
      const socketUrl = `ws://stream.bit24hr.in:8765/get_user_balance`;
      const socket = new WebSocket(socketUrl);  
      socket.onopen = () => {
        console.log("WebSocket connection get_user_balance");
        socket.send(JSON.stringify({ 'x-auth-token': token }));
      };

      socket.onmessage = (event) => {
        const jsonData = JSON.parse(event.data);
        const inrBalance = jsonData.inr_balance;
        console.log('INR Balance:', inrBalance);
        setUserBalance(inrBalance);
      };

      socket.onclose = (event) => {
        console.log("WebSocket connection closed:", event);
      };
      return () => {
        socket.close();
      };
    
    
  }, []);
   

    
  const handlewithdrawal = () => {
    console.log({ withdrawlamount });
  };
  
  return (
    <>
      <section className="w-[100%]">
        <div className="sm:w-[45%] sm:min-w-[600px] w-[95%] min-w-[0px] m-auto bg-[#041E27]  sm:px-[30px] px-[10px] text-white pb-[80px]">
          <h1 className="pt-[20px] text-white font-poppinsSemibold sm:text-[1.6rem] text-[1rem] sm:mt-[0px] mt-[60px]">
            Withdraw INR to Bank
          </h1>

          {/* forst card start from here  */}
          <div className="bg-[#07303F] mt-[30px] font-poppinsSemibold pt-[30px] px-[30px] sm:text-[1.5rem] text-[1rem] pb-[30px] rounded-[10px]">
            <h1>
              {" "}
              <span className="mr-[20px] ">₹</span>INR Wallet Balance
            </h1>

            <ul className="w-[100%] text-[1rem] mt-[30px] font-poppinsRegular flex justify-between pr-[25%]">
              {/* .... */}
              <div>
                <li className="flex ">
                  <p>Available</p>
                </li>
                {/* ........ */}
                <li className="flex  ">
                  <p>Locked</p>
                </li>
                {/* ......... */}
                <li className="flex ">
                  <p>Total</p>
                </li>
              </div>
              {/* .......... */}

              <div>
                <li className="flex ">
                  <p>₹ {userBalance}</p>
                </li>
                {/* ........ */}
                <li className="flex  ">
                  <p>₹ 244.00</p>
                </li>
                {/* ......... */}
                <li className="flex ">
                  <p>₹ 5,764.00</p>
                </li>
              </div>

              {/* ....... */}
            </ul>
          </div>
          {/* end at here first card  */}

          {/* forst card start from here  */}
          <div className="bg-[#07303F] mt-[30px] font-poppinsSemibold pt-[30px] px-[30px] sm:text-[1.5rem] text-[1rem] pb-[30px] rounded-[10px]">
            <h1>
              {" "}
              <span className="mr-[20px] ">₹</span>Your bank accounts details :
            </h1>

            <ul className="w-[100%] text-[1rem] mt-[30px] font-poppinsRegular flex justify-between pr-[15%]">
              {/* .... */}
              <div>
                <li className="flex ">
                  <p>Beneficiary Name</p>
                </li>
                {/* ........ */}
                <li className="flex  ">
                  <p>Account Number</p>
                </li>
                {/* ......... */}
                <li className="flex ">
                  <p>IFSC</p>
                </li>
              </div>
              {/* .......... */}

              <div>
                <li className="flex ">
                  <p>Jason Jones</p>
                </li>
                {/* ........ */}
                <li className="flex  ">
                  <p>12545698555465</p>
                </li>
                {/* ......... */}
                <li className="flex ">
                  <p>SBIN002365</p>
                </li>
              </div>

              {/* ....... */}
            </ul>
          </div>
          {/* end at here first card  */}
          {/* ............. */}
          <h1 className="mt-[20px] sm:text-[1.5rem] text-[1rem] sm:pl-[30px] pl-[10px]">
            Withdraw Amount
          </h1>
          <input
            className="focus:border-none focus:outline-none sm:ml-[30px] ml-[10px] py-[10px] pl-[20px] w-[90%] bg-[#0C4E66] rounded-[5px] mt-[20px]"
            type="number"
            name="Amount"
            id="Amount"
            placeholder="₹ 2,000.00"
            value={withdrawlamount}
            onChange={(e) => setWithdrawlamount(Number(e.target.value))}
          />
          {/* ........... */}
          <div
            onClick={handlewithdrawal}
            style={{
              backgroundImage: "url(/dashboard/funds/redbutton.svg)",
            }}
            className="bg-center bg-contain bg-no-repeat text-center  sm:ml-[30px] ml-[0px] sm:mr-[30px] mr-[0px] sm:mt-[50px] mt-[10px] py-[20px]"
          >
            Withdraw
          </div>
        </div>
      </section>
    </>
  );
}
