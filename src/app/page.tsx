"use client";
"use client"
import React, {useState, useEffect } from "react";
import Container from "./components/common/Container/Container";
import Herolanding from "./components/Herolanding/Herolanding";
import { useDispatch, useSelector } from "react-redux";
import { getUserDataRequest, getUserDataSuccess, getUserDataFailure } from "../../src/app/actions/depositeFundActions"
import Footer from "./components/Footer/Footer";
import Navbar from "./components/nabvar/navbar";
import Dashboardnavbar from "./components/Dashboardnavbar/Dashboardnavbar";
// import store from "./store";
import { getRequestAPIHelper } from "../../src/app/utils/lib/requestHelpers";
const apiUrl = process.env.API_URL;
import { Provider } from "react-redux";

export default function Page() {
  const dispatch = useDispatch();
  const [storedValue, setStoredValue] = useState();

  useEffect(() => { 
    const isUserLoggedIn:any = localStorage.getItem('token');
    if (isUserLoggedIn) {
      setStoredValue(isUserLoggedIn); 
    }
    
  }, []);
  const { userAllDetails  , userError} = useSelector((state: any) => state.userDetails);
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');

      try {
        dispatch(getUserDataRequest())
        // Make the API call to fetch user details
        const getUserDataResponse = await getRequestAPIHelper(apiUrl + 'user', token)
        console.log( "--------------->",getUserDataResponse.success )
        if(getUserDataResponse.success === true){
          dispatch(getUserDataSuccess(getUserDataResponse.data))
        }
      } catch (err:any) {
        console.log('Error fetching user details:', err.response.data.error);
        if(err.response.data.error === "Unauthenticated."){
          console.log("Token does not exist. Redirecting to login page...")
          dispatch(getUserDataFailure(err.response.data.error));
        }
      }
    }
    // Call the fetchUserData function when the component mounts
    fetchUserData()
    return () => {

    };
  }, [])

  return (
      // <Provider store={store}>
      <>
        
        {storedValue ? <Dashboardnavbar /> : <Navbar />}
    
      {/* <Navbar /> */}
          <Container isborder={true}>
            <Herolanding />
          </Container>
          <Container isborder={true}>
            <div className="pt-[50px]">
              <div className="w-[100%] h-[80px] bg-[#111111]"></div>
            </div>
          </Container>
          <Footer />
        </>
    // </Provider>
  );
}