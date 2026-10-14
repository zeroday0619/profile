import NextDocument, { Html, Main, Head, NextScript, type DocumentContext } from "next/document";
import { createDOMRenderer, renderToStyleElements } from "@fluentui/react-components";

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
      <meta name="theme-color" content="#fafafa" media="(prefers-color-scheme: light)" />
      <meta name="theme-color" content="#141414" media="(prefers-color-scheme: dark)" />
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

Document.getInitialProps = async (context: DocumentContext) => {
  // Each response needs its own style cache so one request cannot omit another request's styles.
  const renderer = createDOMRenderer();
  const originalRenderPage = context.renderPage;
  context.renderPage = () => originalRenderPage({
    enhanceApp: (Application) => function StyledApplication(props) {
      return <Application {...props} {...{ renderer }} />;
    },
  });
  const initialProps = await NextDocument.getInitialProps(context);
  return {
    ...initialProps,
    styles: <>{initialProps.styles}{renderToStyleElements(renderer)}</>,
  };
};

export default Document;
