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
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        "Player-Display": ["Playfair Display", "serif"],
        oswald: ["Oswald", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      colors: {
        primary: "#ea062b",
      },
    },
  },
  plugins: [],
  important: true,
};
export default config;
