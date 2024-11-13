import React from 'react';
import Link from 'next/link';
import css from './dropdown-menu.module.scss';

type DropdownMenuProps = {
  items: {
    name: string;
    link: string;
  }[];
};

export default function DropdownMenu({ items }: DropdownMenuProps) {
  return (
    <div className={css.container}>
      <ul className={css.linksWrap} role="menu">
        {items.map((element) => (
          <li key={element.name}>
            <Link className={css.link} href={element.link}>
              {element.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
