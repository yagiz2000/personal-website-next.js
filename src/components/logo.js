import Image from "next/image";
import { Link, Stack, Text } from "@chakra-ui/react";
import appleEmoji from "@/public/images/apple-emoji.png";

export default function Logo() {
  return (
    <>
      <Link href="/" id="navbarLogo">
        <Stack direction="row" alignItems="center">
          <Image alt="apple-emoji" width={60} height={60} src={appleEmoji} />
          <Text fontWeight="bold">Yağız Ceritoğlu</Text>
        </Stack>
      </Link>
    </>
  );
}
