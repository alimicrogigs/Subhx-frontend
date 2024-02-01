import React, { useState } from "react";
import DepositeCard from "./DepositeCard/DepositeCard";
import DepositeCardone from "./DepositeCardone/DepositeCardone";
import DepositeCardtwo from "./DepositeCardtwo/DepositeCardtwo";
import DepositeCardthree from "./DepositeCardthree/DepositeCardthree";
import DepositeCardfour from "./DepositeCardfour/DepositeCardfour";
import Accordion from "react-bootstrap/Accordion";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useDispatch, useSelector } from "react-redux";


export default function Depositefunds() {
  return (
    <>
    
    <div>
      {!loading ?
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
      :
      <div className="bg-[#041e2777] sm:px-[30vw] px-[5vw] sm:py-[0vw] py-[10vw] sm:mt-[5px]  ">

            <div className="sm:mb-[20rem] sm:mt-[40px] ">
        <SkeletonTheme baseColor="#07303F" highlightColor="#9694955e" height="4rem" >
              <Skeleton   count={1} />
              <Skeleton className="sm:mt-[1.5vw]" count={1} />
              <Skeleton className="sm:mt-[1.5vw]" count={1} />
              <Skeleton className="sm:mt-[1.5vw]" count={1} />
        </SkeletonTheme>
            </div>
      </div>
      }
    </div>
</>
  );
}
