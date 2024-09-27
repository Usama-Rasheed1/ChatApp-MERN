/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This should match your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'), // Make sure DaisyUI is included
  ],
};
