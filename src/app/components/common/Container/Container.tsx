import React, { ReactNode } from "react";
import styles from "./Container.module.css";

interface ContainerProps {
  children?: ReactNode;
  isborder: boolean;
  topborder?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  isborder,
  topborder,
}) => {
  return (
    <section
      className={`${
        topborder ? `border-t` : ``
      } w-[100vw] bg-primary  border-borderline`}
    >
      <div
        className={`${styles.border_div} relative w-[95%] m-auto bg-primary ${
          isborder ? "border-l border-r" : ""
        } border-borderline`}
      >
        {children}
      </div>
    </section>
  );
};

export default Container;
