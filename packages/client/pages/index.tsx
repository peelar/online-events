import Calendar from "components/features/Calendar/Calendar";
import React from "react";
import Intro from "components/templates/Intro/Intro";
import { Box } from "ui-lib";

const Index: React.FC = () => {
  return (
    <Box>
      <Intro />
      <Calendar />
    </Box>
  );
};

export default Index;
