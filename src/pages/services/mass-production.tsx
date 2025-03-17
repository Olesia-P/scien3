import React from 'react';
import ServiceInfoBlock from '@/components/services-components/service-info-block/service-info-block';
import SingleServiceLayout from '@/components/services-components/single-service-layout/single-service-layout';
import { textMassProduction } from '@/utils/texts/services/text-mass-production';

export default function MassProduction() {
  const language = 'ua';
  const { content, backgroundStyle } = textMassProduction[language].forWrapper;
  const {
    howItWorks,
    benefits,
    useCases,
    stages,
    importantMoments,
    whyNot3Dprinting,
  } = textMassProduction[language];

  return (
    <SingleServiceLayout backgroundStyle={backgroundStyle} content={content}>
      <ServiceInfoBlock {...howItWorks} headerLevel={2} />

      <ServiceInfoBlock {...benefits} headerLevel={2} />

      <ServiceInfoBlock {...useCases} headerLevel={2} listWithIcon />

      <ServiceInfoBlock {...stages} headerLevel={2} />
      <ServiceInfoBlock {...importantMoments} headerLevel={2} />

      <ServiceInfoBlock {...whyNot3Dprinting} headerLevel={2} listWithIcon />
    </SingleServiceLayout>
  );
}
