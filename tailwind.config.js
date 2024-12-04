/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mi: {
          primary: "#045093",
          secondary: "#004BA0",
        },
        csk: {
          primary: "#FEE101",
          secondary: "#FFC727",
        },
        rcb: {
          primary: "#D82027",
          secondary: "#A1112A",
        },
        kkr: {
          primary: "#3E165B",
          secondary: "#FFD700",
        },
        dc: {
          primary: "#004C93",
          secondary: "#E51C23",
        },
        srh: {
          primary: "#F64A1D",
          secondary: "#F9D616",
        },
        rr: {
          primary: "#EA1A8E",
          secondary: "#003B77",
        },
        lsg: {
          primary: "#0E6655",
          secondary: "#FFCC29",
        },
        gt: {
          primary: "#0F284C",
          secondary: "#ECEFF1",
        },
        pxi: {
          primary: "#D71920",
          secondary: "#FFD700",
        },
      },
    },
  },
  plugins: [],
});
