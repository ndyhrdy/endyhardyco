const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    fontSize: {
      xs: defaultTheme.fontSize.sm,
      sm: defaultTheme.fontSize.base,
      base: defaultTheme.fontSize.lg,
      lg: defaultTheme.fontSize.xl,
      xl: defaultTheme.fontSize["2xl"],
      "2xl": defaultTheme.fontSize["3xl"],
      "3xl": defaultTheme.fontSize["4xl"],
      "4xl": defaultTheme.fontSize["5xl"],
      "5xl": defaultTheme.fontSize["6xl"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },

    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
};
