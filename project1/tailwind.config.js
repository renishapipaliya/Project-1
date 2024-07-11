/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#151515",
        
      },
      textColor: {
        primary: "#9CA3AF",
      },
      borderColor: {
        primary: "#60636b",
        secondary: "#9CA3AF",
      },
    },
  },
  plugins: [],
};

