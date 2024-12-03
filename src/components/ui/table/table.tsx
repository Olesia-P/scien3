import React from 'react';
import css from './table.module.scss';
import { createHeaderTag } from '@/utils/functions';

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
  const HeaderTag = createHeaderTag(headerSize);
  return (
    <div className={css.container}>
      <HeaderTag className={css.title}>{title}</HeaderTag>
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
  );
}
