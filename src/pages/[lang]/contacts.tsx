import React, { useState } from 'react';
import cx from 'classnames';
import { GetStaticPropsContext } from 'next';
import css from '@/styles/page-styles/contacts.module.scss';
import useIntersectionObserver from '@/hooks/use-intersection-observer';
import { textContactsPage } from '@/texts/text-contacts-page';
import ContactsCard from '@/components/ui/contacts-card/contacts-card';
import useMediaQuery from '@/hooks/use-media-query';
import { Language, useLanguage } from '@/hooks/use-language';
import { textSeoContacts } from '@/texts/seo/text-seo-contacts';
import PageHead, {
  SeoData,
} from '@/components/seo-components/page-head/page-head';

type ContactsProps = {
  initialSeo: SeoData;
};
export default function Contacts({ initialSeo }: ContactsProps) {
  const language = useLanguage();
  const { mainHeader, illustrationAlt } = textContactsPage[language];
  const [isObserved, setIsObserved] = useState(false);
  const contactsPageRef = useIntersectionObserver(
    () => setIsObserved(true),
    undefined,
    0,
  );
  const isLargeScreen = useMediaQuery(1024);

  return (
    <>
      <PageHead initialSeo={initialSeo} seoText={textSeoContacts} />
      <main className={css.container} ref={contactsPageRef}>
        <picture>
          <source
            media="(max-width: 400px)"
            srcSet="
            /contacts/building_model_400.webp 400w, 
            /contacts/building_model_400.jpeg 400w"
          />
          <source
            media="(max-width: 1024px)"
            srcSet="
            /contacts/building_model_1106.webp 1106w, 
            /contacts/building_model_1106.jpeg 1106w"
          />
          <source
            media="(min-width: 1024px)"
            srcSet="
            /contacts/building_model_1792.webp 1792w, 
            /contacts/building_model_1792.jpeg 1792w"
          />

          <img
            src="/contacts/building_model_1792.jpeg"
            alt={illustrationAlt}
            className={cx(css.illustration, isObserved && css.animated)}
          />
        </picture>

        <h1>
          <span aria-hidden="true">|</span>
          {mainHeader}
          <span aria-hidden="true">|</span>
        </h1>

        <div className={cx(css.contactsCard, isObserved && css.animated)}>
          <ContactsCard option={isLargeScreen ? 'horizontal' : 'vertical'} />
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const paths = [{ params: { lang: 'ua' } }, { params: { lang: 'en' } }];
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const lang = context.params?.lang as Language;
  const { title, description, link } = textSeoContacts[lang];
  const initialSeo: SeoData = {
    title,
    description,
    link,
  };

  return {
    props: {
      initialSeo,
    },
  };
}
