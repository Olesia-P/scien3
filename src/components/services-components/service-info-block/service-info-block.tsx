import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import css from './service-info-block.module.scss';
import NestedServiceInfoBlock from '../nested-service-info-block/nested-service-info-block';

type NestedList = {
  header: string;
  paragraphs?: (string | React.JSX.Element)[];
  list?: (string | React.JSX.Element)[];
};

// type BaseProps = {
//   header: string;
//   headerSize: number;
//   paragraphs?: string[] | React.JSX.Element[];
// };

// type ListProps = {
//   list: string[] | React.JSX.Element[];
//   nestedList?: never;
//   nestedListIcon?: never;
// };

// type NestedListProps = {
//   list?: never;
//   nestedList: NestedList[];
//   nestedListIcon: string;
// };

// type NoListProps = {
//   list?: never;
//   nestedList?: never;
//   nestedListIcon?: never;
// };

// type ConditionalProps = ListProps | NestedListProps | NoListProps;

// type ServiceInfoListProps = BaseProps & ConditionalProps;

type ServiceInfoListProps =
  | {
      header: string;
      headerSize: number;
      paragraphs?: (string | React.JSX.Element)[];
      list?: (string | React.JSX.Element)[];
      nestedList?: NestedList[];
      nestedListIcon: 'laptop' | 'pouring' | 'cup' | 'rocket';
    }
  | {
      header: string;
      headerSize: number;
      paragraphs?: (string | React.JSX.Element)[];
      list?: (string | React.JSX.Element)[];
      nestedList?: undefined;
      nestedListIcon?: 'laptop' | 'pouring' | 'cup' | 'rocket';
    };
export default function ServiceInfoBlock({
  header,
  headerSize,
  paragraphs,
  list,
  nestedList,
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

      {paragraphs?.map((element) => (
        <p className={css.paragraph} key={Math.random()}>
          {element}
        </p>
      ))}

      {list && (
        <ul className={css.card}>
          {(list as string[]).map((element) => (
            <li key={Math.random()}>{element}</li>
          ))}
        </ul>
      )}
      {nestedList && (
        <ul>
          {nestedListIcon &&
            nestedList?.map((element) => (
              <NestedServiceInfoBlock
                list={element.list}
                header={element.header}
                headerSize={decideNestedListHeaderSize()}
                key={element.header}
                icon={nestedListIcon}
                paragraphs={element.paragraphs}
              />
            ))}
        </ul>
      )}
    </section>
  );
}
