// eslint-disable-next-line no-undef
const withMT = require("@material-tailwind/react/utils/withMT");
 
// eslint-disable-next-line no-undef
module.exports = withMT({
  content: [
  "./index.html", 
  "./src/**/*.{vue,js,ts,jsx,tsx}"
],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  colors: {
    'hoverMenu': '#21232b'
  },
  plugins: [],
});