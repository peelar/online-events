import { NextPage } from "next";
import React from "react";
import { Box, Text } from "ui-lib";
import { useRouter } from "next/router";

const Event: NextPage = () => {
  const {
    query: { id },
  } = useRouter();
  return (
    <Box>
      <Text size="5xl">{`Event: ${id}`}</Text>
    </Box>
  );
};

export default Event;
