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
<<<<<<< Updated upstream
import {useSelector} from "react-redux";

=======
import { useSelector } from "react-redux";
>>>>>>> Stashed changes

export default function Profile() {
  // data
  const [GSTno, setGSTno] = useState("");
  const [nomineeopen, setNomineeopen] = useState(false);
  const [GSTINopen, setGSTINopen] = useState(false);
<<<<<<< Updated upstream
  const {userAllDetails } = useSelector((state :any)=>state.userDetails);
  
  const {getUserAllDetails} = useSelector((state :any)=>state.deposite);

=======
  const { getUserAllDetails } = useSelector((state: any) => state.deposite);
>>>>>>> Stashed changes

  // nominee edit form
  const [nomineeEditopen, setNomineeEditopen] = useState(false);
  // nominee form data
  const [nomineeFormData, setNomineeFormData] = useState({
    name: "",
    mobileNumber: "",
    adharNumber: "",
    panNumber: "",
    emailAddress: "",
  });
<<<<<<< Updated upstream

  const handleNewNominee = () => {
  };

=======
  const handleNewNominee = () => {};
>>>>>>> Stashed changes
  const handleNomineeFormDataChange = (e: any) => {
    const { name, value } = e.target;
    setNomineeFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleGSTIN = () => {
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
    nominee: [{ name: "Alice Johnson", relation: "Spouse" }],
  };
  console.log("getUserAllDetails 64", getUserAllDetails);
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

<<<<<<< Updated upstream
            {(userAllDetails .name === null ||userAllDetails .name === undefined) ? "NA" : userAllDetails .name}
=======
            {getUserAllDetails.name === null ||
            getUserAllDetails.name === undefined ||
            getUserAllDetails.name === undefined
              ? "NA"
              : getUserAllDetails.name}
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
            {(userAllDetails .email === null ||userAllDetails .email === undefined) ? "NA" : userAllDetails .email}
=======
            {getUserAllDetails.email === null ||
            getUserAllDetails.email === undefined
              ? "NA"
              : getUserAllDetails.email}
>>>>>>> Stashed changes
          </h1>
          <div className="mr-[20px] text-[#F5CD8E]">{/* <FaPen /> */}</div>
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
<<<<<<< Updated upstream
            {(userAllDetails .phone === null || userAllDetails .phone === undefined) ? "NA" : userAllDetails .phone}
=======
            {getUserAllDetails.phone === null ||
            getUserAllDetails.phone === undefined
              ? "NA"
              : getUserAllDetails.phone}
>>>>>>> Stashed changes
          </h1>

          <div className="mr-[20px] text-[#F5CD8E]">{/* <FaPen /> */}</div>
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
                {nominee.name} :
                <span className="ml-[5px]">{nominee.relation}</span>
              </h1>
              <div
                onClick={() => setNomineeEditopen(!nomineeEditopen)}
                style={{ display: `${!nomineeEditopen ? "block" : "none"}` }}
                className="mr-[20px] text-[#F5CD8E]  "
              >
                <FaPen />
              </div>
            </div>
          ))}


          {/* { edit form for nominee} */}
          
          
          {nomineeEditopen && (
            <div className="w-[100%]  sm:px-[100px] px-[30px] flex flex-col gap-[20px] mt-[20px]">
              <h1>Add Your New Nominee Detail below :</h1>
              <input
                value={nomineeFormData.name}
                onChange={handleNomineeFormDataChange}
                type="text"
                name="name"
                id="name"
                className="pl-[30px] py-[10px] focus:border-none focus:outline-none text-black rounded"
                placeholder="New Nominee Name"
              />
              <input
                value={nomineeFormData.mobileNumber}
                onChange={handleNomineeFormDataChange}
                type="number"
                name="mobileNumber"
                id="mobileNumber"
                className="pl-[30px] py-[10px] focus:border-none focus:outline-none text-black rounded"
                placeholder="Nominee Mobile number"
              />
              <input
                value={nomineeFormData.adharNumber}
                onChange={handleNomineeFormDataChange}
                type="number"
                name="adharNumber"
                id="adharNumber"
                className="pl-[30px] py-[10px] focus:border-none focus:outline-none text-black rounded"
                placeholder="Nominee Adhar number"
              />
              <input
                value={nomineeFormData.panNumber}
                onChange={handleNomineeFormDataChange}
                type="number"
                name="panNumber"
                id="panNumber"
                className="pl-[30px] py-[10px] focus:border-none focus:outline-none text-black rounded"
                placeholder="Nominee PAN number"
              />
              <input
                value={nomineeFormData.emailAddress}
                onChange={handleNomineeFormDataChange}
                type="email"
                name="emailAddress"
                id="emailAddress"
                className="pl-[30px] py-[10px] focus:border-none focus:outline-none text-black rounded"
                placeholder="Nominee Email Address"
              />

              <button
                onClick={handleNewNominee}
                className="bg-[#F5CD8E] mb-[30px] py-[10px] rounded-[10px] w-auto"
              >
                {" "}
                Save Changes
              </button>
            </div>
          )}
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
