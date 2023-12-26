import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#fa254a",
      secondary: "#fa864a",
      customColor: {
        100: "#af24d1",
        500: "#cf4551",
        700: "#df7f21",
      },
    },
  },
  plugins: [],
};
export default config;
