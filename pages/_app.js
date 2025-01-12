import GlobalStyle from "../src/theme/GlobalStyle";
import Footer from "../src/components/patterns/Footer";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>@ElmoJuh</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
        <Footer />
    </>
  );
}
