import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import ServiceInfoBlock from '@/components/services-components/service-info-block/service-info-block';
import { textSingleServiceWrapper } from '@/utils/texts/text-single-service-wrapper';
import SingleServiceLayout from '@/components/services-components/single-service-layout/single-service-layout';
import { textPrinting3D } from '@/utils/texts/text-printing-3D';
import css from '../../styles/page-styles/printing-3D.module.scss';
import Table from '@/components/ui/table/table';

export default function printing3D() {
  const { content, backgroundStyle } = textPrinting3D.forWrapper;
  const { button, contacts } = textSingleServiceWrapper;
  const {
    howItWorks,
    useCases,
    mainOptions,
    fdm,
    sla,
    important,
    linkToMassProduction,
    table,
  } = textPrinting3D;

  return (
    <SingleServiceLayout
      backgroundStyle={backgroundStyle}
      content={content}
      button={button}
      contacts={contacts}
    >
      <ServiceInfoBlock {...howItWorks} headerSize={2} listWithIcon />

      <ServiceInfoBlock {...useCases} headerSize={2} />

      <ServiceInfoBlock {...mainOptions} headerSize={2} />

      <ServiceInfoBlock {...fdm} headerSize={3} />

      <ServiceInfoBlock {...sla} headerSize={3} />

      <div className={css.comparisonTable}>
        <Table
          headers={table.headers}
          rows={table.rows}
          headerSize={3}
          title={table.title}
        />
      </div>
      <ServiceInfoBlock {...important} headerSize={2} />

      <a href={linkToMassProduction.link} className={css.linkMassProduction}>
        {linkToMassProduction.text}{' '}
        <FaArrowRightLong className={css.massProdIcon} />
      </a>
    </SingleServiceLayout>
  );
}