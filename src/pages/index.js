import Image from "next/image";
import {
  Heading,
  Box,
  Container,
  UnorderedList,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import Layout from "@/layout";
import photo from "@/public/images/me.png";
import TitledContent from "@/components/titled-content";

export default function Index() {
  const hobbiesList = [
    "Travel 🧳",
    "Read 📚",
    "Listen 🎶 (also podcasts and people)",
    "Build 🧑🏻‍💻 (software and systems)",
    "Play 🎸 (begginer)",
    "Cars and Motor Sports 🏎️ (Tifosi)",
    "Exercise 🏃🏻 🏋🏻 🚴🏻‍♂️ 🏊🏻‍♂️",
    "Video Games 🎮",
  ];
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
              Hello, I&apos;m an full stack developer based in Turkey, Istanbul
              !
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
            <TitledContent title="Bio"></TitledContent>
            <TitledContent title="Summary">
              <p>sa</p>
            </TitledContent>
            <TitledContent title="Enjoys">
              <UnorderedList>
                {hobbiesList.map((hobby, i) => (
                  <ListItem ml={4} key={i}>
                    {hobby}
                  </ListItem>
                ))}
              </UnorderedList>
            </TitledContent>
          </Container>
        </main>
      </Layout>
    </>
  );
}
