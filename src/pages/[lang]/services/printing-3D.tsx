import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { GetStaticPropsContext } from 'next';
import ServiceInfoBlock from '@/components/services-components/service-info-block/service-info-block';
import SingleServiceLayout from '@/components/services-components/single-service-layout/single-service-layout';
import { textPrinting3D } from '@/texts/services/text-printing-3D';
import css from '@/styles/page-styles/printing-3D.module.scss';
import Table from '@/components/services-components/table/table';
import { Language, useLanguage } from '@/hooks/use-language';
import { textSeoPrinting3D } from '@/texts/seo/text-seo-printing-3D';
import PageHead, {
  SeoData,
} from '@/components/seo-components/page-head/page-head';

type Printing3DProps = {
  initialSeo: SeoData;
};

export default function Printing3D({ initialSeo }: Printing3DProps) {
  const language = useLanguage();
  const { content, backgroundStyle } = textPrinting3D[language].forWrapper;
  const {
    howItWorks,
    useCases,
    mainOptions,
    fdm,
    sla,
    important,
    linkToSerialProduction,
    table,
  } = textPrinting3D[language];

  return (
    <>
      <PageHead initialSeo={initialSeo} seoText={textSeoPrinting3D} />
      <SingleServiceLayout backgroundStyle={backgroundStyle} content={content}>
        <ServiceInfoBlock {...howItWorks} headerLevel={2} listWithIcon />

        <ServiceInfoBlock {...useCases} headerLevel={2} />

        <ServiceInfoBlock {...mainOptions} headerLevel={2} />

        <ServiceInfoBlock {...fdm} headerLevel={3} />

        <ServiceInfoBlock {...sla} headerLevel={3} />

        <div className={css.comparisonTable}>
          <Table
            headers={table.headers}
            rows={table.rows}
            headerSize={3}
            title={table.title}
          />
        </div>
        <ServiceInfoBlock {...important} headerLevel={2} />

        <a
          href={linkToSerialProduction.link}
          className={css.linkToSerialProduction}
        >
          {linkToSerialProduction.text}{' '}
          <FaArrowRightLong className={css.serialProdIcon} />
        </a>
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
  const { title, description, link } = textSeoPrinting3D[lang];
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
