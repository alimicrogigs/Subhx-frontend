"use client";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import styles from "./page.module.css";
interface depositecardprops {
  heading: string;
  children: React.ReactNode;
  eventKey: string;
}
const AlwaysOpenExample: React.FC<depositecardprops> = ({
  heading,
  children,
  eventKey,
}) => {
  return (
    <div className="mt-[20px]">
      {/* <Accordion defaultActiveKey=""> */}
      <Accordion.Item
        className={styles.makeitresponsive}
        style={{
          width: "40%",
          margin: "auto",
          background: "#07303F",
          border: "none",
        }}
        eventKey={eventKey}
      >
        <Accordion.Header
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {heading}
        </Accordion.Header>
        <Accordion.Body>{children}</Accordion.Body>
      </Accordion.Item>
      {/* </Accordion> */}
    </div>
  );
};

export default AlwaysOpenExample;
