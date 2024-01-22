import React from "react";
import Container from "./components/common/Container/Container";
import Herolanding from "./components/Herolanding/Herolanding";
import Footer from "./components/Footer/Footer";

export default function page() {
  return (
    <>
      <Container isborder={true}>
        <Herolanding />
      </Container>
      <Footer />
    </>
  );
}
