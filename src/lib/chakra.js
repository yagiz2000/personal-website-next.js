import { extendTheme } from "@chakra-ui/react";

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

export const theme = extendTheme({ components });
