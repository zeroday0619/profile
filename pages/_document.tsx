import { Html, Main, Head, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='kr'>
            <Head/>
            <link
                rel="preload"
                href="/fonts/PretendardVariable.woff2"
                as="font"
                crossOrigin=""
            />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}