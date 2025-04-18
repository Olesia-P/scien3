import React from 'react';
import { GetStaticPropsContext } from 'next';
import ServiceInfoBlock from '@/components/services-components/service-info-block/service-info-block';
import SingleServiceLayout from '@/components/services-components/single-service-layout/single-service-layout';
import { textSerialProduction } from '@/texts/services/text-serial-production';
import { Language, useLanguage } from '@/hooks/use-language';
import { textSeoSerialProduction } from '@/texts/seo/text-seo-serial-production';
import PageHead, {
  SeoData,
} from '@/components/seo-components/page-head/page-head';

type SerialProductionProps = {
  initialSeo: SeoData;
};

export default function SerialProduction({
  initialSeo,
}: SerialProductionProps) {
  const language = useLanguage();

  const { content, backgroundStyle } =
    textSerialProduction[language].forWrapper;
  const {
    howItWorks,
    benefits,
    useCases,
    stages,
    importantMoments,
    whyNot3Dprinting,
  } = textSerialProduction[language];

  return (
    <>
      {' '}
      <PageHead initialSeo={initialSeo} seoText={textSeoSerialProduction} />
      <SingleServiceLayout backgroundStyle={backgroundStyle} content={content}>
        <ServiceInfoBlock {...howItWorks} headerLevel={2} />

        <ServiceInfoBlock {...benefits} headerLevel={2} />

        <ServiceInfoBlock {...useCases} headerLevel={2} listWithIcon />

        <ServiceInfoBlock {...stages} headerLevel={2} />
        <ServiceInfoBlock {...importantMoments} headerLevel={2} />

        <ServiceInfoBlock {...whyNot3Dprinting} headerLevel={2} listWithIcon />
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
  const { title, description, link } = textSeoSerialProduction[lang];
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
