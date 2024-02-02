"use client";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserDataRequest, getUserDataSuccess, getUserDataFailure } from "../../actions/userAction"
import { getRequestAPIHelper } from "../../utils/lib/requestHelpers"
import { useSelector } from "react-redux";
const dotenv = require('dotenv')
dotenv.config()
const apiUrl = process.env.API_URL;
export default function OrderSection() {
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState("buy"); // Default to 'buy'
  const [selectLimit, setSelectLimit] = useState("instant");
  const [userAuth, setUserAuth] = useState(false);
  const { userAllDetails, error } = useSelector((state: any) => state.userDetails);


  const handleOrderSwitch = (tab: any) => {
    setSelectedTab(tab);
  }

  const handleLimitSwitch = (tab: any) => {
    setSelectLimit(tab);
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
        console.log("line___57")
        console.log("user ka data .........", getUserDataResponse,)
        if (getUserDataResponse.success === true) {
          dispatch(getUserDataSuccess(getUserDataResponse.data))
        }
      } catch (err: any) {
        console.log('Error fetching user details:', err.response.data.error);
        if (err.response.data.error === "Unauthenticated.") {
          console.log("Token does not exist. Redirecting to login page...");
          console.log(err.response.data)
          // setTimeout(() => {
          //     window.location.href = '/login';
          // }, 10)
        }
        dispatch(getUserDataFailure(err.response.data.error));
        console.log("USER KA DATA GAYA")
      }
    }
    // Call the fetchUserData function when the component mounts
    fetchUserData()

    // console.log(error , "line_______21");
    // console.log(userAllDetails , "line_______21");
    return () => {
      // Any cleanup code if needed
    };
  }, [])

  const handleSignUpClick = () => {
    const mainUrl = window.location.origin;
    setTimeout(() => {
      // redirect to hero page
      window.location.href = mainUrl;
      window.location.href = "/create-account";
    }, 0);
  }

  return (
    <>


      {
        (error === "Unauthenticated.") ?
          <section className="bg-dashbgtrans rounded-lg relative items-center justify-center flex sm:flex-col sm:w-[26.2vw] sm:h-[100%]">
            
            <div className="flex sm:flex-col scale-2  sm:mt-8  ">
              
                   {/* SELL USDT */}
                   <p>Please SignUp</p>
                  <h1 className="text-[2vw] cursor-pointer " onClick={handleSignUpClick}>SignUp</h1>
                
            </div>
          </section>
          :
          <section className="bg-dashbgtrans rounded-lg flex sm:flex-col sm:w-[26.2vw] sm:h-[100%]">
            <div className="flex sm:h-[15%] bg-dashbgtrans sm:flex-row sm:justify-center sm:items-center">
              <div
                onClick={() => handleOrderSwitch("buy")}
                className={`cursor-pointer ${selectedTab === "buy" ? "border-b-[6px]" : "border-b-2"
                  } border-borderline sm:px-8 sm:py-2`}
              >
                <span className="font-poppinsSemibold text-[0.9rem]">Buy USDT</span>
              </div>
              <div
                onClick={() => handleOrderSwitch("sell")}
                className={`cursor-pointer ${selectedTab === "sell" ? "border-b-[6px]" : "border-b-2"
                  } border-borderline sm:px-8 sm:py-2`}
              >
                <span className="font-poppinsSemibold text-[0.9rem]">Sell USDT</span>
              </div>
            </div>
            <div className="sm:h-[10%]  flex sm:flex-row sm:justify-center sm:items-center ">
              <span
                onClick={() => handleLimitSwitch("instant")}
                className={`sm:px-4 border border-borderline sm:py-1 sm:rounded-l sm:text-[0.6rem] ${selectLimit === "instant" ? "bg-switchColor" : ""
                  }`}
              >
                Instant Trade
              </span>
              <span
                onClick={() => handleLimitSwitch("limit")}
                className={`border border-borderline sm:rounded-r sm:px-4 sm:py-1 sm:text-[0.6rem] ${selectLimit === "limit" ? "bg-switchColor" : ""
                  }`}
              >
                Limit Trade
              </span>
            </div>
            <div className="flex sm:flex-col ">
              <span className="sm:ml-5 sm:text-[0.5rem] sm:py-1">Amount</span>
              <div className="flex sm:flex-row sm:justify-evenly sm:items-center">

                <div className="flex sm:flex-row  sm:w-[60%]">
                  <input className="  focus:outline-none sm:px-2 sm:w-[90%] rounded-l sm:bg-inputBg text-black sm:h-[2rem] " />
                  <div className="sm:h-[2rem] sm:w-[2.3rem] flex sm:items-center  font-poppinsRegular sm:bg-inputBg sm:text-[0.6rem] text-dashbgtrans rounded-r">
                    USDT
                  </div>
                </div>

                <div className="sm:w-17% sm:px-2 sm:bg-inputBg text-[1.6rem] text-dashbgtrans sm:text-center flex sm:items-center rounded sm:h-[2rem] bg-red-200">
                  +
                </div>
                <div className="sm:w-17% sm:px-2 sm:bg-inputBg text-[1.8rem] text-dashbgtrans sm:text-center flex sm:items-center rounded sm:h-[2rem] bg-green-200">
                  -
                </div>
              </div>
            </div>

            {selectLimit === "limit" && (
              <div className="flex sm:flex-col sm:mt-2  ">
                <span className="sm:ml-5 sm:text-[0.5rem] sm:py-1">Price</span>
                <div className="flex sm:flex-row sm:justify-evenly sm:items-center">
                  {/* <span
              style={{ color: "#416384" }}
              className="absolute text-switchColor font-poppinsMedium text-[0.6rem] right-[9.1rem] "
            >
              USDT
            </span> */}
                  <div className="flex sm:flex-row  sm:w-[60%]">
                    <input className="  focus:outline-none sm:px-2 sm:w-[90%] rounded-l sm:bg-inputBg text-black sm:h-[2rem] " />
                    <div className="sm:h-[2rem] sm:w-[2.3rem] flex sm:items-center font-poppinsRegular sm:bg-inputBg sm:text-[0.6rem] text-dashbgtrans rounded-r">
                      USDT
                    </div>
                  </div>
                  <div className="sm:w-17% sm:px-2 sm:bg-inputBg text-[1.6rem] text-dashbgtrans sm:text-center flex sm:items-center rounded sm:h-[2rem] bg-red-200">
                    +
                  </div>
                  <div className="sm:w-17% sm:px-2 sm:bg-inputBg text-[1.8rem] text-dashbgtrans sm:text-center flex sm:items-center rounded sm:h-[2rem] bg-green-200">
                    -
                  </div>
                </div>
              </div>
            )}

            <div className="flex sm:flex-col sm:mt-2 ">
              <span className="sm:ml-5 sm:text-[0.5rem] sm:py-1">Total</span>
              <div className="flex sm:flex-row sm:justify-evenly sm:items-center">
                <div className="flex sm:flex-row  sm:w-[89%]">
                  <input className="  focus:outline-none sm:px-2 sm:w-[90%] rounded-l sm:bg-inputBg text-black sm:h-[2rem] " />
                  <div className="sm:h-[2rem] sm:p-2 sm:w-[2.3rem] flex sm:items-center font-poppinsRegular sm:bg-inputBg sm:text-[0.65rem] text-dashbgtrans rounded-r">
                    INR
                  </div>
                </div>
              </div>
            </div>

            <div className="flex sm:flex-col sm:mt-8  ">
              {selectedTab === "buy" ? (
                <div
                  className="sm:w-[100%] scale-2 sm:text-[1.3rem] font-poppinsBold sm:h-[2.6rem] flex sm:justify-center sm:items-center bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: "url(/dashboard/exchange/buyButton.svg)",
                  }}
                >
                  BUY USDT
                </div>
              ) : (
                <div
                  className="sm:w-[100%] sm:text-[1.3rem]  font-poppinsBold sm:h-[2.6rem] flex sm:justify-center sm:items-center bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: "url(/dashboard/exchange/sellButton.svg)",
                  }}
                >
                  SELL USDT
                </div>
              )}
            </div>
          </section>
      }
    </>
  );
}
