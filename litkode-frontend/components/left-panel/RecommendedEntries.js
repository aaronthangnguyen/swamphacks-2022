import { Box } from "@chakra-ui/react";
import React from "react";
import useSWR from "swr";
import Entry from "./Entry";

const RecommendedEntries = () => {
  const { data, error } = useSWR("http://127.0.0.1:8000/api/recommendations/4");

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
