import { Stack, Badge } from "@chakra-ui/react";
import React from "react";

const Topics = ({ topicTags }) => {
  return (
    <Stack direction="row">
      {topicTags?.map((topic) => {
        return <Badge key={topic.id}>{topic.name}</Badge>;
      })}
    </Stack>
  );
};

export default Topics;
