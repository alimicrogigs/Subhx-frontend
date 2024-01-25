"use client";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
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
      <Accordion defaultActiveKey={[""]} alwaysOpen>
        <Accordion.Item
          style={{
            width: "40%",
            margin: "auto",
            background: "#002B50",
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
      </Accordion>
    </div>
  );
};

export default AlwaysOpenExample;
