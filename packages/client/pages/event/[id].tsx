import { NextPage } from "next";
import React from "react";
import { Box, Text, Button, ArrowBackIcon } from "ui-lib";
import { useRouter } from "next/router";
import Link from "next/link";

const Event: NextPage = () => {
  const {
    query: { id },
  } = useRouter();
  return (
    <Box>
      <Link href="/">
        <a>
          <Button leftIcon={<ArrowBackIcon />}>Go back</Button>
        </a>
      </Link>
      <Text size="5xl">{`Event: ${id}`}</Text>
    </Box>
  );
};

export default Event;
