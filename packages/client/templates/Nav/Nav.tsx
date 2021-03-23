import User from "features/User/User";
import React from "react";
import { Box, Flex } from "ui-lib";

const Nav: React.FC = () => {
  return (
    <Box py={2}>
      <Flex direction="row-reverse">
        <User />
      </Flex>
    </Box>
  );
};

export default Nav;
