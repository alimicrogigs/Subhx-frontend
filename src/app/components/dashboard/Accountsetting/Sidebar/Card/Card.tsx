import React from "react";

interface cardprops {
  logo: string;
  title: string;
  isActive?: boolean;
  iconscale?: string;
  action: () => void;
}

const Card: React.FC<cardprops> = ({
  logo,
  title,
  isActive,
  iconscale,
  action,
}) => {
  return (
    <>
      {/* ..... */}
      <div
        onClick={action}
        style={{ cursor: "pointer" }}
        className="relative rounded-[3px] text-[1.2rem] flex items-center py-[18px] bg-[#07303F] pl-[25px] gap-[25px] font-poppinsMedium overflow-hidden mb-[2px]"
      >
        <div
          style={{
            backgroundImage: `url(${logo})`,
            transform: `scale(${iconscale ? iconscale : 1})`,
          }}
          className="w-[20px] h-[25px] bg-center bg-no-repeat bg-contain"
        ></div>
        {title}
        {/* only show on active button */}
        {isActive && (
          <div className="absolute h-[100%] w-[7px] bg-[#F5CD8E] top-0 left-0"></div>
        )}
      </div>
      {/* ...... */}
    </>
  );
};
export default Card;
