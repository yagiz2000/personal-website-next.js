import { useColorModeValue, Text } from "@chakra-ui/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Text
        my={7}
        textAlign="center"
        color={useColorModeValue("black", "white")}
      >
        {currentYear} Copyright Yağız Ceritoğlu
      </Text>
    </>
  );
}
