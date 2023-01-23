import Head from "next/head";
import NextLink from "next/link";
import {
  Button,
  Box,
  Container,
  useColorModeValue,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import ThemeTogglerButton from "@/components/theme-toggler-button";
import MobileMenu from "@/components/mobile-menu";

export default function Navbar() {
  return (
    <>
      <Head>
        <title>Yağız Ceritoğlu</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="UTF-8"></meta>
        <link rel="icon" href="/favicon.ico?v=2" type="image/x-icon" />
      </Head>
      <main>
        <Box borderRadius="lg" mb={6} p={3}>
          <Container
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            bg="orange"
            maxW="container.md"
            p={2}
          >
            <Text fontWeight="bold">Yağız Ceritoğlu</Text>
            <Stack direction="row" alignItems="center">
              <Stack
                display={{ base: "none", md: "flex" }}
                direction="row"
                alignItems="center"
              >
                <Link as={NextLink} href="#">
                  Projects
                </Link>
                <Link as={NextLink} href="#">
                  Expriences
                </Link>
              </Stack>

              <ThemeTogglerButton></ThemeTogglerButton>
              <MobileMenu></MobileMenu>
            </Stack>
          </Container>
        </Box>
      </main>
    </>
  );
}
