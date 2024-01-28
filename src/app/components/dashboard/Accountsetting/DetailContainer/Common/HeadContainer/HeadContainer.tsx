import React from "react";

interface HeadContainerprops {
  logo: string;
  title: string;
}
const HeadContainer: React.FC<HeadContainerprops> = ({ logo, title }) => {
  return (
    <>
      <div className="w-[100%] flex text-[1.5rem] text-white gap-[20px]">
        <div
          style={{
            backgroundImage: `url(${logo})`,
          }}
          className="h-[40px] w-[50px] bg-center bg-no-repeat bg-contain"
        ></div>
        <p>{title}</p>
      </div>
    </>
  );
};

export default HeadContainer;
