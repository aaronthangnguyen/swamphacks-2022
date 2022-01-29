import { Box, Select, Flex } from "@chakra-ui/react";
import React from "react";
import { ReactionBarSelector } from "@charkour/react-reactions";

const Entry = () => {
  return (
    <Box
      background="gray.50"
      rounded="md"
      px="1rem"
      py="0.5rem"
      mt="0.5rem"
      boxShadow="base"
      _hover={{
        boxShadow: "md",
      }}
    >
      <Flex justify="space-between" align="center">
        <p>ID Title Difficulty Rating</p>
        <ReactionBarSelector
          reactions={[
            { label: "Easy", node: <div>😎</div> },
            { label: "Medium", node: <div>😌</div> },
            { label: "Hard", node: <div>😭</div> },
          ]}
        />
      </Flex>
    </Box>
  );
};

export default Entry;
