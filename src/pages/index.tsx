import React from 'react';
import css from '../styles/page-styles/home.module.scss';
import SectionIntro from '@/components/home/section-intro/section-intro';
import SectionCategories from '@/components/home/section-categories/section-categories';
import SectionMarketing from '@/components/home/section-marketing/section-marketing';

export default function Home() {
  return (
    <main className={css.container}>
      <SectionIntro />
      <SectionCategories />
      <SectionMarketing />
    </main>
  );
}
