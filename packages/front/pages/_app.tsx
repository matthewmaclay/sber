/* eslint-disable react/jsx-props-no-spreading */

import React from "react";
import Head from "next/head";
import { Provider as BumbagProvider, css } from "bumbag";
import { ApolloProvider } from "@apollo/client";

import { useApollo } from "lib/apolloClient";
import PageWithHeader from "components/layout/withHeader";
import "@babel/polyfill";

const theme = {
  global: {
    styles: {
      base: css`
      body{
        background-color: white !important;
      }
        .demo-editor {
          padding: 0 20px;
        }
        .withoutUnderlineLink {
          position: relative;
        }
        .withoutUnderlineLink > a {
          color: inherit;
          font-size: inherit;
          text-decoration: none;
          width: 100%;
          height: 100%;
          &:before {
            content: " ";
            position: absolute;
          }
        }
        .bb-Button > a {
        }
      `,
    },
  },
};

interface Props {
  Component: React.FC;
  pageProps: any;
}

export default function App({ Component, pageProps }: Props) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <BumbagProvider theme={theme}>
          <Head>
            <link rel="stylesheet" href="/css/medium-editor.css" />
            <link rel="stylesheet" href="/css/themes/bootstrap.css" />
          </Head>
          <Component {...pageProps} />
      </BumbagProvider>
    </ApolloProvider>
  );
}
