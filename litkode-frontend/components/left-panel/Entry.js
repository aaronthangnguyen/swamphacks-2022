import {
  ChevronDownIcon,
  ChevronUpIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  Flex,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import useSWR from "swr";
import colors from "../data/colors.json";
import ratings from "../data/ratings.json";
import Rating from "./Rating";
import Topics from "./Topics";

const Entry = ({ id, rating = 0, lastPracticeDate = null }) => {
  const { isOpen, onToggle } = useDisclosure();
  const { data } = useSWR(`https://lcid.cc/info/${id}`);

  return (
    <>
      <Box
        background="white"
        rounded="md"
        p="1rem"
        mt="0.5rem"
        boxShadow="base"
        transition="all .2s ease-in-out"
        _hover={{
          boxShadow: "md",
          transform: "translateY(-0.125rem) scale(1.05)",
        }}
      >
        <Flex justify="space-between" align="center" gap={1}>
          <Text width="3rem">{id}</Text>
          <Text fontWeight="medium" flex={1} isTruncated>
            {data?.title}
          </Text>
          <Text
            width="8rem"
            fontWeight="semibold"
            color={colors[data?.difficulty]}
          >
            {data?.difficulty}
          </Text>
          <Text fontWeight="medium" width="8rem" color={colors[rating]}>
            {ratings[rating]}
          </Text>
          <IconButton
            size="sm"
            aria-label="Toggle collapse"
            icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            onClick={onToggle}
          />
          <a
            href={`https://lcid.cc/${id}`}
            rel="noreferrer noopener"
            target="_blank"
          >
            <IconButton
              size="sm"
              aria-label="Go to Leetcode"
              icon={<ExternalLinkIcon />}
            />
          </a>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <Flex mt="1rem">
            <Topics topicTags={data?.topicTags} />
          </Flex>
          <Flex justify="space-between" align="baseline">
            <Text color="gray.500">
              Last Practice:{" "}
              {lastPracticeDate
                ? lastPracticeDate.toLocaleString("en-US")
                : "Never"}
            </Text>
            <Rating />
          </Flex>
        </Collapse>
      </Box>
    </>
  );
};

export default Entry;
