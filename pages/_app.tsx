import "@/styles/globals.css";
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '@/layouts/layout'
import { ThemeProvider } from "next-themes"


export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <Head>
            <meta charSet="utf-8" />
            <link rel="canonical" href="https://zeroday0619.dev/" />
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <title>zeroday0619</title>
            <meta name="robots" content="index, follow" />
        </Head>
        <ThemeProvider attribute="class">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </>

  );
}
