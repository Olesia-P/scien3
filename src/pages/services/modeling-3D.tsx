import React from 'react';
import ServiceInfoBlock from '@/components/services-components/service-info-block/service-info-block';
import { textModeling3D } from '@/utils/texts/text-modeling-3D';
import { textSingleServiceWrapper } from '@/utils/texts/text-single-service-wrapper';
import SingleServiceLayout from '@/components/services-components/single-service-layout/single-service-layout';

export default function Modeling3D() {
  const { content, backgroundStyle } = textModeling3D.forWrapper;
  const { stages, product, useCases } = textModeling3D;
  const { button, contacts } = textSingleServiceWrapper;

  return (
    <SingleServiceLayout
      backgroundStyle={backgroundStyle}
      content={content}
      button={button}
      contacts={contacts}
    >
      <ServiceInfoBlock {...useCases} headerSize={2} listWithIcon />

      <ServiceInfoBlock {...stages} headerSize={2} />

      <ServiceInfoBlock {...product} headerSize={2} />
    </SingleServiceLayout>
  );
}
