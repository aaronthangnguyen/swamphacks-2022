import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import AddQuestion from "./AddQuestion";
import AllEntries from "./AllEntries";

const AllQuestions = () => {
  return (
    <Box mt="2rem">
      <Flex justify="space-between">
        <Heading size="lg" mb="1rem">
          🔥 All
        </Heading>
        <AddQuestion />
      </Flex>
      <AllEntries />
    </Box>
  );
};

export default AllQuestions;
