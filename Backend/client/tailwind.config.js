/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JSX/JS files in the src folder
    "./public/index.html"         // Ensure index.html is scanned
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

