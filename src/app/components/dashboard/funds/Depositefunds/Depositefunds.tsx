import React from "react";
import DepositeCard from "./DepositeCard/DepositeCard";
import DepositeCardone from "./DepositeCardone/DepositeCardone";
import DepositeCardtwo from "./DepositeCardtwo/DepositeCardtwo";
import DepositeCardthree from "./DepositeCardthree/DepositeCardthree";
import DepositeCardfour from "./DepositeCardfour/DepositeCardfour";

export default function xDepositefunds() {
  return (
    <div>
      {/* ........ */}
      <div className="mt-[50px]">
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
        <DepositeCardfour />
      </div>
    </div>
  );
}
