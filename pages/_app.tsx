import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "@/layouts/layout";
import { LanguageProvider } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";
import FirefoxBrowserAlert from "@/components/FirefoxBrowserAlert";

const App = ({ Component, pageProps }: AppProps) => (
  <LanguageProvider>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <SEO />
    <FirefoxBrowserAlert />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </LanguageProvider>
);

export default App;
