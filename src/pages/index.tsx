import React from 'react';
import css from '../styles/page-styles/home.module.scss';
import SectionIntro from '@/components/home/section-intro/section-intro';
import SectionCategories from '@/components/home/section-categories/section-categories';
import SectionMarketing from '@/components/home/section-marketing/section-marketing';
import SectionContacts from '@/components/home/section-contacts/section-contacts';
import SectionDescription from '@/components/home/section-description/section-description';

export default function Home() {
  return (
    <main className={css.container}>
      <SectionIntro />
      <SectionDescription />
      <SectionCategories />
      <SectionMarketing />
      <SectionContacts />
    </main>
  );
}
