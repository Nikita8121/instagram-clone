import type { AppProps } from "next/app";
import { SessionProvider, useSession } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/shared/chakra/theme";

import "@fontsource/roboto";
import { ReactNode } from "react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps & { Component: { auth: boolean } }) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        {Component.auth ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </ChakraProvider>
    </SessionProvider>
  );
}

function Auth({ children }: { children: JSX.Element }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return children;
}
