"use client";
"use client"
import React, {useState, useEffect } from "react";
import Container from "./components/common/Container/Container";
import Herolanding from "./components/Herolanding/Herolanding";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/nabvar/navbar";
import Dashboardnavbar from "./components/Dashboardnavbar/Dashboardnavbar";
// import store from "./store";
import { Provider } from "react-redux";

export default function Page() {

  const [storedValue, setStoredValue] = useState();

  useEffect(() => { 
    const isUserLoggedIn:any = localStorage.getItem('token');
    if (isUserLoggedIn) {
      setStoredValue(isUserLoggedIn); 
    }
    
  }, []);

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