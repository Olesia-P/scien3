import React from 'react';
import { GetStaticPropsContext } from 'next';
import ServiceInfoBlock from '@/components/services-components/service-info-block/service-info-block';
import SingleServiceLayout from '@/components/services-components/single-service-layout/single-service-layout';
import Table from '@/components/services-components/table/table';
import { textMolds } from '@/texts/services/text-molds';
import css from '@/styles/page-styles/molds.module.scss';
import { Language, useLanguage } from '@/hooks/use-language';
import { textSeoMolds } from '@/texts/seo/text-seo-molds';
import PageHead, {
  SeoData,
} from '@/components/seo-components/page-head/page-head';

type MoldsProps = {
  initialSeo: SeoData;
};

export default function Molds({ initialSeo }: MoldsProps) {
  const language = useLanguage();

  const { content, backgroundStyle } = textMolds[language].forWrapper;
  const { silicone, polyurethane, orderOptions, table } = textMolds[language];

  return (
    <>
      <PageHead initialSeo={initialSeo} seoText={textSeoMolds} />
      <SingleServiceLayout backgroundStyle={backgroundStyle} content={content}>
        <ServiceInfoBlock {...silicone} headerLevel={2} />

        <ServiceInfoBlock {...polyurethane} headerLevel={2} />

        <div className={css.comparisonTable}>
          <Table
            headers={table.headers}
            rows={table.rows}
            headerSize={3}
            title={table.title}
          />
        </div>

        <ServiceInfoBlock {...orderOptions} headerLevel={2} listWithIcon />
      </SingleServiceLayout>
    </>
  );
}

export async function getStaticPaths() {
  const paths = [{ params: { lang: 'uk' } }, { params: { lang: 'en' } }];
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const lang = context.params?.lang as Language;
  const { title, description, link } = textSeoMolds[lang];
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
