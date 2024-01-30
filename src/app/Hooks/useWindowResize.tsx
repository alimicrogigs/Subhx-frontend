import { useEffect, useState } from "react";

let resizeTimer:any;

const useWindowResize = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 640);
  };

  useEffect(() => {
    // Initial check on mount
    handleResize();

    // Listen for window resize events
    const handleResizeThrottled = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        handleResize();
      }, 250);
    };

    window.addEventListener("resize", handleResizeThrottled);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResizeThrottled);
    };
  }, []);

  return isMobile;
};

export default useWindowResize;
