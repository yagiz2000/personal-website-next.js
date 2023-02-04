import { useState } from "react";
import { Box, Button, Stack } from "@chakra-ui/react";

export default function FlagMenu() {
  const [flag, setFlag] = useState("Tr");

  return (
    <>
      <Stack direction="row">
        <Button className="flag-button" fontSize="25">
          🇹🇷
        </Button>
        <Button className="flag-button" fontSize="25">
          🇬🇧
        </Button>
      </Stack>
    </>
  );
}
