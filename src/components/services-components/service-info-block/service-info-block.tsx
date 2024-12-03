import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import css from './service-info-block.module.scss';
import { createHeaderTag } from '@/utils/functions';

type NestedListObject = {
  header: string;
  paragraphs?: (string | React.JSX.Element)[];
  list?: (string | React.JSX.Element)[];
};

type ServiceInfoListProps = {
  header: string;
  headerSize: number;
  paragraphs?: (string | React.JSX.Element)[];
  list?: (string | React.JSX.Element)[];
  nestedList?: NestedListObject[];
  nestedListIcon?: 'laptop' | 'pouring' | 'cup' | 'rocket' | 'ball';
  listWithIcon?: boolean;
};

export default function ServiceInfoBlock({
  header,
  headerSize,
  paragraphs,
  list,
  nestedList,
  nestedListIcon,
  listWithIcon = false,
}: ServiceInfoListProps) {
  const MainHeaderTag = createHeaderTag(headerSize);
  const NestedHeaderTag = createHeaderTag(headerSize + 1);

  const displayParagraphs = (paragraphs: (string | React.JSX.Element)[]) => {
    return paragraphs?.map((element) => (
      <p className={css.paragraph} key={Math.random()}>
        {element}
      </p>
    ));
  };

  const displayList = (list: (string | React.JSX.Element)[]) => {
    return (
      <ul className={css.card}>
        {list.map((element) => (
          <li className={css.listItem} key={Math.random()}>
            {listWithIcon && <strong className={css.listIcon}>▲</strong>}
            {element}
          </li>
        ))}
      </ul>
    );
  };

  const decideIcon = () => {
    switch (nestedListIcon) {
      case 'laptop':
        return '/icons/laptop-icon.png';
      case 'rocket':
        return '/icons/rocket-icon.png';
      case 'cup':
        return '/icons/stationary-cup-icon.png';
      case 'pouring':
        return '/icons/pouring-icon.png';
      case 'ball':
        return '/icons/angled-ball-icon.png';
      default:
        return '/icons/rocket-icon.png';
    }
  };

  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <section className={css.container}>
      <MainHeaderTag
        className={cx(css.mainHeader, isAnimated && css.isAnimated)}
      >
        {header}
      </MainHeaderTag>

      {paragraphs && displayParagraphs(paragraphs)}

      {list && displayList(list)}

      {nestedList && (
        <ul className={css.nestedListContainer}>
          {nestedList?.map((element) => (
            <li className={css.nestedListItem} key={Math.random()}>
              <NestedHeaderTag
                className={css.nestedHeader}
                style={
                  {
                    '--icon-url': `url(${decideIcon()})`,
                  } as React.CSSProperties
                }
              >
                {element.header}
              </NestedHeaderTag>
              {element.paragraphs && displayParagraphs(element.paragraphs)}

              {element.list && displayList(element.list)}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
