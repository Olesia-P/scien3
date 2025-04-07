import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './navbar/navbar';
import { getCookie, setCookie } from '@/utils/cookies';
import { RootState } from '@/store/store';
import { changeLanguage } from '@/store/modules/language-slice';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const { language } = useSelector(({ language }: RootState) => language);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedLanguage = getCookie('language');

    if (storedLanguage === 'en' || storedLanguage === 'ua') {
      dispatch(changeLanguage(storedLanguage));
    } else {
      setCookie('language', language, 30);
    }
  }, []);

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
