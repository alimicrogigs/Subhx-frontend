"use client";
import React, { useState } from "react";
import HeadContainer from "../Common/HeadContainer/HeadContainer";
import { SiSpringsecurity } from "react-icons/si";
import { RxActivityLog } from "react-icons/rx";
import ReactPaginate from 'react-paginate';
import { getRequestAPIHelper } from "../../../../../utils/lib/requestHelpers"
import { FaPlay } from "react-icons/fa";

const dotenv = require('dotenv')
dotenv.config();
const apiUrl = process.env.API_URL;


export default function Profile() {
  // data
  const activityData = [
    {
      date: "2024-01-30",
      activity: "Login",
      ipAddress: "192.168.1.1",
      country: "United States",
      city: "New York",
      latitude: "40.7128",
      longitude: "-74.0060",
    },
    {
      date: "2024-01-30",
      activity: "Login",
      ipAddress: "192.168.1.1",
      country: "United States",
      city: "New York",
      latitude: "40.7128",
      longitude: "-74.0060",
    },
  ];

  const [twofacteropen, settwofacteropen] = useState(false);
  const [Activitylogopen, setActivitylogopen] = useState(false);
  const [ActivitylogResult, setActivitylogResult] = useState([]);
  const [formattedTime, setformattedTime] = useState("");

  const handleActivityLog =async ()=>{
    const token = localStorage.getItem("token");

    try {

      const activityLogsResponse = await getRequestAPIHelper(apiUrl + 'activity-logs', token);
      if (activityLogsResponse.success === true) {
        setActivitylogResult(activityLogsResponse.data.data);
      }
    } catch (error) {
      console.error('Error fetching Activity Log', error);
    }
  }
  function convertTo12HourFormat(timestamp :any) {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formatTime = `${formattedHours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds} ${period}`;
    console.log(formatTime);
    return formatTime;
}

  return (
    <>
      <HeadContainer
        title="ACCOUNT SECURITY
"
        logo="/dashboard/account-setting/sidebar/acountsetting.svg"
      />
      {/* ............... USser detail */}
      <div className="w-[100%]  bg-dashboardbgone mt-[37px] text-white px-[20px]">
        {/* ........ */}
        <div
          onClick={() => settwofacteropen(!twofacteropen)}
          className="w=[100%] py-[10px] border-t border-t-[#041E27] flex justify-between"
        >
          <h1 className="flex gap-[20px]">
            <div className="text-[#F5CD8E]">
              {" "}
              <SiSpringsecurity />
            </div>
            Two Factor Authentication
          </h1>
          <div
            style={{
              transition: ".1s all ease-in-out",
              transform: `${twofacteropen ? "rotate(90deg)" : "rotate(0deg)"}`,
            }}
            className="mr-[20px] text-[#F5CD8E]"
          >
            <FaPlay />
          </div>
        </div>
        {/* ........ */}
        {/* nominee list goes here ... */}
        <div style={{ display: `${twofacteropen ? "block" : "none"}` }}>
          <p>goes here</p>
        </div>
        {/* nominee list goes here ... */}

        {/* ........ */}
        <div
          onClick={() => setActivitylogopen(!Activitylogopen) }
          className="w=[100%] py-[10px] border-t border-t-[#041E27] flex justify-between"
          // onChange={handleActivityLog}
        >
          <h1 className="flex gap-[20px]" >
            <div className="text-[#F5CD8E]">
              {" "}
              <RxActivityLog />
            </div>
            Activity Log
          </h1>
          <div
            style={{
              transition: ".1s all ease-in-out",
              transform: `${Activitylogopen ? "rotate(90deg)" : "rotate(0deg)"
                }`,
            }}
            className="mr-[20px] text-[#F5CD8E]"
          >
            <div className="" onClick={handleActivityLog}><FaPlay  /></div>
          </div>
        </div>
        {/* ........ */}
        {Activitylogopen && (
          <div className="flex gap-[20px] w-[100%] ">
            <table className="text-[.65rem] w-[100%]">
              <thead className="bg-[#032835]">
                <tr className="text-center">
                  <th className="py-[5px]">Date</th>
                  <th>Activity</th>
                  <th>IP Address</th>
                  <th>Country</th>
                  <th>City</th>
                  <th>Latitude</th>
                  <th>Longitude</th>
                </tr>
              </thead>
              <tbody>
                {/* <tr className="text-center">
                  <td className="py-[5px]">2024-01-30</td>
                  <td>Login</td>
                  <td>192.168.1.1</td>
                  <td>United States</td>
                  <td>New York</td>
                  <td>40.7128</td>
                  <td>-74.0060</td>
                </tr>
                 */}
                {ActivitylogResult.map((data, index) => (
                  <tr key={index} className="text-center">
                    <td className="py-[5px]">{convertTo12HourFormat(data.created_at)}</td>
                    <td>NA</td>
                    <td>{data.ip_address}</td>
                    <td>{data.country}</td>
                    <td>{data.city}</td>
                    <td>{data.latitude}</td>
                    <td>{data.longitude}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
