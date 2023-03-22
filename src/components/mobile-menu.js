import NextLink from "next/link";
import {
  Box,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Button,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function MobileMenu() {
  return (
    <>
      <Box display={{ base: "inline-block", md: "none" }}>
        <Menu>
          <MenuButton
            as={Button}
            _hover={{ bg: "none" }}
            _expanded={{ bg: "green.400" }}
            bg="green.700"
          >
            <HamburgerIcon />
          </MenuButton>
          <MenuList bg="green.700">
            <Link as={NextLink} href="/projects">
              <MenuItem bg="green.700">Projects</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
    </>
  );
}
