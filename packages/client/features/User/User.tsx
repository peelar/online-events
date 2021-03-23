import { signIn, signOut, useSession } from "next-auth/client";
import React from "react";
import { Avatar, Button } from "ui-lib";

const User: React.FC = () => {
  const [session, loading] = useSession();

  return (
    <>
      {!session && (
        <Button
          isLoading={loading}
          colorScheme="gray"
          variant="outline"
          aria-label="Log-in"
          height="48px"
          width="48px"
          onClick={() => signIn()}
        >
          G
        </Button>
      )}
      {session && (
        <Avatar
          name={session.user.name}
          onClick={() => signOut()}
          src={session.user.image}
        />
      )}
    </>
  );
};

export default User;
