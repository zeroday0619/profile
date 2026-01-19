import { Html, Main, Head, NextScript } from "next/document";

const Document = () => (
  <Html lang="ko" data-theme="oneui">
    <Head>
      <link
        rel="preload"
        href="/fonts/PretendardVariable.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;