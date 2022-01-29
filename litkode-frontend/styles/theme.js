import { extendTheme } from "@chakra-ui/react";
import "@fontsource/ibm-plex-sans";

const theme = extendTheme({
  fonts: {
    heading: "IBM Plex Sans",
    body: "IBM Plex Sans",
  },
  styles: {
    global: {
      body: {
        bgGradient: "linear-gradient(to-r, teal.500, green.500)",
      },
    },
  },
});

export default theme;
