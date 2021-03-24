import { useSession } from "next-auth/client";
import React from "react";
import { Box, Heading, Text, Fade } from "ui-lib";

const Intro: React.FC = () => {
  const [session, loading] = useSession();
  return (
    <Fade in={!loading}>
      <Box>
        <Heading as="h1" color="gray.600" fontSize="6xl">{`Hello, ${
          session?.user.name ?? "stranger"
        } 👋`}</Heading>
        {session && (
          <Text color="gray.500" fontSize="xl">
            Here are your upcoming events:
          </Text>
        )}
      </Box>
    </Fade>
  );
};

export default Intro;
