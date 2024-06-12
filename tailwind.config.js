/** @type {import('tailwindcss').Config} */

const COLORS = {
  primary: {
    1: "#00bf63",
    2: "#0085FF",
  },
  secondary: {
    1: "#DE5B0D",
    2: "#FF7A00",
    3: "#FE8C48",
    4: "#F99C64",
    4: "#FCC3A2",
  },
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...COLORS,
      },
      ringColor: {
        ...COLORS,
      },
      borderColor: {
        ...COLORS,
      },
      placeholderColor: {
        ...COLORS,
      },
      height: {
        dvh: "100dvh",
      },
      padding: {
        30: "120px",
      },
    },
  },
  plugins: [],
};
