import React from 'react';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout/layout';
import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
