import React, { useState, ChangeEvent } from "react";
import DepositeCard from "../DepositeCard/DepositeCard";
import ToasterCustom from "@/app/components/common/ToasterCustom/ToasterCustom";
import toast from "react-hot-toast";
interface props {
  UPIid: string;
}

const DepositeCardone: React.FC<props> = ({ UPIid })=> {

interface props {
  UPIid: string;
}

  const upi = "Payments.bit24hr@upi";

  const [UPIrrnnumber, setUPIrrnnumber] = useState("");

  const handleupisubmit = () => {
    console.log({ UPIrrnnumber })
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUPIrrnnumber(e.target.value);

  };
  const handlecopyupi = async () => {
    try {
      await navigator.clipboard.writeText(upi);
      toast.custom(
        <ToasterCustom type="success" message={`${upi} is copied `} />,
        {
          position: "top-right", // Set the position (e.g., "top-center")
          duration: 1000, // Set the duration in milliseconds
        }
      );
    } catch (err) {
      console.error("Unable to copy text to clipboard:", err);
      <ToasterCustom
        type="error"
        message={`Something went when copy to clipboard`}
      />;
    }
  };

  return (
    <>
      <DepositeCard eventKey="3" heading="UPI ID" >
        <div className="w-[100%] flex justify-between px-[20px] py-[20px] border-[1px] rounded-[5px]">
          <p>{UPIid}</p>
          <div
            onClick={handlecopyupi}
            style={{
              backgroundImage: "url(/dashboard/funds/copyicon.svg)",
            }}
            className="w-[25px] h-[px] bg-center bg-no-repeat bg-contain border-[red]"
          ></div>
        </div>
        {/* ........... */}
        <div className="w-[100%] mt-[20px]">
          <input
            className="w-[100%] bg-[#233D55] pl-[20px] py-[20px] focus:outline-none focus:border-none"
            type="text"
            placeholder="Enter RRN / UTN Number"
            value={UPIrrnnumber}
            onChange={handleInputChange}
          />
        </div>
        {/* .......... */}
        <div className="mt-[30px]">
          <div
            onClick={handleupisubmit}
            style={{
              backgroundImage: "url(/dashboard/funds/longsubbutton.svg)",
            }}
            className="w-[100%] m-auto text-center bg-center bg-no-repeat bg-contain py-[5px] text-[2rem] "
          >
            Submit
          </div>
        </div>
      </DepositeCard>
    </>
  );
};
export default DepositeCardone;
