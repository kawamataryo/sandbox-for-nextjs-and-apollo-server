import '../styles/globals.css';
import * as React from 'react';
import 'bulma/css/bulma.min.css';
import type { AppProps /*, AppContext */ } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { client } from '../apollo/client';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />;
    </ApolloProvider>
  )
};

export default MyApp;
