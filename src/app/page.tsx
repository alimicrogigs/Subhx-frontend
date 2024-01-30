"use client"
import React from "react";
import Container from "./components/common/Container/Container";
import Herolanding from "./components/Herolanding/Herolanding";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/nabvar/navbar";
// import store from "./store";
import { Provider } from "react-redux";

export default function Page() {
  return (
    // <Provider store={store}>
      <>
        <Navbar />
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