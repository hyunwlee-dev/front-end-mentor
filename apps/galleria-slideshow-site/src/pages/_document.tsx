import { DefaultHead } from '@hyunwlee/ui';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <DefaultHead />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
