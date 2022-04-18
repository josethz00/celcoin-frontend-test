import Document, {
  DocumentProps,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document<DocumentProps> {
  /**
   * This is the render method of `_document`, it is used when you need custom
   * scripts and styles to be imported into the `<head>` of the HTML document.
   * @see https://nextjs.org/docs/api-reference/next/document.html#render
   * @returns {JSX.Element}
   */
  public render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <title>Crypto Assets</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
