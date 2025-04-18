import React, { useEffect, useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';
import cx from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import css from './mobile.menu.module.scss';
import LangSwitch from '../lang-switch/lang-switch';
import { textNavbar } from '@/texts/layout/text-navbar';
import { useLanguage } from '@/hooks/use-language';

export default function MobileMenu() {
  const language = useLanguage();

  const { navlinks, dropdownLinks } = textNavbar[language];
  const router = useRouter();

  const [isServicesBlockOpen, setIsServicesBlockOpen] = useState(false);

  const handleServicesClick = (link: string) => {
    if (!isServicesBlockOpen) {
      setIsServicesBlockOpen(true);
    }
    if (isServicesBlockOpen) {
      router.push(link);
      setIsServicesBlockOpen(false);
    }
  };

  useEffect(() => {
    setIsServicesBlockOpen(false);
  }, [router.pathname]);

  return (
    <div className={css.shadowWrapper}>
      <div className={css.container}>
        {navlinks.map((navlink) =>
          navlink.hasDropdown ? (
            <div key={navlink.name}>
              <p
                className={cx(
                  css.navlink,
                  isServicesBlockOpen && css.withDropdown,
                )}
                onClick={() =>
                  handleServicesClick(`/${language}${navlink.link}`)
                }
              >
                {navlink.name}{' '}
                <IoChevronDown
                  className={cx(css.chevron, isServicesBlockOpen && css.turned)}
                />
              </p>

              <div
                className={cx(
                  css.dropdownBlockWrap,
                  isServicesBlockOpen && css.opened,
                )}
              >
                <ul className={css.dropdownBlock}>
                  {dropdownLinks.map((dropdownLink) => (
                    <li key={dropdownLink.link} className={css.dropdownLink}>
                      <Link href={`/${language}${dropdownLink.link}`}>
                        {dropdownLink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <Link
              className={css.navlink}
              href={`/${language}${navlink.link}`}
              key={navlink.name}
            >
              {navlink.name}
            </Link>
          ),
        )}

        <div className={css.switch}>
          <LangSwitch fontSize="m" />
        </div>
      </div>
    </div>
  );
}
