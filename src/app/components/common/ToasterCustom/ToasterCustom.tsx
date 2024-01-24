import React from "react";
import styles from "./page.module.css";

interface customstoasterprops {
  message: string;
  type: string;
}

const ToasterCustom: React.FC<customstoasterprops> = ({ message, type }) => {
  let gif;
  if (type == "error") {
    gif = "/toastergif/error.svg";
  }
  if (type == "success") {
    gif = "/toastergif/success.svg";
  }
  if (type == "mismatch") {
    gif = "/toastergif/mismatch.svg";
  }

  return (
    <>
      <div className="flex rounded-[10px] bg-white justify-center items-center pl-[20px] pr-[20px]">
        <div
          style={{
            backgroundImage: `url(${gif})`,
          }}
          className="gif w-[50px] h-[60%]  bg-center bg-contain bg-no-repeat"
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
