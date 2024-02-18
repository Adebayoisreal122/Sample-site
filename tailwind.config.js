/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    './components/Wellcome',
    '.src/App.jsx'
  ],
  theme: {
    extend: {},
  },
 // TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com 
  darkMode: 'class',
  // ...

  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}


// require("tw-elements/dist/plugin.cjs")
