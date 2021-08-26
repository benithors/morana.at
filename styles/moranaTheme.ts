import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import moranaHeading from "./moranaHeading";
import moranaText from "./moranaText";
import moranaButton from "./moranaButton";


const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",

})

const moranaTheme = extendTheme({
  colors: {
    brand: {
      main: "#5F05AB",
      secondary: "#4CE6C4",
      mainText: "#FFFFFF",
      maintransparent: "#5F05ABB2",
      900: "#1a202c",
      black:"#1E1014",
      error:"#FF0000",
      white:"#FFFFFF",
      focusBorderColor:"blue",
    }
  },
  components: {
    Heading: moranaHeading,
    Text: moranaText,
    Button: moranaButton,
  },
  breakpoints,
})

export default moranaTheme
