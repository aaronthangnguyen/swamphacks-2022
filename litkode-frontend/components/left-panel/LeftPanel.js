import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Entry from "./Entry";

const LeftPanel = () => {
  return (
    <Box>
      <Box>
        <Heading size="lg" mb="1rem">
          🌟 Recommended
        </Heading>
        <Entry />
      </Box>
      <Box mt="2rem">
        <Heading size="lg" mb="1rem">
          🔥 All
        </Heading>
        <Entry />
      </Box>
    </Box>
  );
};

export default LeftPanel;
