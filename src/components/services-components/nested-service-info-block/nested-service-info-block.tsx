import React from 'react';
import css from './nested-service-info-block.module.scss';

type NestedServiceInfoListProps = {
  header: string;
  list?: (string | React.JSX.Element)[];
  headerSize: number;
  icon: 'laptop' | 'pouring' | 'cup' | 'rocket';
  paragraphs?: (string | React.JSX.Element)[];
};
export default function NestedServiceInfoBlock({
  header,
  list,
  headerSize,
  icon,
  paragraphs,
}: NestedServiceInfoListProps) {
  const HeaderTag = `h${headerSize}` as keyof JSX.IntrinsicElements;

  if (headerSize < 2 || headerSize > 5) {
    throw new Error('headerType must be between 1 and 5');
  }

  const decideIcon = () => {
    switch (icon) {
      case 'laptop':
        return '/icons/laptop-icon.png';
      case 'rocket':
        return '/icons/rocket-icon.png';
      case 'cup':
        return '/icons/stationary-cup-icon.png';
      case 'pouring':
        return '/icons/pouring-icon.png';
      default:
        return '/icons/rocket-icon.png';
    }
  };

  return (
    <div className={css.container}>
      <HeaderTag
        className={css.header}
        style={
          {
            '--icon-url': `url(${decideIcon()})`,
          } as React.CSSProperties
        }
      >
        {header}
      </HeaderTag>

      {paragraphs?.map((element) => (
        <p className={css.paragraph} key={Math.random()}>
          {element}
        </p>
      ))}

      <ul className={css.card}>
        {list?.map((element) => <li key={Math.random()}>{element}</li>)}
      </ul>
    </div>
  );
}
