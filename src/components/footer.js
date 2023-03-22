import NextLink from "next/link";
import { useColorModeValue, Text, Link } from "@chakra-ui/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Text my={7} textAlign="center">
        {currentYear} Copyright Yağız Ceritoğlu,
      </Text>
      <Text my={2} textAlign="center">
        Developed with{" "}
        <Link as={NextLink} href="https://nextjs.org/">
          Next
        </Link>{" "}
        and{" "}
        <Link as={NextLink} href="https://chakra-ui.com/">
          Chakra UI
        </Link>
      </Text>
    </>
  );
}
