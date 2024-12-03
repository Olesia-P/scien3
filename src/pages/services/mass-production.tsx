import React from 'react';
import ServiceInfoBlock from '@/components/services-components/service-info-block/service-info-block';
import { textSingleServiceWrapper } from '@/utils/texts/text-single-service-wrapper';
import SingleServiceLayout from '@/components/services-components/single-service-layout/single-service-layout';
import { textMassProduction } from '@/utils/texts/text-mass-production';

export default function MassProduction() {
  const { content, backgroundStyle } = textMassProduction.forWrapper;
  const {
    howItWorks,
    benefits,
    useCases,
    stages,
    importantMoments,
    whyNot3Dprinting,
  } = textMassProduction;
  const { button, contacts } = textSingleServiceWrapper;

  return (
    <SingleServiceLayout
      backgroundStyle={backgroundStyle}
      content={content}
      button={button}
      contacts={contacts}
    >
      <ServiceInfoBlock {...howItWorks} headerSize={2} />

      <ServiceInfoBlock {...benefits} headerSize={2} />

      <ServiceInfoBlock {...useCases} headerSize={2} listWithIcon />

      <ServiceInfoBlock {...stages} headerSize={2} />
      <ServiceInfoBlock {...importantMoments} headerSize={2} />

      <ServiceInfoBlock {...whyNot3Dprinting} headerSize={2} listWithIcon />
    </SingleServiceLayout>
  );
}
