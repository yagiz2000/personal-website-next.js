import { Container, Heading, Stack } from "@chakra-ui/react";

export default function TitledContent({ children, title }) {
  return (
    <>
      <Container>
        <Stack direction="column" columnGap="10px">
          <Heading as="h3" size="lg" variant="section-title">
            {title}
          </Heading>
          {children}
        </Stack>
      </Container>
    </>
  );
}
