import { IconButton, useColorModeValue, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function ThemeTogglerButton() {
  const { toggleColorMode } = useColorMode();
  return (
    <>
      <IconButton
        bg={useColorModeValue("blackAlpha.500", "orange")}
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        onClick={toggleColorMode}
      ></IconButton>
    </>
  );
}
