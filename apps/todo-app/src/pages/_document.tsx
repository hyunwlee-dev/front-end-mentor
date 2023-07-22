import { Html, Head, Main, NextScript } from 'next/document';
import { DefaultHead } from '@hyunwlee/ui';

export default function Document() {
  return (
    <Html>
      <Head>
        <DefaultHead />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
