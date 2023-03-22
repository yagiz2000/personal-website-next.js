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
import { hobbiesList, bioInfoList } from "@/data/lists";
import { summaryText } from "@/data/texts";
import profilePhoto from "@/public/images/me.png";

export default function Index() {
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
