import { Box, Collapse, Flex, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Rating from "./Rating";

const Entry = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Box
        background="gray.50"
        rounded="md"
        p="1rem"
        mt="0.5rem"
        boxShadow="base"
        _hover={{
          boxShadow: "md",
        }}
        onMouseEnter={onToggle}
        onMouseLeave={onToggle}
      >
        <Flex justify="space-between" align="center">
          <p>ID Title Difficulty Rating</p>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <Flex justify="space-between" align="baseline">
            <Text fontWeight="medium">Last Practice: [Date]</Text>
            <Rating />
          </Flex>
        </Collapse>
      </Box>
    </>
  );
};

export default Entry;
