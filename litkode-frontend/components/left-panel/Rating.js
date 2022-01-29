import { Box } from "@chakra-ui/react";
import { ReactionBarSelector } from "@charkour/react-reactions";
import React from "react";

const Rating = () => {
  return (
    <Box my="0.125rem">
      <ReactionBarSelector
        reactions={[
          { label: "Easy", node: <div>😎</div> },
          { label: "Medium", node: <div>😌</div> },
          { label: "Hard", node: <div>😭</div> },
        ]}
      />
    </Box>
  );
};

export default Rating;
