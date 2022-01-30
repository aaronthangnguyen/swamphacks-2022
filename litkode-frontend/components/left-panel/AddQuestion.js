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
import React, { useRef, useState } from "react";
import FocusLock from "react-focus-lock";
import { useSWRConfig } from "swr";

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
  const [id, setId] = useState("");
  const { mutate } = useSWRConfig();

  const handleAdd = async () => {
    onCancel();

    await fetch("http://localhost:8000/api/questions", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });

    setId("");
    mutate("http://localhost:8000/api/questions");
  };
  return (
    <Box background="white" rounded="lg" p="1rem" boxShadow="lg">
      <Stack spacing={4}>
        <FormControl>
          <Input
            id="question-id"
            placeholder="ID"
            ref={idFieldRef}
            value={id}
            onChange={(event) => setId(event.target.value)}
          />
        </FormControl>
        <ButtonGroup d="flex" justifyContent="flex-end">
          <Button colorScheme="litkode" onClick={handleAdd}>
            Add
          </Button>
          <Button onClick={onCancel}>Cancel</Button>
        </ButtonGroup>
      </Stack>
    </Box>
  );
};

export default AddQuestion;
