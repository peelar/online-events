import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  callbacks: {
    async jwt(token, _, account) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      return token;
    },
  },
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      scope:
        "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/calendar",
    }),
  ],
});
