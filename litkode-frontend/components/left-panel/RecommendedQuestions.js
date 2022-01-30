import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Entry from "./Entry";
import RecommendedEntries from "./RecommendedEntries";

const RecommendedQuestions = () => {
  return (
    <Box>
      <Heading size="lg" mb="1rem">
        🌟 Recommended
      </Heading>
      <RecommendedEntries />
    </Box>
  );
};

export default RecommendedQuestions;
