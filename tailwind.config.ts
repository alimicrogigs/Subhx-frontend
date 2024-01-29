import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppinsBold: "Poppins-Bold",
        poppinsRegular: "Poppins-regular",
        poppinsSemibold: "Poppins-semibold",
        poppinsMedium: "Poppins-medium",
        poppinsThin: "Poppins-thin",
      },
      colors: {
        buttonborder: "#829CA5",
        dashboardbgone: "#07303F",
        activedashboardbutton: "#829CA5",
        primary: "#00090C",

        borderline: "rgba(130, 156, 165, 1);",
        copywright: "rgba(0, 22, 43, 0.50);",
        textdull: "rgba(255, 255, 255, 0.60);",
        dashboardbg: "#00162B",
        dashbgtrans: "rgba(4, 30, 39, 1)",
        priceGreen: "rgba(90, 215, 118, 1)",
        priceRed: "rgba(255, 4, 4, 1)",
        switchColor: "rgba(7, 48, 63, 1)",
        inputBg: "rgba(232, 244, 255, 1)",
        bordersBg: "rgba(130, 156, 165, 1)",
        

        maincolor: "#00090C",
        
        
       
       
       
        tableodd: "#002B50",
        absolutetrans: "rgba(4, 30, 39, .8)",

      },
      fontSize: {
        signupheading: "1.8rem",
        signupheadingmobile: "1.6rem",
      },
    },
  },
  plugins: [],
};
export default config;
