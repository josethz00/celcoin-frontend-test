import { Html, Head, Main, NextScript } from 'next/document';

/**
 * This is the render method of `_document`, it is used when you need custom
 * scripts and styles to be imported into the `<head>` of the HTML document.
 * @returns {JSX.Element}
 */
export default function MyDocument(): JSX.Element {
  return (
    <Html>
      <Head></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
