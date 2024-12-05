import React, { useState } from 'react';
import { IoChevronDownOutline, IoCloseSharp } from 'react-icons/io5';
import cx from 'classnames';
import css from './collapsable-block.module.scss';
import { createHeaderTag } from '@/utils/functions';

type CollapsableBlockProps = {
  header: string;
  headerSize: number;
  text: (string | React.JSX.Element)[];
};

export default function CollapsableBlock({
  header,
  headerSize,
  text,
}: CollapsableBlockProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const HeaderTag = createHeaderTag(headerSize);
  return (
    <article className={cx(css.container, isOpen && css.opened)}>
      <header className={css.headerWrap}>
        <HeaderTag className={css.header} onClick={handleClick}>
          {header}
        </HeaderTag>
        <button type="button" className={css.button} onClick={handleClick}>
          <IoChevronDownOutline className={css.chevron} />

          <IoCloseSharp className={css.cross} />
        </button>
      </header>
      <div className={css.textWrap}>
        <div className={css.text}>
          {text.map((paragraph) => (
            <p key={Math.random()}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
