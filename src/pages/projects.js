import { Heading, Container, Stack } from "@chakra-ui/react";
import Layout from "@/layout";
import ProjectCard from "@/components/project-card";
import { projects } from "@/data/lists";

export default function Projects() {
  

  return (
    <>
      <Layout>
        <Container>
          <Heading mb={10} ml={5}>
            Projects
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
