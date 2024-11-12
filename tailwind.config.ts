import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
          roshanSky: "#C3EBFA",
          roshanSkyLight: "#EDF9FD",
          roshanPurple: "#CFCFFF",
          roshanPurpleLight: "#F1F0FF",
          roshanYellow: "#FAE27C",
          roshanYellowLight: "#FEFCE8"
      },
      screens:{
        bmd:"425px",
        bbmd:"375px"
      },
      boxShadow:{
        "roshanShadow":"0px 0px 40px rgba(0, 0, 0,0.5)"
      }
    },
  },
  plugins: [],
};
export default config;
