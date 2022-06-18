import GlobalStyle from "../src/theme/GlobalStyle";
import Menu from "../src/components/patterns/Menu";
import Footer from "../src/components/patterns/Footer";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>@ElmoJuh</title>
      </Head>
      <Menu />
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
