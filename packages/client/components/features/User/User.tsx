import { signIn, signOut, useSession } from "next-auth/client";
import React from "react";
import { Avatar, Button } from "ui-lib";
import Image from "next/image";

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
          <Image
            src="/icons/google.svg"
            alt="Google logo"
            width="15"
            height="15"
          />
        </Button>
      )}
      {session && (
        <Avatar
          name={session.user.name}
          onClick={() => signOut()}
          src={session.user.image}
          sx={{
            ":hover": {
              cursor: "pointer",
            },
          }}
        />
      )}
    </>
  );
};

export default User;
