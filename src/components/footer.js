import NextLink from "next/link";
import { Text, Link } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <>
      <Text my={7} textAlign="center">
        {currentYear} Copyright Yağız Ceritoğlu,
      </Text>
      <Text my={2} textAlign="center">
        {t("sentences.developedWith")}{" "}
        <Link as={NextLink} href="https://nextjs.org/">
          Next
        </Link>{" "}
        {t("labels.and")}{" "}
        <Link as={NextLink} href="https://chakra-ui.com/">
          Chakra UI
        </Link>
      </Text>
    </>
  );
}
