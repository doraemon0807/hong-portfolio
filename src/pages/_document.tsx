import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&family=Roboto:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
