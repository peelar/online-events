import React from "react";
import { Avatar as CHAvatar } from "@chakra-ui/react";

const Avatar: typeof CHAvatar = (props) => {
  return (
    <CHAvatar
      // to-do: animation on hover: avatar slides to the left, log-out icon in the background
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
