/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "enigma": "#04081D",
      },
      backgroundImage: {
        'blue-purple-gradient': 'radial-gradient(circle, #7C3AED, #3B82F6)',
      },
    },
  },
};
