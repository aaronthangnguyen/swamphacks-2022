import React from "react";
import { Box, Heading, IconButton, Flex } from "@chakra-ui/react";
import Entry from "./Entry";
import { AddIcon } from "@chakra-ui/icons";

const AllQuestions = () => {
  return (
    <Box mt="2rem">
      <Flex justify="space-between">
        <Heading size="lg" mb="1rem">
          🔥 All
        </Heading>
        <IconButton
          colorScheme="litkode"
          aria-label="Add a question"
          icon={<AddIcon />}
          ml="1rem"
        />
      </Flex>
      <Entry />
    </Box>
  );
};

export default AllQuestions;
