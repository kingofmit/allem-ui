/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "../../packages/native/src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#e6fffe",
          100: "#b3fffa",
          200: "#80fff6",
          300: "#4dfff2",
          400: "#1affee",
          500: "#00E5CC",
          600: "#00b8a3",
          700: "#008a7a",
          800: "#005c52",
          900: "#002e29",
          950: "#001a17",
        },
      },
    },
  },
  plugins: [],
};
