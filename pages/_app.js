import GlobalStyle from "../src/theme/GlobalStyle";
import Footer from "../src/components/patterns/Footer";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
        <Head>
            <title>@ElmoJuh</title>
            <link href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap" rel="stylesheet"/>
        </Head>
        <GlobalStyle/>
        <Component {...pageProps} />
        <Footer/>
    </>
  );
}
