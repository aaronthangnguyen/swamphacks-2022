import { Box } from "@chakra-ui/react";
import React from "react";
import useSWR from "swr";
import Entry from "./Entry";

const Entries = () => {
  const { data, error } = useSWR("http://localhost:8000/api/questions");

  if (error) return <Box>Error</Box>;
  if (!data) return <Box>Loading...</Box>;

  return (
    <Box>
      {data.data.map((entry) => {
        return <Entry key={entry.id} {...entry} />;
      })}
    </Box>
  );
};

export default Entries;
