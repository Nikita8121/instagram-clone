import { signUp } from "@/modules/AuthModule";
import { AxiosError } from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: "signUp",
      credentials: {},
      async authorize(credentials) {
        const {email, fullName, username, password} = credentials as Parameters<typeof signUp>[0]
        try {
          return await signUp({email, fullName, username, password});
        } catch (error: AxiosError | unknown) {
          if(error instanceof AxiosError) throw new Error(error?.message);
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {

    },
    async session({ session, token }) {

    },
    async jwt({ token, user }) {

    },
  },

});