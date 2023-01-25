import "@/styles/globals.scss";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/lib/chakra";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
