import React from 'react';
import css from '@/styles/page-styles/home.module.scss';
import SectionIntro from '@/components/home-components/section-intro/section-intro';
import SectionMarketing from '@/components/home-components/section-marketing/section-marketing';
import SectionContacts from '@/components/home-components/section-contacts/section-contacts';
import SectionServices from '@/components/home-components/section-services/section-services';

export default function Home() {
  return (
    <main className={css.container}>
      <SectionIntro />
      <SectionServices />
      <SectionMarketing />
      <SectionContacts />
    </main>
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
