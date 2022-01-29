import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import Entry from "./Entry";

const RecommendedQuestions = () => {
  return (
    <Box>
      <Heading size="lg" mb="1rem">
        🌟 Recommended
      </Heading>
      <Entry id={176} />
      <Entry id={171} />
    </Box>
  );
};

export default RecommendedQuestions;
