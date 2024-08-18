import { useTranslation } from "react-i18next";

export default function useStaticLists() {
  const { t } = useTranslation();
  const hobbiesList = [
    t("hobbies.travel"),
    t("hobbies.read"),
    t("hobbies.listen"),
    t("hobbies.build"),
    t("hobbies.play"),
    t("hobbies.motorSports"),
    t("hobbies.exercise"),
    t("hobbies.videoGames"),
  ];

  const bioInfoList = [
    { year: "2000", text: t("sentences.2000Text") },
    {
      year: "2018",
      text: t("sentences.2018Text1"),
    },
    {
      year: "2018",
      text: t("sentences.2018Text2"),
    },
    {
      year: "2020",
      text: t("sentences.2020Text"),
    },
    {
      year: "2021",
      text: t("sentences.2021Text"),
    },
    {
      year: "2023",
      text: t("sentences.2023Text"),
    },
    {
      year:'2024',
      text:t("sentences.2024Text")
    }
  ];

  const projects = [
    {
      name:t('projects.cssConverter.name'),
      imgSrc:"https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTA0Z2pub2dxZnpnZm5xeXN6YzJ6Y2VlaWdiZzZzaHpyaGhhZmpjdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WimnOKnhI5YLI9uyWT/giphy.gif",
      description:t('projects.cssConverter.description'),
      sourceCodeUrl:"https://github.com/yagiz2000/jsx-css-converter"
    },
    {
      name: t("projects.todolist.name"),
      imgSrc: "https://media3.giphy.com/media/EloK5affruM9NQzQvZ/giphy.gif",
      description: t("projects.todolist.description"),
      sourceCodeUrl: "https://github.com/yagiz2000/MicrosoftTodoClone",
    },
    {
      name: t("projects.movieApp.name"),
      imgSrc: "https://media3.giphy.com/media/L5eOxeOcSQ8OZu3P47/giphy.gif",
      description: t("projects.movieApp.description"),
      sourceCodeUrl: "https://github.com/yagiz2000/MovieApp",
    },
    {
      name: t("projects.reduxCrudApp.name"),
      imgSrc: "https://media1.giphy.com/media/OAXoSSWQ0AYtO4piVN/giphy.gif",
      description: t("projects.reduxCrudApp.description"),
      sourceCodeUrl:
        "https://github.com/yagiz2000/Ecommerce-App-With-ReduxToolkit",
    },
    {
      name: t("projects.galleryVue3.name"),
      imgSrc: "https://media0.giphy.com/media/zCxOtq5MyVAS5nKTcc/giphy.gif",
      description: t("projects.galleryVue3.description"),
      sourceCodeUrl: "https://github.com/yagiz2000/gallery-vue3",
    },
    {
      name: t("projects.etsyScraper.name"),
      imgSrc: "https://media3.giphy.com/media/L5eOxeOcSQ8OZu3P47/giphy.gif",
      description: t("projects.etsyScraper.description"),
      sourceCodeUrl: "https://github.com/yagiz2000/EtsyScraper",
    },
    {
      name: t("projects.cryptoChatApp.name"),
      imgSrc: "https://media3.giphy.com/media/6zVIIgzkcOWr2QGgex/giphy.gif",
      description: t("projects.cryptoChatApp.description"),
      sourceCodeUrl: "https://github.com/yagiz2000/crypto-chat-app",
    },
   
  ];
  return { hobbiesList, bioInfoList, projects };
}
