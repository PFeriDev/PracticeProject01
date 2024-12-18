import { Inter, Poppins } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["poppins", "sans-serif"],
        Inter: ["inter", "sans-serif"],
      },
      colors: {
        mainblack: "#070909",
        maingraytext: "#69696A",
        maingraybg: "#E6E6E6",
        mainwhite: "#FAFAFA",
        maingreen: "#37F205",
      },
    },
  },
  plugins: [],
} satisfies Config;
