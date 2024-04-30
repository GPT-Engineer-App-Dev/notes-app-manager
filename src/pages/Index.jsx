import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import NotesApp from "./NotesApp";

const Index = () => {
  return (
    <Router>
      <Box p={4}>
        <Flex justify="space-between" mb={4}>
          <Heading>Notes App</Heading>
          <NavLink to="/" style={{ marginRight: 10 }}>Home</NavLink>
          <NavLink to="/notes">Notes</NavLink>
        </Flex>
        <Routes>
          <Route path="/" element={<Box>Welcome to the Notes App!</Box>} />
          <Route path="/notes" element={<NotesApp />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default Index;