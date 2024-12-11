import React from 'react';
import Link from 'next/link';
import css from './dropdown-menu.module.scss';

type DropdownMenuProps = {
  links: {
    name: string;
    link: string;
  }[];
};

export default function DropdownMenu({ links }: DropdownMenuProps) {
  return (
    <div className={css.container}>
      <ul className={css.linksWrap} role="menu">
        {links.map((link) => (
          <Link className={css.link} key={link.name} href={link.link}>
            {link.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}
