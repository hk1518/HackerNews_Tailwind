module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: { "8rem": "0.85rem", sm: "0.875rem", px13: "13px", px15: "15px" },
    colors: {
      primary: "rgb(243, 243, 243)",
      secondary: "rgb(136, 136, 136)",
      header: "orangered",
    },
    extend: {},
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
