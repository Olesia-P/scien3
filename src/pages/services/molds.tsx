import React from 'react';
import ServiceInfoBlock from '@/components/services-components/service-info-block/service-info-block';
import { textSingleServiceWrapper } from '@/utils/texts/text-single-service-wrapper';
import SingleServiceLayout from '@/components/services-components/single-service-layout/single-service-layout';
import Table from '@/components/ui/table/table';
import { textMolds } from '@/utils/texts/text-molds';
import css from '../../styles/page-styles/molds.module.scss';

export default function Molds() {
  const { content, backgroundStyle } = textMolds.forWrapper;
  const { button, contacts } = textSingleServiceWrapper;
  const { silicone, polyurethane, orderOptions, table } = textMolds;

  return (
    <SingleServiceLayout
      backgroundStyle={backgroundStyle}
      content={content}
      button={button}
      contacts={contacts}
    >
      <ServiceInfoBlock {...silicone} headerSize={2} />

      <ServiceInfoBlock {...polyurethane} headerSize={2} />

      <div className={css.comparisonTable}>
        <Table
          headers={table.headers}
          rows={table.rows}
          headerSize={3}
          title={table.title}
        />
      </div>

      <ServiceInfoBlock {...orderOptions} headerSize={2} listWithIcon />
    </SingleServiceLayout>
  );
}
