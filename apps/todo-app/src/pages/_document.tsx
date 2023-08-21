import DefaultHead from "@/components/DefaultHead";
import { Html, Head, Main, NextScript } from "next/document";

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
