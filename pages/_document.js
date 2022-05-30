import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="overflow-x-hidden">
      <Head>
        <style>
          @import url
          {`https://fonts.googleapis.com/css2?family=Changa&display=swap`};
        </style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
