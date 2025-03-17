import React from 'react';
import ServiceInfoBlock from '@/components/services-components/service-info-block/service-info-block';
import { textModeling3D } from '@/utils/texts/services/text-modeling-3D';
import SingleServiceLayout from '@/components/services-components/single-service-layout/single-service-layout';

export default function Modeling3D() {
  const language = 'ua';
  const { content, backgroundStyle } = textModeling3D[language].forWrapper;
  const { stages, product, useCases } = textModeling3D[language];

  return (
    <SingleServiceLayout backgroundStyle={backgroundStyle} content={content}>
      <ServiceInfoBlock {...useCases} headerLevel={2} listWithIcon />

      <ServiceInfoBlock {...stages} headerLevel={2} />

      <ServiceInfoBlock {...product} headerLevel={2} />
    </SingleServiceLayout>
  );
}
