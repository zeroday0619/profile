import { Html, Main, Head, NextScript } from "next/document";

const themeBootstrapScript = `
  (() => {
    try {
      const storedTheme = window.localStorage.getItem("theme");
      const theme = storedTheme === "dark" || storedTheme === "oneui-dark" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", theme);
    } catch {
      document.documentElement.setAttribute("data-theme", "light");
    }
  })();
`;

const Document = () => (
  <Html lang="ko" data-theme="light" data-scroll-behavior="smooth">
    <Head>
      <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
      <meta name="color-scheme" content="light dark" />
      <meta name="theme-color" content="#000000" media="(prefers-color-scheme: light)" />
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
