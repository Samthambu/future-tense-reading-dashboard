import Head from "next/head";
import dynamic from "next/dynamic";

/* The app reads the reader's private data from their browser, so it renders
   only in the browser (no server-side rendering). */
const App = dynamic(() => import("../components/App"), {
  ssr: false,
  loading: () => <p style={{ padding: 40, textAlign: "center", color: "#7D4B3F" }}>Opening your library…</p>
});

export default function Page() {
  return (
    <>
      <Head>
        <title>Future Tense Reading Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>
      <noscript><p style={{ padding: 40 }}>Please turn on JavaScript to use the Future Tense Reading Dashboard.</p></noscript>
      <App />
    </>
  );
}
