import {
  Box,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function MobileMenu() {
  return (
    <>
      <Box display={{ base: "inline-block", md: "none" }}>
        <Menu>
          <MenuButton as={Button}>
            <HamburgerIcon />
          </MenuButton>
          <MenuList>
            <MenuItem>Projects</MenuItem>
            <MenuItem>Experiences</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </>
  );
}
