import React from 'react';
import { GetStaticPropsContext } from 'next';
import css from '@/styles/page-styles/home.module.scss';
import SectionIntro from '@/components/home-components/section-intro/section-intro';
import SectionMarketing from '@/components/home-components/section-marketing/section-marketing';
import SectionContacts from '@/components/home-components/section-contacts/section-contacts';
import SectionServices from '@/components/home-components/section-services/section-services';
import { Language } from '@/hooks/use-language';
import { textSeoHome } from '@/texts/seo/text-seo-home';
import PageHead, {
  SeoData,
} from '@/components/seo-components/page-head/page-head';

type HomeProps = {
  initialSeo: SeoData;
};

export default function Home({ initialSeo }: HomeProps) {
  return (
    <>
      {' '}
      <PageHead initialSeo={initialSeo} seoText={textSeoHome} />
      <main className={css.container}>
        <SectionIntro />
        <SectionServices />
        <SectionMarketing />
        <SectionContacts />
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
  const { title, description, link } = textSeoHome[lang];
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
