import React from "react";
import Layout from "templates/Layout/Layout";
import { ChakraProvider } from "ui-lib";
import { Provider } from "next-auth/client";
import { AppProps } from "next/dist/next-server/lib/router/router";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Layout>
        <Provider session={pageProps.session}>
          <Component {...pageProps} />
        </Provider>
      </Layout>
    </ChakraProvider>
  );
};

export default MyApp;
