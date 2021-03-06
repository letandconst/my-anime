module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "featured-hero": "url('/src/images/demon-slayer.png')",
        "featured-anime": "url('/src/images/squad.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
