module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FBB852",
          200: "#FD9B36",
          300: "#FF7300",
          400: "#D45504",
          500: "#AB3F08",
        },
        secondary: {
          100: "#62D1C7",
          200: "#2EB1AB",
          300: "#009899",
          400: "#136872",
          500: "#1A4E5D",
        },
        neutral: {
          100: "#FFFFFF",
          200: "#F4F5F7",
          300: "#E1E1E1",
          400: "#737581",
          500: "#4A4B53",
          600: "#252525",
        },
        success: { 100: "#6EC08E", 200: "#3FA772", 300: "#267A55" },
        danger: { 100: "#F84696", 200: "#C1217F", 300: "#C1217F" },
        warning: { 100: "#F9D14E", 200: "#F9D14E", 300: "#F9D14E" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
