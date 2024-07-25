import MainLayout from "@/components/layout";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apolloClient";

import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ApolloProvider>
  );
}
