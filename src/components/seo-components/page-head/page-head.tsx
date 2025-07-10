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
  uk: SeoData;
  en: SeoData;
};

type PageHeadProps = {
  initialSeo: SeoData;
  seoText: SeoText;
};

export default function PageHead({ initialSeo, seoText }: PageHeadProps) {
  const language = useLanguage();

  const [seo, setSeo] = useState<SeoData>(initialSeo);

  const { title, description, link } = seo;

  useEffect(() => {
    setSeo(seoText[language]);
  }, [language]);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://scien3.com/${language}${link}`} />
      <link
        rel="alternate"
        hrefLang="en"
        href={`https://scien3.com/en${link}`}
      />
      <link
        rel="alternate"
        hrefLang="uk"
        href={`https://scien3.com/uk${link}`}
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`https://scien3.com/uk${link}`}
      />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta
        property="og:image"
        content="https://scien3.com/site_screenshot.jpg"
      />
      <meta property="og:image:width" content="350" />
      <meta property="og:image:height" content="189" />

      <meta
        property="og:url"
        content={`https://scien3.com/${language}${link}`}
      />
      <meta property="og:type" content="website" />
    </Head>
  );
}
