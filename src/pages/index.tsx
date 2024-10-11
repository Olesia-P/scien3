import React from 'react';
import css from '../styles/page-styles/home.module.scss';
import SectionIntro from '@/components/home/section-intro/section-intro';

export default function Home() {
  return (
    <main className={css.container}>
      <SectionIntro />
    </main>
  );
}
