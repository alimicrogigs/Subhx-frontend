import React from "react";
import Container from "./components/common/Container/Container";
import Herolanding from "./components/Herolanding/Herolanding";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/nabvar/navbar";

export default function page() {
  return (
    <>
      <Navbar />
      <Container isborder={true}>
        <Herolanding />
      </Container>
      <Footer />
    </>
  );
}
