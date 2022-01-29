import { extendTheme } from "@chakra-ui/react";
import "@fontsource/ibm-plex-sans";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-sans/700.css";

const theme = extendTheme({
  fonts: {
    heading: "IBM Plex Sans",
    body: "IBM Plex Sans",
  },
  styles: {
    global: {
      body: {
        // bgGradient: "linear(to-tr, #4158D0, #C850C0, #FFCC70)",
        bgGradient: "linear(to-br, #FBAB7E, #F7CE68)",
      },
    },
  },
  colors: {
    litkode: {
      500: "#ED8936",
      600: "#DD6B20",
      700: "#C05621",
    },
  },
});

export default theme;
