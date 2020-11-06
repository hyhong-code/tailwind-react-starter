// Extending defualt config
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#ff6363",
        secondary: {
          100: "#e2e2d5",
          200: "#888883",
        },
      },
      fontFamily: {
        body: ["Nunito"], // will generate class name: font-body
      },
    },
    namedGroups: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], // For nested groups
  },
  variants: {},
  plugins: [require("tailwindcss-named-groups")],
};
