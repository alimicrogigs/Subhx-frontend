"use client";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import ToasterCustom from "@/app/components/common/ToasterCustom/ToasterCustom";
interface copycardprops {
  heading: string;
  subheading: string;
}

const CopyCard: React.FC<copycardprops> = ({ heading, subheading }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(subheading);
      toast.custom(
        <ToasterCustom type="success" message={`${subheading} is copied `} />,
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
      {/* ............. */}
      <div className="w-[45%]">
        <div className="w-[100%]">{heading}</div>
        <div className=" relative w-[100%] flex ">
          <div
            onClick={handleCopy}
            style={{
              backgroundImage: "url(/dashboard/funds/copyicon.svg)",
            }}
            className="absolute w-[25px] h-[25px]  right-[20px] bottom-0 bg-center bg-no-repeat bg-contain "
          >
            {" "}
          </div>
          {subheading}
        </div>
      </div>
      {/* ............. */}
    </>
  );
};
export default CopyCard;
