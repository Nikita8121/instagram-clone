import { signUp, signIn } from "@/modules/AuthModule";
import { AxiosError } from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: "signUp",
      credentials: {},
      async authorize(credentials) {
        const { email, fullName, username, password } = credentials as Parameters<typeof signUp>[0]
        try {
          return await signUp({ email, fullName, username, password });
        } catch (error: AxiosError | unknown) {
          if (error instanceof AxiosError) throw new Error(error?.message);
        }
      },
    }),
    CredentialsProvider({
      id: "login",
      credentials: {},
      async authorize(credentials) {
        const { emailOrUsername, password } = credentials as Parameters<typeof signIn>[0]
        try {
          return await signIn({ emailOrUsername, password });
        } catch (error: AxiosError | unknown) {
          if (error instanceof AxiosError) throw new Error(error?.message);
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      console.log('user',user)
      if (user) return true;

      return false;
    },
    async session({ session, token}) {
       if(session.user) {
        session.accessToken = token.accessToken as string
      }
      return session;
    },
    async jwt({ token, user }) {
      console.log('userJWT', user)
       if((user as any)?.token) {
        token.accessToken = (user as any).token
      } 
      return token;
    },
  },
});