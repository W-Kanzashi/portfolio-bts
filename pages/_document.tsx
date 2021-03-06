import { Html, Head, Main, NextScript } from "next/document";
import generateCSP from "utils/generate-csp";
import hashInlineScripts from "utils/hash-inline-script";

export default function Document(): JSX.Element {
  const { scriptHashes } = hashInlineScripts([
    <script
      key="first"
      dangerouslySetInnerHTML={{ __html: `console.log('a')` }}
    />,
    <script
      key="second"
      dangerouslySetInnerHTML={{ __html: `console.log('b')` }}
    />,
  ]);

  return (
    <Html lang="fr">
      <Head>
        <meta name="robots" content="noindex" />
        <meta
          name="description"
          content="Portfolio de l'étudiant CLARK Keanui pour l'épreuve de BTS SIO Option SLAM"
        />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png"></link>
        <meta name="theme-color" content="#442C2E" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
