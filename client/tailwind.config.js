/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      red: colors.red,
      white: colors.white,
      gray: colors.gray,
      slate: colors.slate,
      orange: colors.orange,
      blue: colors.blue,
      pink: colors.pink,
    },
    backgroundPosition: {
      bottom: 'bottom',
      'bottom-4': "center bottom 1rem",
      center: 'center'
    },
    extend: {
      boxShadow: {
        btn: "0px 8px 12px rgba(253, 116, 1, 0.3)",
        base: "0px 12px 50px rgba(0, 0, 0, 0.1)",
        dropdown: "0px 7px 29px 0px rgba(100, 100, 111, 0.2)"
      },
    },
  },
  plugins: [],
};
