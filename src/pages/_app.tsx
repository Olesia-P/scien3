import React from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout/layout';
import '../styles/globals.scss';
import { store } from '../store/store';
import Toast from '@/components/ui/toast/toast';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Toast />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
