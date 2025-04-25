import React from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout/layout';
import '../styles/globals.scss';
import { store } from '../store/store';
import Toast from '@/components/ui/toast/toast';
import Modal, { ModalProps } from '@/components/ui/modal/modal';
import useLocalStorageToDisplay from '@/hooks/use-local-storage-to-display';
import withPortal from '@/hocs/with-portal';

export default function App({ Component, pageProps }: AppProps) {
  const { isOpen: isModalOpen, setIsOpen: setIsModalOpen } =
    useLocalStorageToDisplay('attentionModal', 1);

  const ModalWithPortal = withPortal<ModalProps>(Modal, 'modal-root');

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Provider store={store}>
      <Layout>
        <Toast />
        <Component {...pageProps} />
      </Layout>
      <ModalWithPortal isOpen={isModalOpen} onClose={handleCloseModal} />
    </Provider>
  );
}
