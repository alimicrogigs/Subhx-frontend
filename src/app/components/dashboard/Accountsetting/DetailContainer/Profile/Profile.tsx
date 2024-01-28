"use client";
import React, { useState } from "react";
import HeadContainer from "../Common/HeadContainer/HeadContainer";
import { FaCheck } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { TbReceiptTax } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import { IoIosAddCircle } from "react-icons/io";

export default function Profile() {
  // data
  const [GSTno, setGSTno] = useState("");
  const [nomineeopen, setNomineeopen] = useState(false);
  const [GSTINopen, setGSTINopen] = useState(false);

  const handleGSTIN = () => {
    console.log({ GSTno });
    setGSTno("");
  };

  interface Nominee {
    name: string;
    relation: string;
  }

  interface User {
    name: string;
    mail: string;
    contactno: number;
    nominee: Nominee[];
  }

  let user: User = {
    name: "John Doe",
    mail: "john.doe@example.com",
    contactno: 9876543210,
    nominee: [
      { name: "Alice Johnson", relation: "Spouse" },
      { name: "Bob Williams", relation: "Friend" },
      { name: "Charlie Brown", relation: "Colleague" },
      { name: "Diana Smith", relation: "Family" },
      { name: "Eva Miller", relation: "Friend" },
    ],
  };
  return (
    <>
      <HeadContainer
        title="Profile"
        logo="/dashboard/account-setting/sidebar/avatar.svg"
      />
      {/* ............... USser detail */}
      <div className="w-[100%]  bg-dashboardbgone mt-[37px] text-white px-[20px]">
        {/* ........ */}
        <div className="w=[100%] py-[20px] ">
          <h1 className="flex gap-[20px]">
            <div className="text-[#F5CD8E]">
              {" "}
              <FaCheck />
            </div>

            {user.name}
          </h1>
        </div>
        {/* ........ */}
        {/* ........ */}
        <div className="w=[100%] py-[10px] border-t border-t-[#041E27] flex justify-between">
          <h1 className="flex gap-[20px]">
            <div className="text-[#F5CD8E]">
              {" "}
              <IoMdMail />
            </div>

            {user.mail}
          </h1>
          <div className="mr-[20px] text-[#F5CD8E]">
            <FaPen />
          </div>
        </div>
        {/* ........ */}
        {/* ........ */}
        <div className="w=[100%] py-[10px] border-t border-t-[#041E27] flex justify-between">
          <h1 className="flex gap-[20px]">
            <div className="text-[#F5CD8E]">
              {" "}
              <FaMobileAlt />
            </div>
            +91 &nbsp;
            {user.contactno}
          </h1>
          <div className="mr-[20px] text-[#F5CD8E]">
            <FaPen />
          </div>
        </div>
        {/* ........ */}
        {/* ........ */}
        <div
          onClick={() => setNomineeopen(!nomineeopen)}
          className="w=[100%] py-[10px] border-t border-t-[#041E27] flex justify-between"
        >
          <h1 className="flex gap-[20px]">
            <div className="text-[#F5CD8E]">
              {" "}
              <MdFamilyRestroom />
            </div>
            Nominee
          </h1>
          <div
            style={{
              transition: ".1s all ease-in-out",
              transform: `${nomineeopen ? "rotate(90deg)" : "rotate(0deg)"}`,
            }}
            className="mr-[20px] text-[#F5CD8E]"
          >
            <FaPlay />
          </div>
        </div>
        {/* ........ */}
        {/* nominee list goes here ... */}
        <div style={{ display: `${nomineeopen ? "block" : "none"}` }}>
          {user.nominee.map((nominee, index) => (
            <div
              key={index} // Make sure to provide a unique key
              className="w=[100%] py-[10px] border-t border-t-[#041E27] flex justify-between px-[30px]"
            >
              <h1 className="flex gap-[20px]">
                <div className="text-[#F5CD8E]">
                  {" "}
                  <GoDotFill />
                </div>
                {nominee.name}
                <span className="ml-[30px]">{nominee.relation}</span>
              </h1>
              <div className="mr-[20px] text-[#F5CD8E]">{/* <FaPlay /> */}</div>
            </div>
          ))}
        </div>
        {/* nominee list goes here ... */}

        {/* ........ */}
        <div
          onClick={() => setGSTINopen(!GSTINopen)}
          className="w=[100%] py-[10px] border-t border-t-[#041E27] flex justify-between"
        >
          <h1 className="flex gap-[20px]">
            <div className="text-[#F5CD8E]">
              {" "}
              <TbReceiptTax />
            </div>
            GSTIN{" "}
          </h1>
          <div
            style={{
              transition: ".1s all ease-in-out",
              transform: `${GSTINopen ? "rotate(90deg)" : "rotate(0deg)"}`,
            }}
            className="mr-[20px] text-[#F5CD8E]"
          >
            <FaPlay />
          </div>
        </div>
        {/* ........ */}
        {GSTINopen && (
          <div className="flex gap-[20px] w-[100%] justify-center pt-[20px] pb-[20px]">
            <input
              value={GSTno}
              onChange={(e) => setGSTno(e.target.value)}
              type="string"
              name=""
              id=""
              placeholder="Add Your GST no here"
              className="w-[60%] pl-[20px] focus:border-none focus:outline-none text-black"
            />
            <div onClick={handleGSTIN} className="text-[#F5CD8E] text-[2rem]">
              <IoIosAddCircle />
            </div>
          </div>
        )}
      </div>

      <p className="px-[20px] text-white py-[10px] text-[.8rem]">
        Add your GST number to Invoice reports by providing your GSTIN here.
      </p>
    </>
  );
}
