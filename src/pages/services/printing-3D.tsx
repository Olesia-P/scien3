import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import ServiceInfoBlock from '@/components/services-components/service-info-block/service-info-block';
import SingleServiceLayout from '@/components/services-components/single-service-layout/single-service-layout';
import { textPrinting3D } from '@/utils/texts/services/text-printing-3D';
import css from '../../styles/page-styles/printing-3D.module.scss';
import Table from '@/components/services-components/table/table';

export default function printing3D() {
  const language = 'ua';
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
  );
}
