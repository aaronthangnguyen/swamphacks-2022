import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";

const Statistics = () => {
  return (
    <Box>
      <Heading size="lg" mb="1rem">
        Statistics
      </Heading>
      <Box background="white" rounded="lg" p="1rem" boxShadow="base">
        <Flex justify="space-between">
          <Box>
            <Text fontWeight="bold" textColor="green.500">
              Easy
            </Text>
            <Text fontWeight="bold" textColor="orange.400">
              Medium
            </Text>
            <Text fontWeight="bold" textColor="red.500">
              Hard
            </Text>
          </Box>
          <Box>
            <Text fontWeight="medium">3/10</Text>
            <Text fontWeight="medium">5/10</Text>
            <Text fontWeight="medium">2/10</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Statistics;
