import { Html, Head, Main, NextScript } from 'next/document';
import DefaultHead from '@/components/DefaultHead';

export default function Document() {
  return (
    <Html>
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
