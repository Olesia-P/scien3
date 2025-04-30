import React from 'react';
import cx from 'classnames';
import css from './service-info-block.module.scss';
import useServiceInfoBlock from './use-service-info-block';

// The component has two parts - main and nested list

// Main part has header and headerLevel (from 1 to 5).
// Main part can OPTIONALLY have:
//  - list of paragraphs (they are displayed without icon)
// - list of strings or jsx (if listWithIcon is true, displayed with triangle icon)
// - nested list

// Nested list is a list of objects.
// Each Nested list object has a header, that is one level lower than the Main part header.
// Nested list has an icon: 4 options to choose using nestedListIcon, 'rocket' is default.
// Nested list can OPTIONALLY have:
// - list of paragraphs (they are displayed without icon)
// - list of strings or jsx (if listWithIcon is true, displayed with triangle icon)

type NestedListObject = {
  header: string;
  paragraphs?: (string | React.JSX.Element)[];
  list?: (string | React.JSX.Element)[];
};

type ServiceInfoListProps = {
  header: string;
  headerLevel: 1 | 2 | 3 | 4 | 5;
  paragraphs?: (string | React.JSX.Element)[];
  list?: (string | React.JSX.Element)[];
  nestedList?: NestedListObject[];
  nestedListIcon?: 'laptop' | 'pouring' | 'cup' | 'rocket' | 'ball';
  listWithIcon?: boolean;
};

export default function ServiceInfoBlock({
  header,
  headerLevel,
  paragraphs,
  list,
  nestedList,
  nestedListIcon,
  listWithIcon = false,
}: ServiceInfoListProps) {
  const {
    isObserved,
    serviceInfoBlockRef,
    icon,
    MainHeaderTag,
    NestedHeaderTag,
  } = useServiceInfoBlock(headerLevel, nestedListIcon);

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

  return (
    <section className={css.container} ref={serviceInfoBlockRef}>
      <MainHeaderTag className={cx(css.mainHeader, isObserved && css.animated)}>
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
                    '--icon-url': `url(${icon})`,
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
