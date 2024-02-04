import React, { useState } from "react";
import styles from "./page.module.css";
import Modal from "react-bootstrap/Modal";
import Coincard from "../Fundshome/Coincard/Coincard";
import { MdOutlineUnfoldMore } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Fundshome() {
  const [show, setShow] = useState(false);
  const [currentpopupindex, setcurrentpopupindex] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlepopupwithdata = (index: number) => {
    setcurrentpopupindex(index);
    handleShow();
  };

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
    <>
      <div
        style={{}}
        className={`${styles.oddevencolor} sm:min-w-[900px] w-[100%]`}
      >
        {/* ...... desktop table ......... */}
        <table className={`${styles.table} w-[100%]  text-white `}>
          <thead className="ml-[20px] bg-[#07303F]">
            <tr className="bg-[#07303F] text-[.8rem] relative">
              <th className="px-[20px] py-[5px]">ASSETS</th>
              <th className="px-[20px] py-[5px]">TYPE</th>
              <th className="px-[20px] py-[5px] text-center">VOLUME</th>
              <th className="hidden sm:table-cell px-[20px] py-[5px] text-right">
                RRN NUMBER
              </th>
              <th className="hidden sm:table-cell px-[20px] py-[5px] text-right">
                STATUS
              </th>
              <th className="hidden sm:table-cell px-[20px] py-[5px] text-right">
                TIME
              </th>
              <th className="table-cell sm:hidden"></th>
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
                <td className="px-[20px] py-[20px] text-center">
                  {item.volume}
                </td>
                <td className="hidden sm:table-cell px-[20px] py-[20px] text-right">
                  {item.status}
                </td>
                <td className="hidden sm:table-cell px-[20px] py-[20px] text-right">
                  {item.time}
                </td>
                <td className="hidden sm:table-cell px-[20px] py-[20px] text-right">
                  {item.asset}
                </td>
                <td
                  className="bg-no-repeat bg-contain bg-center table-cell sm:hidden w-[40px] h-[80%]  mr-[5px]"
                  onClick={() => {
                    handlepopupwithdata(index);
                  }}
                >
                  <MdOutlineUnfoldMore />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* ...... desktop table ......... */}
      </div>
      {/* ..... modals ...... */}
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        className="bg-opacitywith"
      >
        <Modal.Header className="bg-[#07303F] text-white">
          <Modal.Title>TRANSFER HISTORY</Modal.Title>
          <div onClick={handleClose} className="text-[2rem]">
            {" "}
            <IoIosCloseCircleOutline />
          </div>
        </Modal.Header>
        <Modal.Body className="bg-[#07303F] text-white">
          <section className="flex flex-col gap-[20px]">
            <div className="flex gap-[30px]">
              <p>ASSETS :</p>
              <p> {yourData[currentpopupindex].asset} </p>
            </div>
            <div className="flex gap-[30px]">
              <p>TYPE :</p>
              <p> {yourData[currentpopupindex].type} </p>
            </div>
            <div className="flex gap-[30px]">
              <p>VOLUME :</p>
              <p> {yourData[currentpopupindex].volume} </p>
            </div>
            <div className="flex gap-[30px]">
              <p>RRN NUMBER :</p>
              <p> {yourData[currentpopupindex].asset} </p>
            </div>
            <div className="flex gap-[30px]">
              <p>STATUS :</p>
              <p> {yourData[currentpopupindex].status} </p>
            </div>
            <div className="flex gap-[30px]">
              <p>TIME :</p>
              <p> {yourData[currentpopupindex].time} </p>
            </div>
          </section>
        </Modal.Body>
      </Modal>
    </>
  );
}
