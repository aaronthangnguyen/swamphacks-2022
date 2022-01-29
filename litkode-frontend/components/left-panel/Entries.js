import { Box } from "@chakra-ui/react";
import React from "react";
import Entry from "./Entry";

const Entries = () => {
  const data = {
    data: [
      {
        id: "176",
        rating: 0,
        lastPracticeDate: new Date(),
      },
      {
        id: "89",
        rating: 2,
        lastPracticeDate: new Date(),
      },
      {
        id: "53",
        rating: 1,
        lastPracticeDate: new Date(),
      },
      {
        id: "23",
        rating: 3,
        lastPracticeDate: new Date(),
      },
    ],
  };
  return (
    <Box>
      {data?.data.map((entry) => {
        return <Entry key={entry.id} {...entry} />;
      })}
    </Box>
  );
};

export default Entries;
