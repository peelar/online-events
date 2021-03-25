import React from "react";
import Layout from "components/templates/Layout/Layout";
import { ChakraProvider } from "ui-lib";
import { Provider } from "next-auth/client";
import { AppProps } from "next/dist/next-server/lib/router/router";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Provider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ChakraProvider>
  );
};

export default MyApp;
