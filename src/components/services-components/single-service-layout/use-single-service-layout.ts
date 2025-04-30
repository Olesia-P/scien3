import { useState } from 'react';
import useCopyAndToast from '@/hooks/use-copy-and-toast';
import useIntersectionObserver from '@/hooks/use-intersection-observer';
import { useLanguage } from '@/hooks/use-language';
import useMediaQuery from '@/hooks/use-media-query';
import { textSingleServiceWrapper } from '@/texts/services/text-single-service-wrapper';
import { textContactInfo } from '@/texts/text-contact-info';
import css from './single-service-layout.module.scss';

export default function useSingleServiceLayout(backgroundStyle: number) {
  const language = useLanguage();
  const { email, phone, clickToCopyBtnTitle } = textContactInfo[language];
  const { otherServicesLinkTitle, contactsHeader } =
    textSingleServiceWrapper[language];

  const [isObserved, setIsObserved] = useState(false);
  const [isContactsCardObserved, setIsContatsCardObserved] = useState(false);

  const copyText = useCopyAndToast();
  const isLargeScreen = useMediaQuery(1024);

  const singleServiceRef = useIntersectionObserver(
    () => setIsObserved(true),
    undefined,
    0,
  );

  const contactsCardRef = useIntersectionObserver(
    () => setIsContatsCardObserved(true),
    undefined,
    0,
  );

  const decideBackgroundStyle = () => {
    switch (backgroundStyle) {
      case 1:
        return css.style1;
      case 2:
        return css.style2;
      case 3:
        return css.style3;
      case 4:
        return css.style4;
      default:
        return css.style1;
    }
  };

  return {
    isObserved,
    singleServiceRef,
    isLargeScreen,
    copyText,
    contactsCardRef,
    isContactsCardObserved,
    backgroundStl: decideBackgroundStyle(),
    email,
    phone,
    clickToCopyBtnTitle,
    otherServicesLinkTitle,
    contactsHeader,
    language,
  };
}
