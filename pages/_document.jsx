import { Html, Head, Main, NextScript } from "next/document";

/* Content Security Policy.
   GitHub Pages cannot send custom HTTP headers, so the policy is set with a
   <meta> tag. It only allows scripts, fonts and data from this site itself.
   It is skipped in development because the dev server needs eval(). */
const CSP = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self'",
  "img-src 'self' data: blob:",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'none'",
  "upgrade-insecure-requests"
].join("; ");

export default function Document() {
  const prod = process.env.NODE_ENV === "production";
  return (
    <Html lang="en">
      <Head>
        {prod && <meta httpEquiv="Content-Security-Policy" content={CSP} />}
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="description" content="Future Tense Reading Dashboard: discover, reflect on and apply big ideas from short Christian books. Simple. Sincere. Sacred." />
        <meta name="theme-color" content="#4A120B" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
