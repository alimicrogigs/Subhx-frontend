import React, { use } from "react";
import Coincard from "./Coincard/Coincard";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
export default function Fundshome() {
  const handledepositeBTC = (depositeBTCdetail: {
    amount: string | null;
    remark: string;
  }) => {
    // add logic hre

  };
  // get SOCKET_URL from env
  // const SOCKET_URL = process.env.SOCKET_URL;

  const [usdtBalance, setusdtBalance] = useState<number>(0);
  const [btcBalance, setbtcBalance] = useState<number>(0);
  const token = localStorage.getItem("token");
  useEffect(() => {
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
        console.log('32 USDT Balance:', jsonData.usdt_balance);
        setusdtBalance(jsonData.usdt_balance);
        setbtcBalance(jsonData.btc_balance);
      
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
    <div
      style={{}}
      className={`${styles.oddevencolor} sm:min-w-[900px] min-w-[100vw] w-[100%] `}
    >
      <div className="w-[100%]  flex justify-between bg-[#07303f] py-[5px] text-white sm:text-[.8rem] text-[.6rem] px-[20px]">
        <div className="sm:flex-1">Assets</div>
        <div className="sm:flex-1">Total Balance</div>
        <div className="sm:flex-1 text-left ">Today’s Gains</div>
        <div className="sm:flex-1 ">Current Portfolio </div>
        <div className="sm:flex-1 sm:block hidden"></div>
      </div>

      <Coincard
        coinname="USDT"
        coinQuantity={usdtBalance ? usdtBalance : 0}
        profitlosspercentage="+.007%"
        currentportfolio=" 1,32,00,000.00"
        liveprice="30,00,000.00"
        isbutton={true}
        profit={true}
        onAction={handledepositeBTC}
        // backgroundcolor="#07303f"
      />
      <Coincard
        coinname="BTC"
        coinQuantity={btcBalance ? btcBalance : 0}
        profitlosspercentage="+.007%"
        currentportfolio=" 1,32,00,000.00"
        liveprice="30,00,000.00"
        isbutton={true}
        profit={false}
        backgroundcolor="#07303f"
        onAction={handledepositeBTC}
      />
     
    </div>
  );
}
