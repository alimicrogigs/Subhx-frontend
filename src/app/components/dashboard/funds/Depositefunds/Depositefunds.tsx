import React from "react";
import DepositeCard from "./DepositeCard/DepositeCard";
import DepositeCardone from "./DepositeCardone/DepositeCardone";
import DepositeCardtwo from "./DepositeCardtwo/DepositeCardtwo";
import DepositeCardthree from "./DepositeCardthree/DepositeCardthree";
import DepositeCardfour from "./DepositeCardfour/DepositeCardfour";
import Accordion from "react-bootstrap/Accordion";

export default function Depositefunds() {
<<<<<<< HEAD

  
=======
  // const handleDeposit = async () => {
  //   // Trigger deposit action

  //   try {
  //     const token =
  //       "25|$2y$10$fE/BJ4YpArv.P.lX0.2Lfe5ynp6fYe.vn/nu6X0yST2tvKgce8x42f4dbd8a1";
  //     // console.log(userPANresponse );
  //     const response = await axios.get(apiUrl + "upi-address", {
  //       headers: {
  //         token: token,
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ` + token,
  //       },
  //     });

  //     if (response.status === 200) {
  //       popupactive("deposite");
  //       var upiID = response.data.data[0].upi_id;
  //       console.log(upiID);
  //     }
  //   } catch (error) {
  //     console.error("Error UPI not generated:", error);
  //     // toast.error("Error fetching PAN details");
  //   }
  // };
>>>>>>> 6c921e71a3731e66f029af4270e40b08845b4174

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
