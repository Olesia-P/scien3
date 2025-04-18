import React from 'react';
import Link from 'next/link';
import css from './dropdown-menu.module.scss';
import { useLanguage } from '@/hooks/use-language';

type DropdownMenuProps = {
  links: {
    name: string;
    link: string;
  }[];
};

export default function DropdownMenu({ links }: DropdownMenuProps) {
  const language = useLanguage();

  return (
    <div className={css.container}>
      <ul className={css.linksWrap}>
        {links.map((link) => (
          <li className={css.link} key={link.name}>
            <Link href={`/${language}${link.link}`}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
