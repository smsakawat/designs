module.exports = {
  content: ["./*.html", "./*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        palanquin: ["Palanquin", "sans-serif"],
      },
      colors: {
        primary: "#FF6452",
        "primary-shade": "#e65a4a",
        "primary-tint": "#ff7463",
        "slate-gray": "#6D6D6D",
        "gray-one": "#ECEEFF",
        "gray-two": "#F5F6FF",
        "gray-three": "rgba(255, 255, 255, 0.80)",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        hero: "url('assets/images/collection-background.svg')",
        card: "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
