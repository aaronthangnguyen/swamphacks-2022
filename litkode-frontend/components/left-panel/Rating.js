import { Box } from "@chakra-ui/react";
import { ReactionBarSelector } from "@charkour/react-reactions";
import React from "react";
import { useSWRConfig } from "swr";
import ratings from "../data/ratings.json";

const Rating = ({ id }) => {
  const { mutate } = useSWRConfig();

  const handleUpdate = async (label) => {
    const rating = ratings[label];
    await fetch(`http://170.187.152.13:8000/api/questions`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        rating: rating,
        lastPracticeDate: new Date().toJSON(),
      }),
    });
    mutate("http://170.187.152.13:8000/api/questions");
  };
  return (
    <Box mb="0.25rem">
      <ReactionBarSelector
        reactions={[
          { label: "Easy", value: "1", node: <div>😎</div> },
          { label: "Medium", node: <div>😌</div> },
          { label: "Hard", node: <div>😱</div> },
        ]}
        onSelect={(label) => handleUpdate(label)}
      />
    </Box>
  );
};

export default Rating;
