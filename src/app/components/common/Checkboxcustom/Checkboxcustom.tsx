import React from "react";
import styles from "./page.module.css";

interface Checkboxcustomprops {
  id: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  top?: string;
}

const Checkboxcustom: React.FC<Checkboxcustomprops> = ({
  id,
  checked,
  onChange,
  top,
}) => {
  return (
    <>
      <label className={styles.custom_checkbox} htmlFor={id}>
        <input
          id={id}
          className="h-[100%] w-[20px]"
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <span
          style={{ top: `${top}` }}
          className={`${styles.checkmark}`}
        ></span>
      </label>
    </>
  );
};
export default Checkboxcustom;
