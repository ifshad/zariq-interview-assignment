/** @type {import('tailwindcss').Config} */

// import plugin from 'tailwindcss/plugin'
const plugin = require("tailwindcss/plugin");
// Rotate Plugin
const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      "transform-style": "preserve-3D",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      "backface-visibility": "hidden",
    },
  });
});

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1600px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        parallax: 'url("../public/Images/parallax_bg.jpg")',
      },
      colors: {
        "primary-color": "#FFFFFF",
        "secondary-color": "#6135D6",
        "accent-color": "#19099c",
      },
    },
  },
  plugins: [rotateY],
};
