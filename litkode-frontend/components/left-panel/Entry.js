import {
  Box,
  Collapse,
  Flex,
  Text,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import {
  ExternalLinkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@chakra-ui/icons";
import React from "react";
import Rating from "./Rating";

const Entry = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Box
        background="gray.50"
        rounded="md"
        p="1rem"
        mt="0.5rem"
        boxShadow="base"
        _hover={{
          boxShadow: "md",
        }}
      >
        <Flex justify="space-between" align="center" gap={1}>
          <Text width="6rem">ID</Text>
          <Text fontWeight="medium" flex={1}>
            Title
          </Text>
          <Text width="8rem">Difficulty</Text>
          <Text width="8rem">Rating</Text>
          <IconButton
            size="sm"
            aria-label="Toggle collapse"
            icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            onClick={onToggle}
          />
          <a
            href="https://leetcode.com/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <IconButton
              size="sm"
              aria-label="Go to Leetcode question"
              icon={<ExternalLinkIcon />}
            />
          </a>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <Flex mt="1rem">
            <Text>Topics</Text>
          </Flex>
          <Flex justify="space-between" align="baseline">
            <Text color="gray.500">Last Practice: [Date]</Text>
            <Rating />
          </Flex>
        </Collapse>
      </Box>
    </>
  );
};

export default Entry;
