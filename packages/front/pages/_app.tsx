/* eslint-disable react/jsx-props-no-spreading */

import React from "react";
import Head from "next/head";
import { Provider as BumbagProvider, css } from "bumbag";
import { ApolloProvider } from "@apollo/client";
import { createGlobalStyle } from "styled-components";

import { useApollo } from "lib/apolloClient";
import "@babel/polyfill";

const GlobalStyle = createGlobalStyle`
	#__next {
		height: 100%;
	}
	html {
		height: 100%;
	}
	body {
		margin: 0px;
		width: 100%;
		height: 100%;
	}
	.hint{
		background-color: #924FD1;
		cursor: pointer;
	}
`;

const theme = {
  global: {
    styles: {
      base: css`
        height: 100%;
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
          height: 100%;
        }
        button: {
          styles: {
            base: {
              background: "#5454E2";
            }
          }
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
          <link rel="stylesheet" href="/css/tippy.css" />
      
        </Head>
        <Component {...pageProps} />
        <GlobalStyle />
      </BumbagProvider>
    </ApolloProvider>
  );
}
