/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        broom: {
          50: "#fdfee8",
          100: "#fdffc2",
          200: "#feff87",
          300: "#fff943",
          400: "#ffec19",
          500: "#efd203",
          600: "#cea400",
          700: "#a47604",
          800: "#885c0b",
          900: "#734b10",
          950: "#432705",
        },
        lochmara: {
          50: "#f2f8fd",
          100: "#e3f0fb",
          200: "#c1e1f6",
          300: "#8bc8ee",
          400: "#4dace3",
          500: "#2691d1",
          600: "#197bbd",
          700: "#145c90",
          800: "#154f77",
          900: "#174263",
          950: "#0f2b42",
        },
        "athens-gray": {
          50: "#f6f8f9",
          100: "#eef0f2",
          200: "#d7dce0",
          300: "#b3bec6",
          400: "#8a9aa6",
          500: "#6c7e8b",
          600: "#566673",
          700: "#47535d",
          800: "#3d474f",
          900: "#363e44",
          950: "#24282d",
        },
        emerald: {
          50: "#f1fcf3",
          100: "#defae6",
          200: "#bff3cd",
          300: "#8ee7a7",
          400: "#44cf6c",
          500: "#2eb956",
          600: "#209944",
          700: "#1d7838",
          800: "#1c5f30",
          900: "#194e2a",
          950: "#082b14",
        },
        blush: {
          50: "#fcf3f7",
          100: "#fbe8f1",
          200: "#f8d2e5",
          300: "#f4adce",
          400: "#ec7aad",
          500: "#e2528d",
          600: "#c62e65",
          700: "#b32353",
          800: "#942045",
          900: "#7c1f3c",
          950: "#4b0c20",
        },
        primary: '#141725',
        "atlas-red": '#fb3667',
        "dark": '#444a5e',
        subdued: '#737994',
        'light-gray': '#202437'
      },
      backgroundImage: {
        'sidenav-gradient': 'linear-gradient(180deg, rgba(251, 54, 103, 0.14) 0%, rgba(251, 54, 103, 0.04) 65.29%)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
],
};
