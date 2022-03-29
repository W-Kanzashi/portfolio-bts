import { Html, Head, Main, NextScript } from "next/document";
import generateCSP from "utils/generate-csp";
import hashInlineScripts from "utils/hash-inline-script";

export default function Document(): JSX.Element {
  const { scriptHashes } = hashInlineScripts([
    <script dangerouslySetInnerHTML={{ __html: `console.log('a')` }} />,
    <script dangerouslySetInnerHTML={{ __html: `console.log('b')` }} />,
  ]);

  return (
    <Html lang="fr">
      <Head>
        <meta
          name="description"
          content="Portfolio de l'étudiant CLARK Keanui pour l'épreuve de BTS SIO Option SLAM"
        />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png"></link>
        <meta name="theme-color" content="#442C2E" />
        <meta
          httpEquiv="Content-Security-Policy"
          content={generateCSP({ scriptHashes })}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
