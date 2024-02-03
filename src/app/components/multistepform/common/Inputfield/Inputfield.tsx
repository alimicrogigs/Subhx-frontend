import React, { ChangeEvent } from "react";

interface InputProps {
  type: "text" | "password" | "number";
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  showToggle?: boolean;
  onToggle?: () => void;
}

const Input: React.FC<InputProps> = ({
  type,
  value,
  onChange,
  placeholder,
  showToggle,
  onToggle,
}) => {
  return (
    <div className="w-[100%] relative text-[.8rem]">
      {showToggle && (
        <div
          onClick={onToggle}
          className="absolute top-0 right-[20px] flex justify-center items-center h-[100%] text-[#0C4E66] cursor-pointer"
        >
          {type === "password" ? "Show" : "Hide"}
        </div>
      )}
      <input
        className="w-[100%] py-[15px] text-black pl-[20px] rounded-[10px] focus:border-none focus:outline-none"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
