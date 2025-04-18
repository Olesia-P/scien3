import React from 'react';
import { GetStaticPropsContext } from 'next';
import ServiceInfoBlock from '@/components/services-components/service-info-block/service-info-block';
import { textModeling3D } from '@/texts/services/text-modeling-3D';
import SingleServiceLayout from '@/components/services-components/single-service-layout/single-service-layout';
import { Language, useLanguage } from '@/hooks/use-language';
import { textSeoModeling3D } from '@/texts/seo/text-seo-modeling-3D';
import PageHead, {
  SeoData,
} from '@/components/seo-components/page-head/page-head';

type Modeling3DProps = {
  initialSeo: SeoData;
};

export default function Modeling3D({ initialSeo }: Modeling3DProps) {
  const language = useLanguage();

  const { content, backgroundStyle } = textModeling3D[language].forWrapper;
  const { stages, product, useCases } = textModeling3D[language];

  return (
    <>
      {' '}
      <PageHead initialSeo={initialSeo} seoText={textSeoModeling3D} />
      <SingleServiceLayout backgroundStyle={backgroundStyle} content={content}>
        <ServiceInfoBlock {...useCases} headerLevel={2} listWithIcon />

        <ServiceInfoBlock {...stages} headerLevel={2} />

        <ServiceInfoBlock {...product} headerLevel={2} />
      </SingleServiceLayout>
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
  const { title, description, link } = textSeoModeling3D[lang];
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
