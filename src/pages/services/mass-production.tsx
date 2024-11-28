import React from 'react';
// import css from '../../styles/page-styles/modeling-3D.module.scss';
import ServiceInfoBlock from '@/components/services-components/service-info-block/service-info-block';
import { textSingleServiceWrapper } from '@/utils/texts/text-single-service-wrapper';
import SingleServiceLayout from '@/components/services-components/single-service-layout/single-service-layout';
import { textMassProduction } from '@/utils/texts/text-mass-production';

export default function MassProduction() {
  const { content, backgroundStyle } = textMassProduction.forWrapper;
  const { button, contacts } = textSingleServiceWrapper;

  return (
    <SingleServiceLayout
      backgroundStyle={backgroundStyle}
      content={content}
      button={button}
      contacts={contacts}
    >
      <ServiceInfoBlock {...textMassProduction.howItWorks} headerSize={2} />

      <ServiceInfoBlock {...textMassProduction.benefits} headerSize={2} />

      <ServiceInfoBlock {...textMassProduction.useCases} headerSize={2} />

      <ServiceInfoBlock {...textMassProduction.stages} headerSize={2} />
      <ServiceInfoBlock
        {...textMassProduction.importantMoments}
        headerSize={2}
      />

      <ServiceInfoBlock
        {...textMassProduction.whyNot3Dprinting}
        headerSize={2}
      />
    </SingleServiceLayout>
  );
}
