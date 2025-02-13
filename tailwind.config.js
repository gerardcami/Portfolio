/** @type {import('tailwindcss').Config} */

import { fontFamily, fontSize } from "tailwindcss/defaultTheme";
 
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
    fontFamily: {
      sans: ["Satoshi", ...fontFamily.sans],
      header: ["greycliff-cf"],
    },
    fontSize: {
      xs: [".8125rem", { lineHeight: "1.5rem" }],
      sm: [".875rem", { lineHeight: "1.5rem" }],
      md: ["1rem", { lineHeight: "1.5rem" }],
    },
    colors: {
      "raisin-black": "#292524",
      emphasis: "#2DE1C2",
    },},
  },
  plugins: [],
};