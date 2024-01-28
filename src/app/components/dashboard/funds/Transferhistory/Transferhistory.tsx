import React from "react";
import styles from "./page.module.css";
import Coincard from "../Fundshome/Coincard/Coincard";

export default function Fundshome() {
  const yourData = [
    {
      asset: "Bitcoin (BTC)",
      type: "Deposit",
      volume: "0.000266",
      status: "Deposit Failed",
      time: "23.10.2023 14:04:10",
    },
    {
      asset: "Ethereum (ETH)",
      type: "Withdraw",
      volume: "0.002345",
      status: "Completed",
      time: "23.10.2023 15:30:45",
    },
    {
      asset: "Litecoin (LTC)",
      type: "Deposit",
      volume: "0.001",
      status: "Pending",
      time: "24.10.2023 10:12:20",
    },
    {
      asset: "Ripple (XRP)",
      type: "Withdraw",
      volume: "50",
      status: "Completed",
      time: "24.10.2023 12:45:00",
    },
    {
      asset: "Cardano (ADA)",
      type: "Deposit",
      volume: "100",
      status: "Failed",
      time: "25.10.2023 09:22:30",
    },
    {
      asset: "Polkadot (DOT)",
      type: "Withdraw",
      volume: "10",
      status: "Completed",
      time: "25.10.2023 14:55:18",
    },
    {
      asset: "Chainlink (LINK)",
      type: "Deposit",
      volume: "2",
      status: "Pending",
      time: "26.10.2023 08:03:05",
    },
    {
      asset: "Stellar (XLM)",
      type: "Withdraw",
      volume: "25",
      status: "Completed",
      time: "26.10.2023 16:20:30",
    },
    {
      asset: "VeChain (VET)",
      type: "Deposit",
      volume: "500",
      status: "Completed",
      time: "27.10.2023 11:10:15",
    },
    {
      asset: "Bitcoin Cash (BCH)",
      type: "Withdraw",
      volume: "5",
      status: "Failed",
      time: "27.10.2023 13:40:22",
    },
    // Add more data objects as needed
  ];

  return (
    <div style={{}} className={`${styles.oddevencolor} min-w-[900px] w-[100%]`}>
      <table className={`${styles.table} w-[100%]  text-white`}>
        <thead className="ml-[20px] bg-[#07303F]">
          <tr className="bg-[#07303F] text-[.8rem] ">
            <th className="px-[20px] py-[5px]">Assets</th>
            <th className="px-[20px] py-[5px]">Type</th>
            <th className="px-[20px] py-[5px] text-center">Volume</th>
            <th className="px-[20px] py-[5px] text-right">Status</th>
            <th className="px-[20px] py-[5px] text-right">Time</th>
          </tr>
        </thead>
        <tbody>
          {/* data to be map here */}
          {yourData.map((item, index) => (
            <tr key={index} className="py-[20px]">
              <td className="px-[20px] py-[10px]">{item.asset}</td>
              <td
                style={{
                  color: `${item.type == "Deposit" ? "#5AD776" : "#E65661"}`,
                }}
                className="px-[20px] py-[10px]"
              >
                {item.type}
              </td>
              <td className="px-[20px] py-[20px] text-center">{item.volume}</td>
              <td className="px-[20px] py-[20px] text-right">{item.status}</td>
              <td className="px-[20px] py-[20px] text-right">{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
