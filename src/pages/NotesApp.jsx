import { Box, Button, Flex, Input, Text, VStack, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");
  const toast = useToast();

  const addNote = () => {
    if (input.trim() === "") {
      toast({
        title: "Cannot add empty note",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setNotes([...notes, input]);
    setInput("");
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <Flex direction="column" p={4}>
      <Input
        placeholder="Type your note here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        mb={2}
      />
      <Button onClick={addNote} colorScheme="blue" mb={4}>
        Add Note
      </Button>
      <VStack spacing={4}>
        {notes.map((note, index) => (
          <Flex key={index} justify="space-between" align="center" p={3} w="100%" bg="gray.100">
            <Text>{note}</Text>
            <Button onClick={() => deleteNote(index)} colorScheme="red">
              <FaTrash />
            </Button>
          </Flex>
        ))}
      </VStack>
    </Flex>
  );
};

export default NotesApp;