import { Heading, Container, Stack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import useStaticLists from "@/hooks/useStaticLists";
import Layout from "@/layout";
import ProjectCard from "@/components/project-card";

export default function Projects() {
  const { t } = useTranslation();
  const { projects } = useStaticLists();
  return (
    <>
      <Layout>
        <Container>
          <Heading mb={10} ml={5}>
            {t("labels.projects")}
          </Heading>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            wrap="wrap"
            rowGap={20}
          >
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </Stack>
        </Container>
      </Layout>
    </>
  );
}
