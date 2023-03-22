import Image from "next/image";
import {
  Heading,
  Box,
  Container,
  UnorderedList,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Layout from "@/layout";
import TitledContent from "@/components/titled-content";
import profilePhoto from "@/public/images/me.png";

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
  const bioInfoList = [
    { year: "2000", text: "Born in Izmir, Türkiye" },
    {
      year: "2018",
      text: "Completed İzmir Anadolu Lisesi (High School Degree)",
    },
    {
      year: "2018",
      text: "Started ITU as a maritime engineering student",
    },
    {
      year: "2020",
      text: "Undergraduate transfer to physics engineering in ITU",
    },
    {
      year: "2021",
      text: "In September started working as Full Stack Developer at Gameflex",
    },
  ];
  const summaryText =
    "I am a final year physics engineering student and a full-stack developer based in Istanbul (Izmir), Türkiye. Since the beginning of 2021, I have been focusing on improving my skills in web development, particularly in the areas of JavaScript. With experience gained through internships, projects, and school teams, I landed a full-time job in October 2021.";
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
                id="profilePhoto"
                priority
                src={profilePhoto}
                alt="Yagizcer"
              ></Image>
            </Container>
            <TitledContent title="Bio">
              <UnorderedList className="bio-info-list">
                {bioInfoList.map((bioInfo, i) => (
                  <ListItem key={i} className="bio-info-item">
                    <Text className="bio-info-year">{bioInfo.year}</Text>
                    <Text className="bio-info-text">{bioInfo.text}</Text>
                  </ListItem>
                ))}
              </UnorderedList>
            </TitledContent>
            <TitledContent title="Summary">
              <p>{summaryText}</p>
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
