import {
  Image,
  Box,
  Link,
  Card,
  Text,
  Heading,
  CardFooter,
  CardBody,
  Button,
  Stack,
} from "@chakra-ui/react";
import { IoLogoGithub } from "react-icons/io5";

export default function ProjectCard({ project }) {
  return (
    <>
      <Card minW="200" maxW="250">
        <CardBody p={0}>
          <Box>
            <Image
              position="relative"
              bottom={3}
              src={
                project.imgSrc ??
                `https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs`
              }
              alt="Project Img"
              borderRadius="lg"
              borderBottomRadius="none"
            />
          </Box>
          <Stack mt="6" spacing="3" px={6}>
            <Heading size="md">{project.name}</Heading>
            <Text>{project.description}</Text>
          </Stack>
        </CardBody>
        <CardFooter px={4}>
          <Link
            href={
              project.sourceCodeUrl ??
              `https://chakra-ui.com/docs/components/link/usage#external-link`
            }
          >
            <Button
              leftIcon={<IoLogoGithub fontSize={25} />}
              pl={3}
              variant="ghost"
              colorScheme="green"
            >
              Source
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}
