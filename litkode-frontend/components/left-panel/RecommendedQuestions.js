import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import Entry from "./Entry";

const RecommendedQuestions = () => {
  return (
    <Box>
      <Heading size="lg" mb="1rem">
        🌟 Recommended
      </Heading>
      <Entry />
    </Box>
  );
};

export default RecommendedQuestions;
