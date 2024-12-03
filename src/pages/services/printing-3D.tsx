import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import ServiceInfoBlock from '@/components/services-components/service-info-block/service-info-block';
import { textSingleServiceWrapper } from '@/utils/texts/text-single-service-wrapper';
import SingleServiceLayout from '@/components/services-components/single-service-layout/single-service-layout';
import { textPrinting3D } from '@/utils/texts/text-printing-3D';
import css from '../../styles/page-styles/printing-3D.module.scss';

export default function printing3D() {
  const { content, backgroundStyle } = textPrinting3D.forWrapper;
  const { button, contacts } = textSingleServiceWrapper;

  return (
    <SingleServiceLayout
      backgroundStyle={backgroundStyle}
      content={content}
      button={button}
      contacts={contacts}
    >
      <ServiceInfoBlock
        {...textPrinting3D.howItWorks}
        headerSize={2}
        listWithIcon
      />

      <ServiceInfoBlock {...textPrinting3D.useCases} headerSize={2} />

      <ServiceInfoBlock {...textPrinting3D.mainOptions} headerSize={2} />

      <ServiceInfoBlock {...textPrinting3D.fdm} headerSize={3} />

      <ServiceInfoBlock {...textPrinting3D.sla} headerSize={3} />

      <ServiceInfoBlock {...textPrinting3D.important} headerSize={2} />

      <a
        href={textPrinting3D.linkToMassProduction.link}
        className={css.linkMassProduction}
      >
        {textPrinting3D.linkToMassProduction.text}{' '}
        <FaArrowRightLong className={css.massProdIcon} />
      </a>
    </SingleServiceLayout>
  );
}
