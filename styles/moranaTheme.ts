import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import moranaHeading from "./moranaHeading";

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const moranaTheme = extendTheme({
  colors: {
    brand: {
      main: "#5F05AB",
      secondary: "#4CE6C4",
      mainText: "#FFFFFF",
      900: "#1a202c",
      black:"#1E1014",
      error:"#FF0000",
      white:"#FFFFFF",
      focusBorderColor:"blue",
    }
  },
  components: {
    Heading: moranaHeading,
  },
  fonts,
  breakpoints,
})

export default moranaTheme
