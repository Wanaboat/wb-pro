// src/gatsby-plugin-awesome/theme.js
import { extendTheme } from "@chakra-ui/react"
import theme1 from './theme1'
import theme2 from './theme2'

let theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
})

let breakpoints = ["30em", "48em", "62em", "80em", "90em", "100em"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];
breakpoints.xxl = breakpoints[4];
breakpoints.xxxl = breakpoints[5];

switch (process.env.THEME) {
    case 'theme1':
        theme = {
            // ...defaultTheme,
            ...theme1,
            // ...breakpoints
            breakpoints
          }
        break;
    case 'theme2':
        theme = {
            // ...defaultTheme,
            ...theme2,
            // ...breakpoints
          }
        break;
    default:
        theme = {
            // ...defaultTheme,
            ...theme1,
            // ...breakpoints
          }
        break;
}

// console.log( 'theme', theme )

export default theme