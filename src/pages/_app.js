import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Analytics } from "@vercel/analytics/react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/plugins/chakra";
import "@/plugins/i18n";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  const { i18n } = useTranslation();
  useEffect(() => {
    const locale = localStorage.getItem("lang") || "en";
    i18n.changeLanguage(locale);
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Analytics />
    </ChakraProvider>
  );
}
