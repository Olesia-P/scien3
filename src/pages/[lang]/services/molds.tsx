import React from 'react';
import ServiceInfoBlock from '@/components/services-components/service-info-block/service-info-block';
import SingleServiceLayout from '@/components/services-components/single-service-layout/single-service-layout';
import Table from '@/components/services-components/table/table';
import { textMolds } from '@/texts/services/text-molds';
import css from '@/styles/page-styles/molds.module.scss';
import { useLanguage } from '@/hooks/use-language';

export default function Molds() {
  const language = useLanguage();

  const { content, backgroundStyle } = textMolds[language].forWrapper;
  const { silicone, polyurethane, orderOptions, table } = textMolds[language];

  return (
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
  );
}

export async function getStaticPaths() {
  const paths = [{ params: { lang: 'ua' } }, { params: { lang: 'en' } }];
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
