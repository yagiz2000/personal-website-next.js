import { Heading, Container, Stack } from "@chakra-ui/react";
import Layout from "@/layout";
import ProjectCard from "@/components/project-card";

export default function Experiences() {
  const projects = [
    { name: "Microsoft Todo List Clone" },
    { name: "Social Media App" },
    { name: "Type Script Todo" },
    { name: "Gallery Vue" },
    { name: "sa" },
    { name: "tes" },
  ];
  return (
    <>
      <Layout>
        <Container>
          <Heading mb={5}>Projects</Heading>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            wrap="wrap"
            rowGap={5}
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
