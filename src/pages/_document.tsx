import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
        rel="preload"
        href="/fonts/Onest-Medium.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/PricedownBl-Regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Teko-Medium.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      <link rel="preload" as="image" href="/services/bw_3d_modeling.webp" />
      <link rel="preload" as="image" href="/services/bw_3d_printer.webp" />
      <link
        rel="preload"
        as="image"
        href="/services/bw_serial_production.webp"
      />
      <link rel="preload" as="image" href="/services/bw_silicone_mold.webp" />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
