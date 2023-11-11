import type { NextAuthOptions } from "next-auth";
import ZohoProvider from "next-auth/providers/zoho";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    ZohoProvider({
      clientId: process.env.ZOHO_CLIENT_ID as string,
      clientSecret: process.env.ZOHO_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("signIn", user, account, profile, email, credentials);
      if (account?.provider === "zoho") {
        // console.log("account", account);
        user.accessToken = account.access_token;
        user.tokenType = account.token_type;
        return true;
      }
      return false;
    },
    async jwt({ token, user }) {
      if (user) {
        token = {
          accessToken: user.accessToken,
          tokenType: user.tokenType,
          user: {
            name: user.name,
            email: user.email,
          },
        };
      }
      return token;
    },
    async session({ session, token }) {
      session.user_info = token.user;
      session.accessToken = token.accessToken;
      session.tokenType = token.tokenType;
      return session;
    },
  },
};
