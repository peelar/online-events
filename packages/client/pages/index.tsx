import Calendar from "features/Calendar/Calendar";
import React from "react";
import { Button, Text, Box } from "ui-lib";

const Index: React.FC = () => {
  return (
    <Box>
      <Text fontSize="xl">Hello!</Text>
      <Button>I love Gabi ❤️</Button>
      <Calendar />
    </Box>
  );
};

export default Index;
