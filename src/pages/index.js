import Image from "next/image";
import { Heading, Box, Container, useColorModeValue } from "@chakra-ui/react";
import Layout from "@/layout";
import photo from "@/public/images/me.png";

export default function Home() {
  return (
    <>
      <Layout>
        <main>
          <Container>
            <Heading mb={5}>Yağız Ceritoğlu</Heading>
            <Box
              borderRadius="lg"
              mb={6}
              p={3}
              textAlign="center"
              bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
            >
              Hello, I&apos;m an full stack developer based in Turkey!
            </Box>
            <Container display="flex" justifyContent="center" mb={5}>
              <Image
                style={{
                  borderRadius: "100%",
                  width: "150px",
                  maxWidth: "150px",
                  objectFit: "cover",
                  height: "150px",
                }}
                priority
                src={photo}
                alt="Yagizcer"
              ></Image>
            </Container>
          </Container>
        </main>
      </Layout>
    </>
  );
}
