import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  console.log(pageProps);
  return (
    <>
      {" "}
      <Component {...pageProps} />
      <Head>
        <title>{pageProps.title || "Borseon"}</title>
        <meta name="theme-color" content="yellow" />
        <meta name="description" content={pageProps.description} />
      </Head>
    </>
  );
}

export default MyApp;
