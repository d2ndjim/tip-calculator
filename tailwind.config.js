/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        strongCyan: "hsl(172, 67%, 45%)",
        veryDarkCyan: "hsl(183, 100%, 15%)",
        darkGrayishCyan: "hsl(186, 14%, 43%)",
        lightGrayishCyan: "hsl(185, 41%, 84%)",
        grayishCyan: "hsl(184, 14%, 56%)",
        veryLightGrayishCyan: "hsl(189, 41%, 97%)",
        White: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

