const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "jazz-yellow": "#FBED2A",
        "digital-gray": "#E3E5E3",
      },
      fontFamily: {
        jazzExtended: ["wt_jazzbold_extended", ...defaultTheme.fontFamily.sans],
        jazzCondensed: [
          "wt_jazzbold_semi_condensed",
          ...defaultTheme.fontFamily.sans,
        ],
        sans: ["monument", ...defaultTheme.fontFamily.sans],
        mono: ["monument_regular_mono", ...defaultTheme.fontFamily.mono],
      },
    },
    plugins: [],
  },
};
