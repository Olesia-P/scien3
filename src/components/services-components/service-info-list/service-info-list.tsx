import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import css from './service-info-list.module.scss';
import NestedServiceInfoList from '../nested-service-info-list/nested-service-info-list';

type NestedList = { header: string; list: string[] };

type BaseProps = {
  header: string;
  list: string[] | NestedList[];
  headerSize: number;
};

type WithNestedList = BaseProps & {
  hasNestedList: true;
  nestedListIcon: string;
};

type WithoutNestedList = BaseProps & {
  hasNestedList: false;
  nestedListIcon?: undefined;
};

type ServiceInfoListProps = WithNestedList | WithoutNestedList;

export default function ServiceInfoList({
  header,
  list,
  headerSize,
  hasNestedList,
  nestedListIcon,
}: ServiceInfoListProps) {
  if (headerSize < 1 || headerSize > 5) {
    throw new Error('headerType must be between 1 and 5');
  }

  const decideNestedListHeaderSize = () =>
    headerSize + 1 <= 5 ? headerSize + 1 : 5;

  const HeaderTag = `h${headerSize}` as keyof JSX.IntrinsicElements;

  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <section className={css.container}>
      <HeaderTag className={cx(css.header, isAnimated && css.isAnimated)}>
        {header}
      </HeaderTag>

      {!hasNestedList ? (
        <ul className={css.card}>
          {(list as string[]).map((element) => (
            <li key={element}>{element}</li>
          ))}
        </ul>
      ) : (
        <ul>
          {(list as NestedList[]).map((element) => (
            <NestedServiceInfoList
              list={element.list}
              header={element.header}
              headerSize={decideNestedListHeaderSize()}
              key={element.header}
              icon={nestedListIcon}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
