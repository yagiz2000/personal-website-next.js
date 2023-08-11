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
import profilePhoto from "@/public/images/me.png";
import i18n from "@/plugins/i18n";

export default function Index() {
  const {t} = i18n
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
              {t('sentences.introduction')}
            </Box>
            <Container display="flex" justifyContent="center" mb={5}>
              <Image
                id="profilePhoto"
                priority
                src={profilePhoto}
                alt="Yagizcer"
              ></Image>
            </Container>
            <TitledContent title={t('labels.bio')}>
              <UnorderedList className="bio-info-list">
                {bioInfoList.map((bioInfo, i) => (
                  <ListItem key={i} className="bio-info-item">
                    <Text className="bio-info-year">{bioInfo.year}</Text>
                    <Text className="bio-info-text">{bioInfo.text}</Text>
                  </ListItem>
                ))}
              </UnorderedList>
            </TitledContent>
            <TitledContent title={t('labels.summary')}>
              <p>{t('sentences.summary')}</p>
            </TitledContent>
            <TitledContent title={t('labels.enjoys')}>
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
