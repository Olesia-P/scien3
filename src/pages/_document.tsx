import React from 'react';

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';

interface Props {
  locale: string;
}

class MyDocument extends Document<Props> {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps & Props> {
    const initialProps = await Document.getInitialProps(ctx);
    const langFromUrl = ctx.query?.lang;

    const formatLanguage = () => {
      if (typeof langFromUrl === 'string') {
        return langFromUrl === 'ua' ? 'uk' : langFromUrl;
      } else {
        return 'uk';
      }
    };

    return {
      ...initialProps,
      locale: formatLanguage(),
    };
  }

  render() {
    return (
      <Html lang={this.props.locale}>
        <Head>
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
          <link
            rel="preload"
            as="image"
            href="/services/bw_silicone_mold.webp"
          />
        </Head>
        <body>
          <Main />
          <div id="modal-root" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

// OLD FALLBACK

// import React from 'react';
// import { Html, Head, Main, NextScript } from 'next/document';

// export default function Document() {
//   return (
//     <Html>
//       <Head>
//         <link
//           rel="preload"
//           href="/fonts/Onest-Medium.woff2"
//           as="font"
//           type="font/woff2"
//           crossOrigin="anonymous"
//         />
//         <link
//           rel="preload"
//           href="/fonts/PricedownBl-Regular.woff2"
//           as="font"
//           type="font/woff2"
//           crossOrigin="anonymous"
//         />
//         <link
//           rel="preload"
//           href="/fonts/Teko-Medium.woff2"
//           as="font"
//           type="font/woff2"
//           crossOrigin="anonymous"
//         />

//         <link rel="preload" as="image" href="/services/bw_3d_modeling.webp" />
//         <link rel="preload" as="image" href="/services/bw_3d_printer.webp" />
//         <link
//           rel="preload"
//           as="image"
//           href="/services/bw_serial_production.webp"
//         />
//         <link rel="preload" as="image" href="/services/bw_silicone_mold.webp" />
//       </Head>
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }
