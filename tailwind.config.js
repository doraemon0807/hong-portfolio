/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0e0e0e",
      },
      animation: {
        swapWordAnimation: "swapWords 9s ease-in-out infinite",
      },
      fontFamily: {
        Roboto: ["Roboto"],
        Lobster: ["Lobster"],
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
