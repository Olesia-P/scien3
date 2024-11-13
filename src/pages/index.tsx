import React from 'react';
import css from '../styles/page-styles/home.module.scss';
import SectionIntro from '@/components/home/section-intro/section-intro';
import SectionMarketing from '@/components/home/section-marketing/section-marketing';
import SectionContacts from '@/components/home/section-contacts/section-contacts';
import SectionDescription from '@/components/home/section-description/section-description';
import SectionServices from '@/components/home/section-services/section-services';

export default function Home() {
  return (
    <main className={css.container}>
      <SectionIntro />
      <SectionDescription />
      <SectionServices />
      <SectionMarketing />
      <SectionContacts />
    </main>
  );
}
