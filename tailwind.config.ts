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
      },
      colors: {
        primary: "#00090C",
        borderline: "rgba(0, 191, 255, 0.30);",
        copywright: "rgba(0, 22, 43, 0.50);",
        textdull: "rgba(255, 255, 255, 0.60);",
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
