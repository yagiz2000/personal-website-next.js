import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("orange.200", "gray.800")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 25,
        textUnderlineOffset: 6,
        textDecorationColor: "green.800",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
};

const config = {
  initialColorMode: "dark",
};

export const theme = extendTheme({ components, config, styles });
