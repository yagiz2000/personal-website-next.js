import Image from "next/image";
import { Box, Button, Stack } from "@chakra-ui/react";
import { useState } from "react";

export default function FlagMenu() {
  const [flag, setFlag] = useState("Tr");
  return (
    <>
      <Stack direction="row">
        <Button variant="outline" fontSize="30">
          🇹🇷
        </Button>
        <Button variant="outline" fontSize="30">
          🇬🇧
        </Button>
      </Stack>
    </>
  );
}
