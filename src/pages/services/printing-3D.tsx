import React from 'react';
import { useSelector } from 'react-redux';
import { FaArrowRightLong } from 'react-icons/fa6';
import ServiceInfoBlock from '@/components/services-components/service-info-block/service-info-block';
import SingleServiceLayout from '@/components/services-components/single-service-layout/single-service-layout';
import { textPrinting3D } from '@/texts/services/text-printing-3D';
import css from '../../styles/page-styles/printing-3D.module.scss';
import Table from '@/components/services-components/table/table';
import { RootState } from '@/store/store';

export default function Printing3D() {
  const { language } = useSelector(({ language }: RootState) => language);

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
