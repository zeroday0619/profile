import { Html, Main, Head, NextScript } from "next/document";

const Document = () => (
  <Html lang="ko" data-theme="oneui">
    <Head>
      <meta name="color-scheme" content="light dark" />
      <meta name="theme-color" content="#FFFFFF" media="(prefers-color-scheme: light)" />
      <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
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