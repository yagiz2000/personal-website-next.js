import { useState, useEffect } from "react";
import { Menu, MenuItem, Button, MenuButton, MenuList } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function FlagMenu() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "en");
  useEffect(() => {
    const lang = localStorage.getItem("lang") || "en";
    setLanguage(lang);
  }, []);

  const onChangeLangue = (lang) => {
    localStorage.setItem("lang", lang);
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <>
      <Menu>
        <MenuButton as={Button} fontSize="32">
          {language === "tr" ? "🇹🇷" : "🇬🇧"}
        </MenuButton>
        <MenuList>
          <MenuItem fontSize="32" onClick={() => onChangeLangue("tr")}>
            🇹🇷
          </MenuItem>
          <MenuItem fontSize="32" onClick={() => onChangeLangue("en")}>
            🇬🇧
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
