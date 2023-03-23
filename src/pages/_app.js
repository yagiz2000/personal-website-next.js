import { Analytics } from "@vercel/analytics/react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/lib/chakra";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Analytics />
    </ChakraProvider>
  );
}
