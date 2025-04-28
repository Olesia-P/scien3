/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useLanguage } from '@/hooks/use-language';

export type SeoData = {
  title: string;
  description: string;
  link: string;
};

type SeoText = {
  ua: SeoData;
  en: SeoData;
};

type PageHeadProps = {
  initialSeo: SeoData;
  seoText: SeoText;
};

export default function PageHead({ initialSeo, seoText }: PageHeadProps) {
  const [seo, setSeo] = useState<SeoData>(initialSeo);
  const language = useLanguage();

  useEffect(() => {
    setSeo(seoText[language]);
  }, [language]);

  const { title, description, link } = seo;

  const formatLanguage = language === 'ua' ? 'uk' : language;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link
        rel="canonical"
        href={`https://scien3.com/${formatLanguage}${link}`}
      />
      <link
        rel="alternate"
        hrefLang="en"
        href={`https://scien3.com/en${link}`}
      />
      <link
        rel="alternate"
        hrefLang="ua"
        href={`https://scien3.com/uk${link}`}
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`https://scien3.com/uk${link}`}
      />

      <meta
        property="og:image"
        content="http://scien3.com/site_screenshot.jpg"
      />
      <meta property="og:image:width" content="350" />
      <meta property="og:image:height" content="189" />
    </Head>
  );
}
