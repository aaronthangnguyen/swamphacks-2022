import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  IconButton,
  Input,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import FocusLock from "react-focus-lock";

const AddQuestion = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const idFieldRef = useRef(null);
  return (
    <>
      <Popover
        isOpen={isOpen}
        initialFocusRef={idFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement="bottom"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <IconButton
            colorScheme="litkode"
            aria-label="Add a question"
            icon={<AddIcon />}
            ml="1rem"
          />
        </PopoverTrigger>
        <PopoverContent>
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverHeader fontWeight="semibold">Add Question</PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <Form idFieldRef={idFieldRef} onCancel={onClose} />
          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  );
};

const Form = ({ idFieldRef, onCancel }) => {
  return (
    <Box background="white" rounded="lg" p="1rem" boxShadow="lg">
      <Stack spacing={4}>
        <FormControl>
          <Input id="question-id" placeholder="ID" ref={idFieldRef} />
        </FormControl>
        <ButtonGroup d="flex" justifyContent="flex-end">
          <Button colorScheme="litkode">Add</Button>
          <Button onClick={onCancel}>Cancel</Button>
        </ButtonGroup>
      </Stack>
    </Box>
  );
};

export default AddQuestion;
