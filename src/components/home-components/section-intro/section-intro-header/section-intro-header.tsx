import React from 'react';
import cx from 'classnames';
import css from './section-intro-header.module.scss';

type SectionIntroHeaderProps = {
  caption: string;
  isAnimated: boolean;
};

export default function SectionIntroHeader({
  caption,
  isAnimated,
}: SectionIntroHeaderProps) {
  return (
    <hgroup className={css.container}>
      <div className={cx(css.limit, isAnimated && css.animated)}>
        <h1>Scien3 Cast Creations</h1>
        <p>{caption}</p>
      </div>
    </hgroup>
  );
}
