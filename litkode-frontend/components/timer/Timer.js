import { Button, Box, Center, Text, Flex } from "@chakra-ui/react";
import React from "react";

const Timer = () => {
  return (
    <Box>
      <Text fontWeight="bold" fontSize="3xl" display="block" textAlign="center">
        00:00
      </Text>
      <Flex gap="0.5rem">
        <Button
          bgColor="orange.400"
          color="white"
          width="50%"
          _hover={{ bgColor: "orange.500" }}
          _active={{ bgColor: "orange.600" }}
        >
          Start
        </Button>
        <Button width="50%">Reset</Button>
      </Flex>
    </Box>
  );
};

export default Timer;
