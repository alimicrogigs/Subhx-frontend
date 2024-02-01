import React, { ChangeEvent } from "react";
<<<<<<< HEAD
=======

>>>>>>> a25303134637797efea753a005790913f34dea8b
interface InputProps {
  type: "text" | "password" | "number";
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  showToggle?: boolean;
  onToggle?: () => void;
  bgColor?: string
}

const Input: React.FC<InputProps> = ({
  type,
  value,
  onChange,
  placeholder,
  showToggle,
  onToggle,
  bgColor,
}) => {
  return (
    <div className="w-[100%] relative">
      {showToggle && (
        <div
          onClick={onToggle}
          // style={bgColor}
          className="absolute top-0 right-[20px] flex justify-center   items-center h-[100%] text-[#DC04FF] cursor-pointer"
        >
          {type === "password" ? "Show" : "Hide"}
        </div>
      )}
      
      <input
        className={`w-[100%] py-[15px] border-5 border-${bgColor}-500 text-black pl-[20px]  rounded-[10px]  focus:outline-none`}
        type={type}
        value={value}
        onChange={onChange}
        
        // style={{ borderColor: inputBorderColor }} 
        placeholder={placeholder}
      />
    </div>
  );
};
<<<<<<< HEAD
export default Input;
=======

export default Input;
>>>>>>> a25303134637797efea753a005790913f34dea8b
