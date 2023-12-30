import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#5843BE",
      secondary: "#0EBE7E",
      textColor: "rgba(0, 0, 0, 0.70)",
      customColor: {
        50: "rgba(0, 0, 0, 0.50)",
        90: "rgba(0, 0, 0, 0.90)",
        100: "#ECE9FF",
        bg: "#F6F4FF",
        blue: "#8372D6",
        orange: "#FA5F1C",
      },
    },
  },
  plugins: [daisyui],
};
export default config;
