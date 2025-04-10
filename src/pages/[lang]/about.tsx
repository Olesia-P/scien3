import React from 'react';
import { useLanguage } from '@/hooks/use-language';

export default function About() {
  const language = useLanguage();

  return (
    <div style={{ padding: '10rem' }}>
      {language === 'en' && 'Hello'} {language === 'ua' && 'Привіт'}{' '}
      thyjuykuiloi
    </div>
  );
}

export async function getStaticPaths() {
  const paths = [{ params: { lang: 'ua' } }, { params: { lang: 'en' } }];
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
