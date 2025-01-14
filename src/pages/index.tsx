import React from 'react';
import css from '../styles/page-styles/home.module.scss';
import SectionIntro from '@/components/home-components/section-intro/section-intro';
// import SectionMarketing from '@/components/home-components/section-marketing/section-marketing';
// import SectionContacts from '@/components/home-components/section-contacts/section-contacts';
// import SectionDescription from '@/components/home-components/section-description/section-description';
// import SectionServices from '@/components/home-components/section-services/section-services';

export default function Home() {
  return (
    <main className={css.container}>
      <SectionIntro />
      {/* <SectionDescription />
      <SectionServices />
      <SectionMarketing />
      <SectionContacts /> */}
    </main>
  );
}
