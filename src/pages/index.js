import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Button, Box, Container, useColorModeValue } from "@chakra-ui/react";
import Layout from "@/layout";

//import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <main>
          <Container>
            <Box
              borderRadius="lg"
              mb={6}
              p={3}
              textAlign="center"
              bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
            >
              Hello, I&apos;m an indie app developer based in Turkey!
            </Box>
          </Container>
        </main>
      </Layout>
    </>
  );
}
