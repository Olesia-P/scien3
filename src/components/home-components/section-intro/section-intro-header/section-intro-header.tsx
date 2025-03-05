import React from 'react';
import css from './section-intro-header.module.scss';

type SectionIntroHeaderProps = {
  caption: string;
};

export default function SectionIntroHeader({
  caption,
}: SectionIntroHeaderProps) {
  return (
    <hgroup className={css.container}>
      <div className={css.limit}>
        <h1>Scien3 Cast Creations</h1>
        <p>{caption}</p>
      </div>
    </hgroup>
  );
}
