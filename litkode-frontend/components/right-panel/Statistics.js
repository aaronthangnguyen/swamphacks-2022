import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import useSWR from "swr";
import ratings from "../data/ratings.json";
import colors from "../data/colors.json";

const Statistics = () => {
  const { data } = useSWR("https://litkode.tech/api/questions");
  const total = data?.data.length;
  const neveries = data?.data.filter(
    (question) => question.rating === 0
  ).length;
  const easies = data?.data.filter((question) => question.rating === 1).length;
  const normies = data?.data.filter((question) => question.rating === 2).length;
  const hardies = data?.data.filter((question) => question.rating === 3).length;
  return (
    <Box>
      <Heading size="lg" mb="1rem">
        Statistics
      </Heading>
      <Box background="white" rounded="lg" p="1rem" boxShadow="base">
        <Flex justify="space-between">
          <Box>
            <Text fontWeight="bold" textColor={colors[0]}>
              {ratings[0]}
            </Text>
            <Text fontWeight="bold" textColor={colors[1]}>
              {ratings[1]}
            </Text>
            <Text fontWeight="bold" textColor={colors[2]}>
              {ratings[2]}
            </Text>
            <Text fontWeight="bold" textColor={colors[3]}>
              {ratings[3]}
            </Text>
          </Box>
          <Box>
            <Text fontWeight="medium">
              {neveries}/{total}
            </Text>
            <Text fontWeight="medium">
              {easies}/{total}
            </Text>
            <Text fontWeight="medium">
              {normies}/{total}
            </Text>
            <Text fontWeight="medium">
              {hardies}/{total}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Statistics;
