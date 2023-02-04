import { Heading, Container, Stack } from "@chakra-ui/react";
import Layout from "@/layout";
import ProjectCard from "@/components/project-card";

export default function Projects() {
  const projects = [
    {
      name: "Microsoft Todo List Clone",
      imgSrc: "https://media3.giphy.com/media/EloK5affruM9NQzQvZ/giphy.gif",
      description:
        "Microsoft todo list desktop app clone, there is no external css library for that project, styles written in pure css. Also it is not a pre written project from youtube or udemy tutorial.",
      sourceCodeUrl: "https://github.com/yagiz2000/MicrosoftTodoClone",
    },
    {
      name: "Movie App",
      imgSrc: "https://media3.giphy.com/media/L5eOxeOcSQ8OZu3P47/giphy.gif",
      description:
        "A movie app for searching movies and criticize them out. App has authentication, account page. Also movie comments are real time triggered.",
      sourceCodeUrl: "https://github.com/yagiz2000/MovieApp",
    },
    {
      name: "Redux Crud App",
      imgSrc: "https://media1.giphy.com/media/OAXoSSWQ0AYtO4piVN/giphy.gif",
      description:
        "An app for crud purposes. Aim of this project was used to best practice redux toolkit and being familiar with state management of react.  ",
      sourceCodeUrl:
        "https://github.com/yagiz2000/Ecommerce-App-With-ReduxToolkit",
    },
    {
      name: "Gallery Vue 3(npm package)",
      imgSrc: "https://media0.giphy.com/media/zCxOtq5MyVAS5nKTcc/giphy.gif",
      description:
        "An npm package for handling images as gallery view in web apps. It is easy to use, lightweight and has simple implementation. Besides compatible with mobile.",
      sourceCodeUrl: "https://github.com/yagiz2000/gallery-vue3",
    },
    {
      name: "Etsy Scraper",
      imgSrc: "https://media3.giphy.com/media/L5eOxeOcSQ8OZu3P47/giphy.gif",
      description:
        "An app for scraping product data from etsy.com urls. From given url script scrapes product's image price and name than writes to MongoDB. ",
      sourceCodeUrl: "https://github.com/yagiz2000/EtsyScraper",
    },
    {
      name: "Crypto Chat App",
      imgSrc: "https://media3.giphy.com/media/6zVIIgzkcOWr2QGgex/giphy.gif",
      description:
        "An app for crypto currencies.  You can track prices for various periods and chat real time with other users.",
      sourceCodeUrl: "https://github.com/yagiz2000/crypto-chat-app",
    },
  ];
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
