import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
          <link rel="preload" href="/fonts/DidactGothic-Regular.ttf" as="font" crossOrigin="" />
          <link
            rel="preload"
            href="/fonts/EBGaramond/Raleway-Regular.ttf"
            as="font"
            crossOrigin=""
          />
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
