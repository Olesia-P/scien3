import React, { useState } from 'react';
import cx from 'classnames';
import { GoArrowSwitch } from 'react-icons/go';
import css from './table.module.scss';
import { createHeaderTag } from '@/utils/functions';
import useIntersectionObserver from '@/hooks/use-intersection-observer';

type Cells = string[];

type TableProps = {
  headerSize: number;
  title: string;
  headers: string[];
  rows: Cells[];
};

export default function Table({
  headerSize,
  headers,
  title,
  rows,
}: TableProps) {
  const [isObserved, setIsObserved] = useState(false);

  const tableRef = useIntersectionObserver<HTMLDivElement>(
    () => setIsObserved(true),
    undefined,
    0,
  );

  const HeaderTag = createHeaderTag(headerSize);

  return (
    <div
      className={cx(css.container, isObserved && css.animated)}
      ref={tableRef}
    >
      <HeaderTag className={css.title}>{title}</HeaderTag>
      <div className={css.scrollWrapper}>
        <table className={css.table}>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={Math.random()} className={css.head}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={css.body}>
            {rows.map((row) => (
              <tr key={Math.random()}>
                {row.map((cell) => (
                  <td key={Math.random()} className={css.cell}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <GoArrowSwitch className={css.arrow} />
    </div>
  );
}
