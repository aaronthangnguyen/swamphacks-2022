import { Button, Box, Text, Flex } from "@chakra-ui/react";
import React from "react";
import { useStopwatch } from "react-timer-hook";

const Timer = () => {
  const { seconds, minutes, isRunning, start, pause, reset } = useStopwatch({
    autoStart: false,
  });
  return (
    <Box>
      <Text fontWeight="bold" fontSize="3xl" display="block" textAlign="center">
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </Text>
      <Flex gap="0.5rem">
        <Button
          colorScheme="litkode"
          width="50%"
          onClick={isRunning ? pause : start}
        >
          {isRunning ? "Pause" : "Start"}
        </Button>
        <Button
          width="50%"
          onClick={() => {
            reset(0, false);
          }}
        >
          Reset
        </Button>
      </Flex>
    </Box>
  );
};

export default Timer;
