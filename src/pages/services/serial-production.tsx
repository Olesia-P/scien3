import React from 'react';
import { useSelector } from 'react-redux';
import ServiceInfoBlock from '@/components/services-components/service-info-block/service-info-block';
import SingleServiceLayout from '@/components/services-components/single-service-layout/single-service-layout';
import { textSerialProduction } from '@/texts/services/text-serial-production';
import { RootState } from '@/store/store';

export default function SerialProduction() {
  const { language } = useSelector(({ language }: RootState) => language);

  const { content, backgroundStyle } =
    textSerialProduction[language].forWrapper;
  const {
    howItWorks,
    benefits,
    useCases,
    stages,
    importantMoments,
    whyNot3Dprinting,
  } = textSerialProduction[language];

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
