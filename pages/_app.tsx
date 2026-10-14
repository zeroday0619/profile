import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { createDOMRenderer, RendererProvider, type GriffelRenderer } from "@fluentui/react-components";
import Head from "next/head";
import Layout from "@/layouts/layout";
import { LanguageProvider } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";
import { ThemeProvider } from "@/contexts/ThemeContext";

const App = ({ Component, pageProps, renderer }: AppProps & { renderer?: GriffelRenderer }) => {
  const [styleRenderer] = useState(() => renderer ?? createDOMRenderer());
  return (
    <RendererProvider renderer={styleRenderer}>
      <LanguageProvider>
        <ThemeProvider>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
          </Head>
          <SEO />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </LanguageProvider>
    </RendererProvider>
  );
};

export default App;
