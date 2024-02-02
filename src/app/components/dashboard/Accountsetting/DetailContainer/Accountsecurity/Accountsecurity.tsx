import React, { useState, useEffect } from "react";
import HeadContainer from "../Common/HeadContainer/HeadContainer";
import { SiSpringsecurity } from "react-icons/si";
import { RxActivityLog } from "react-icons/rx";
import ReactPaginate from 'react-paginate';
import { getRequestAPIHelper } from "../../../../../utils/lib/requestHelpers"
import { FaPlay } from "react-icons/fa";


const dotenv = require('dotenv')
dotenv.config();
const apiUrl = process.env.API_URL;

interface ActivityLog {
  date: string;
  activity: string;
  ipAddress: string;
  country: string;
  city: string;
  latitude: string;
  longitude: string;
}

export default function Profile() {
  const [twofacteropen, settwofacteropen] = useState(false);
  const [Activitylogopen, setActivitylogopen] = useState(false);
  const [ActivitylogResult, setActivitylogResult] = useState<ActivityLog[]>([]);
  const [formattedTime, setformattedTime] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const perPage = 10;

  const handleActivityLog = async () => {
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

  useEffect(() => {
    handleActivityLog();
  }, []);

  const convertTo12HourFormat = (timestamp: string) => {
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

  const pageCount = Math.ceil(ActivitylogResult.length / perPage);
  const offset = pageNumber * perPage;




  const handlePageClick = ({ selected: selectedPage }: { selected: number }) => {
    setPageNumber(selectedPage);
  };

  return (
    <>
      <HeadContainer
        title="ACCOUNT SECURITY"
        logo="/dashboard/account-setting/sidebar/acountsetting.svg"
      />
      <div className="w-[100%]  bg-dashboardbgone mt-[37px] text-white px-[20px]">
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

        <div style={{ display: `${twofacteropen ? "block" : "none"}` }}>
          <p>goes here</p>
        </div>

        <div
          onClick={() => setActivitylogopen(!Activitylogopen)}
          className="w=[100%] py-[10px] border-t border-t-[#041E27] flex justify-between"
        >
          <h1 className="flex gap-[20px]">
            <div className="text-[#F5CD8E]">
              {" "}
              <RxActivityLog />
            </div>
            Activity Log
          </h1>
          <div
            style={{
              transition: ".1s all ease-in-out",
              transform: `${Activitylogopen ? "rotate(90deg)" : "rotate(0deg)"}`,
            }}
            className="mr-[20px] text-[#F5CD8E]"
          >
            <div className="" onClick={handleActivityLog}><FaPlay /></div>
          </div>
        </div>



        {Activitylogopen && (
          <div className="flex flex-col gap-[20px] w-[100%]">
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
                {ActivitylogResult.slice(offset, offset + perPage).map((data, index) => (
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

            <div className="p-4">
              <ReactPaginate
                previousLabel={"← Previous"}
                nextLabel={"Next →"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"flex justify-center"}
                previousLinkClassName={"px-2 py-1 border rounded mr-2 text-sm"}
                nextLinkClassName={"px-2 py-1 border rounded ml-2 text-sm"}
                pageLinkClassName={"px-2 py-1  mx-1 text-sm cursor-not-allowed"}
                disabledClassName={"text-gray-500 cursor-not-allowed"}
                activeClassName={"bg-gray-500 text-white rounded-md"}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
