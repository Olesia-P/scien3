import React from 'react';
import css from './nested-service-info-list.module.scss';

type NestedServiceInfoListProps = {
  header: string;
  list: string[];
  headerSize: number;
  icon: string;
};
export default function NestedServiceInfoList({
  header,
  list,
  headerSize,
  icon,
}: NestedServiceInfoListProps) {
  const HeaderTag = `h${headerSize}` as keyof JSX.IntrinsicElements;

  if (headerSize < 2 || headerSize > 5) {
    throw new Error('headerType must be between 1 and 5');
  }

  return (
    <div className={css.container}>
      <HeaderTag
        className={css.header}
        style={
          {
            '--icon-url': `url(${icon})`,
          } as React.CSSProperties
        }
      >
        {header}
      </HeaderTag>

      <ul className={css.card}>
        {list.map((element) => (
          <li key={element}>{element}</li>
        ))}
      </ul>
    </div>
  );
}
