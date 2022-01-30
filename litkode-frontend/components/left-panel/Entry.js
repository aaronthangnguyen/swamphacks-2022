import {
  ChevronDownIcon,
  ChevronUpIcon,
  ExternalLinkIcon,
  DeleteIcon,
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
import useSWR, { useSWRConfig } from "swr";
import colors from "../data/colors.json";
import ratings from "../data/ratings.json";
import Rating from "./Rating";
import Topics from "./Topics";

const Entry = ({ id, rating = 0, lastPracticeDate = null }) => {
  const { isOpen, onToggle } = useDisclosure();
  const { data } = useSWR(`https://lcid.cc/info/${id}`);
  const { mutate } = useSWRConfig();

  const handleDelete = async () => {
    await fetch("https://litkode.tech/api/questions", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });

    mutate("https://litkode.tech/api/questions");
  };
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
          transform: "translateY(-0.125rem) scale(1.02)",
        }}
      >
        <Flex justify="space-between" align="center" gap={1}>
          <Text width="3rem">{id}</Text>
          <Text fontWeight="medium" width="17rem" isTruncated>
            {data?.title}
          </Text>
          <Text
            width="8rem"
            fontWeight="semibold"
            color={colors[data?.difficulty]}
          >
            {data?.difficulty}
          </Text>
          <Text fontWeight="medium" flex={1} color={colors[rating]}>
            {ratings[rating]}
          </Text>
          {isOpen && (
            <IconButton
              size="sm"
              aria-label="Delete question"
              colorScheme="red"
              icon={<DeleteIcon />}
              onClick={handleDelete}
            />
          )}
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
            <Text fontWeight="medium" color="gray.500">
              Last Practice:{" "}
              {lastPracticeDate
                ? lastPracticeDate.toLocaleString("en-US")
                : "Never"}
            </Text>
            <Rating id={id} />
          </Flex>
        </Collapse>
      </Box>
    </>
  );
};

export default Entry;
