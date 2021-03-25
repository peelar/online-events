import React from "react";
import { Box, Text } from "ui-lib";

type Props = {
  heading: string;
  subheading: string;
};

const Event: React.FC<Props> = ({ heading, subheading, ...props }) => {
  return (
    <Box
      p={2}
      borderRadius="lg"
      borderWidth="1px"
      color="gray.500"
      fontSize="md"
      {...props}
    >
      <Text color="black">{heading}</Text>
      <Text>{subheading}</Text>
    </Box>
  );
};

export default Event;
