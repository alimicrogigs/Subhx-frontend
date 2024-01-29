import React from "react";
import DepositeCard from "./DepositeCard/DepositeCard";
import DepositeCardone from "./DepositeCardone/DepositeCardone";
import DepositeCardtwo from "./DepositeCardtwo/DepositeCardtwo";
import DepositeCardthree from "./DepositeCardthree/DepositeCardthree";
import DepositeCardfour from "./DepositeCardfour/DepositeCardfour";
import Accordion from "react-bootstrap/Accordion";

export default function Depositefunds() {

  

  return (
    <div>
      {/* ........ */}
      <Accordion defaultActiveKey="">
        <div className="sm:mt-[50px] mt-[100px]">
          <DepositeCardone />
        </div>
        {/* ........ */}
        <div className="mt-[20px]">
          <DepositeCardtwo />
        </div>
        {/* ........ */}
        <div className="mt-[20px]">
          <DepositeCardthree />
        </div>
        {/* ........ */}
        <div className="mt-[20px]">
          <DepositeCardfour UPIid="saad" />
        </div>
      </Accordion>
    </div>
  );
}
