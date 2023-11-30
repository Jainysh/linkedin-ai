// chakra-theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },
  colors: {
    primary: {
      50: "#f6f9fa",
      100: "#dbeff2",
      200: "#b8e2eb",
      300: "#92d4e4",
      400: "#6fc8dd",
      500: "#52b8ce",
      600: "#3f94a5",
      700: "#2c6c7a",
      800: "#1a4450",
      900: "#09242a",
    },
    secondary: {
      50: "#fcfbf7",
      100: "#f8f3e4",
      200: "#f1e3bf",
      300: "#ebd395",
      400: "#e3c064",
      500: "#d6aa48",
      600: "#ad8640",
      700: "#856438",
      800: "#5c412f",
      900: "#392b25",
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        textTransform: "uppercase",
      },
      sizes: {
        md: {
          fontSize: "md",
          px: "6",
          py: "3",
        },
      },
      variants: {
        primary: {
          bg: "primary.500",
          color: "white",
          _hover: {
            bg: "primary.600",
          },
        },
        secondary: {
          bg: "secondary.500",
          color: "white",
          _hover: {
            bg: "secondary.600",
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: "bold",
      },
    },
  },
});

export default theme;
