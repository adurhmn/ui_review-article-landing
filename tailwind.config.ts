import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "void-gradient":
          "linear-gradient(270.04deg, #6C57DB 0.05%, rgba(12, 25, 31, 0.79) 97.84%)",
        "peace-gradient":
          "linear-gradient(270deg, rgba(108, 87, 219, 0.2) 1.58%, #E4DFFF 88.72%)",
      },
      colors: {
        x: {
          blue: {
            DEFAULT: "#6C57DB",
            light: "rgba(108, 87, 219, 0.32)", // #6C57DB at 32% opacity
          },
          green: {
            DEFAULT: "#213D39",
          },
          white: {
            DEFAULT: "#FFFFFF",
            sky: "#F4F9FF",
          },
          slate: {
            100: "#F2F2F2",
            200: "#F3F3F3",
            300: "#E8E9EA",
            400: "#C2C2C2",
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addBase({
        h1: {
          fontWeight: "900",
          fontSize: "48px",
          lineHeight: "150%",
        },
        h2: {
          fontWeight: "700",
          fontSize: "32px",
          lineHeight: "120%",
        },
        h3: {
          fontWeight: "600",
          fontSize: "28px",
        },
        h4: {
          fontWeight: "700",
          fontSize: "24px",
        },
        "h4-bold": {
          fontWeight: "600",
          fontSize: "24px",
        },
        h5: {
          fontSize: "20px",
          fontWeight: "300",
        },
        h6: {
          fontSize: "16px",
          fontWeight: "300",
          lineHeight: "150%",
        },
        "h6-bold": {
          fontSize: "16px",
          fontWeight: "500",
          lineHeight: "150%",
        },
        h7: {
          fontSize: "12px",
          fontWeight: "300",
          lineHeight: "120%",
        },
      });
    }),
  ],
};
export default config;
