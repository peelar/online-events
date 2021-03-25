import React from "react";
import { Avatar as CHAvatar } from "@chakra-ui/react";

const Avatar: typeof CHAvatar = (props) => {
  return (
    <CHAvatar
      sx={{
        ":hover": {
          cursor: "pointer",
        },
        ...props.sx,
      }}
      {...props}
    />
  );
};

export default Avatar;
