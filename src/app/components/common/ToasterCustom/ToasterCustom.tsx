import React from "react";
import styles from "./page.module.css";

interface customstoasterprops {
  message: string;
  gif: string;
}

const ToasterCustom: React.FC<customstoasterprops> = ({ message, gif }) => {
  return (
    <>
      <div className="flex rounded-[10px] bg-white justify-center items-center pl-[10px]">
        <div
          style={{
            backgroundImage: `url(${gif})`,
          }}
          className="gif w-[50px] h-[80%]  bg-center bg-contain bg-no-repeat"
        ></div>
        <div
          className={`${styles.lineartext} py-[20px]  px-[10px] max-w-[300px]`}
        >
          {message}
        </div>
      </div>
    </>
  );
};

export default ToasterCustom;
