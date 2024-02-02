"use client";
import React, { useState ,useEffect} from "react";
import jwtDecode from 'jwt-decode';
import { getRequestAPIHelper } from "../../utils/lib/requestHelpers"
import { useDispatch, useSelector } from "react-redux";
import OrderHistory from "@/app/components/OrderHistory/OrderHistory";
import OrderSection from "@/app/components/OrderSection/OrderSection";
import ChartSection from "@/app/components/chartSection/ChartSection";
import CurrencySection from "@/app/components/currencySection/CurrencySection";
import OrderBook from "@/app/components/orderBook/OrderBook";
import { getUserDataRequest, getUserDataSuccess, getUserDataFailure } from "../../actions/userAction"
import useWindowResize from "@/app/Hooks/useWindowResize";
import BottomBar from "@/app/components/BottomBar/BottomBar";
const dotenv = require('dotenv')
dotenv.config()
const apiUrl = process.env.API_URL;


export default function page() {
  const dispatch = useDispatch();
  const isMobile = useWindowResize();
  const [currentLayout, setCurrentLayout] = useState("MARKETS");
  const {userAllDetails  , error} = useSelector((state :any)=>state.userDetails );
  console.log(error , "______LINELINE24")
  console.log("ismobile===", isMobile);

  console.log("currentLayout===", currentLayout);

  const handleChangeLayout = (newLayout: any) => {
    setCurrentLayout(newLayout);
  }
  useEffect(() => {
    // Function to fetch user details from API
    // const token = localStorage.getItem('token');


    const fetchUserData = async () => {
      const token = localStorage.getItem('token');

      try {
        dispatch(getUserDataRequest())
        // Make the API call to fetch user details
        const getUserDataResponse = await getRequestAPIHelper(apiUrl + 'user', token)
        // console.log("line___57")
        // console.log("user ka data .........",getUserDataResponse , )
        if(getUserDataResponse.success === true){
          dispatch(getUserDataSuccess(getUserDataResponse.data))
        }
      } catch (err:any ) {
        // console.log('Error fetching user details:', err.response.data.error);
        if(err.response.data.error === "Unauthenticated."){
          // console.log("Token does not exist. Redirecting to login page...");
          console.log(err.response.data)
          // setTimeout(() => {
          //     window.location.href = '/login';
          // }, 10)
          dispatch(getUserDataFailure(err.response.data.error));
        }
        // console.log("USER KA DATA GAYA")
      }
    }
    // Call the fetchUserData function when the component mounts
    fetchUserData()
    return () => {
      // Any cleanup code if needed
    };
  }, [])
  return (
    <>
      {!isMobile ? (
        <div className="w-[100%] text-white  sm:h-full   sm:max-h-screen  sm:overflow-x-hidden">
          <div className="sm:h-auto  flex sm:flex-row  sm:m-2">
            {/* currency section */}
            <div className="sm:h-[130vh]">
              {!isMobile && <CurrencySection />}
            </div>
            <div className="flex  sm:h-[130vh] sm:ml-4 sm:rounded-lg sm:flex-col">
              <div className="sm:h-[64%] flex   sm:rounded-lg sm:flex-row">
                <ChartSection />
                <OrderSection />
              </div>
              <div className="sm:h-[64%] flex   sm:mt-3 sm:rounded-lg sm:flex-row">
                <OrderBook />
                <OrderHistory />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[100%] h-[100vh]  flex justify-between flex-col  text-white sm:m-2">
          <div className="w-[100%] h-[90%]  ">
            {currentLayout === "MARKETS" && <CurrencySection />}
            {currentLayout === "CHARTS" && <ChartSection />}
            {currentLayout === "MYORDER" && <OrderHistory />}

            {currentLayout === "ORDERBOOK" && <OrderBook />}
          </div>

          <div className=" sticky bg-dashbgtrans h-[10%] w-full">
            {isMobile && <BottomBar onChangeLayout={handleChangeLayout} />}
          </div>
        </div>
      )}
    </>
  );
}

{
  /* values of order book start here*/
}


{
  /* <div className=" sm:w-[100%] flex sm:text-[0.8rem] bg-red-200 sm:justify-between">
          <div className="sm:w-[47%] flex sm:flex-row bg-blue-200">
            <div className="sm:w-[60%] sm:text-end bg-green-200">buyprice</div>
            <div className="sm:w-[40%] sm:text-end bg-red-400">volume</div>
          </div>
          <div className="sm:w-[47%] flex sm:flex-row bg-blue-200">
            <div className="sm:w-[40%] sm:text-start bg-red-400">sellprice</div>
            <div className="sm:w-[60%] sm:text-start bg-green-200">volume</div>
          </div>
        </div> */
}
{
  /* values of order book end here */
}


