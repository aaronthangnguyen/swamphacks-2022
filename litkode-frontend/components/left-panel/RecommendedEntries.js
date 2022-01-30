import { Box } from "@chakra-ui/react";
import React from "react";
import useSWR from "swr";
import Entry from "./Entry";

const RecommendedEntries = () => {
  const { data, error } = useSWR("https://litkode.tech/api/recommendations/7");

  if (error) return <Box>Error</Box>;
  if (!data) return <Box>Loading...</Box>;

  return (
    <Box>
      {data?.data?.map((entry) => {
        return <Entry key={entry.id} {...entry} />;
      })}
    </Box>
  );
};

export default RecommendedEntries;
