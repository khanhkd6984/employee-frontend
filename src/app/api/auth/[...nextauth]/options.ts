import type { NextAuthOptions } from "next-auth";
import ZohoProvider from "next-auth/providers/zoho";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    ZohoProvider({
      clientId: process.env.ZOHO_CLIENT_ID as string,
      clientSecret: process.env.ZOHO_CLIENT_SECRET as string,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Email address",
          type: "text",
          placeholder: "Your email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const formData = new FormData();
        formData.append("username", credentials?.username as string);
        formData.append("password", credentials?.password as string);

        const res = await fetch(process.env.LOGIN_URL as string, {
          method: "POST",
          body: formData,
        });
        const user = await res.json();

        if (res.ok && user) {
          //   console.log(user);
          return user;
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
