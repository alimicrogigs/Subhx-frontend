import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00090C",
        borderline: "rgba(0, 191, 255, 0.30);",
        copywright: "rgba(0, 22, 43, 0.50);",
        textdull: "rgba(255, 255, 255, 0.60);",
      },
    },
  },
  plugins: [],
};
export default config;
