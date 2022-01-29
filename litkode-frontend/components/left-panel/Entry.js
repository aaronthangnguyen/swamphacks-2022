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
import Rating from "./Rating";
import Topics from "./Topics";
import colors from "../data/colors.json";

const Entry = ({ id, rating = "", lastPracticeDate = new Date(0) }) => {
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
        _hover={{
          boxShadow: "md",
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
          <Text width="8rem">{rating}</Text>
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
                ? "Never"
                : lastPracticeDate.toLocaleDateString()}
            </Text>
            <Rating />
          </Flex>
        </Collapse>
      </Box>
    </>
  );
};

export default Entry;
