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

      {/* <link rel="preload" as="image" href="/intro/intro-scene.jpg" />
      <link rel="preload" as="image" href="/services/left-curtain.png" />
      <link rel="preload" as="image" href="/services/right-curtain.png" />
      <link rel="preload" as="image" href="/services/bw-3d-modeling.png" />
      <link rel="preload" as="image" href="/services/bw-3d-printer.png" />
      <link
        rel="preload"
        as="image"
        href="/services/bw-serial-production.png"
      />
      <link rel="preload" as="image" href="/services/bw-silicone-mold.png" />
      <link rel="preload" as="image" href="/contacts/building-model.jpeg" /> */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
