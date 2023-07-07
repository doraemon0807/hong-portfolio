import "@/styles/globals.css";
import "@/styles/animation.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const headText = `Yun's Portfolio`;

  return (
    <RecoilRoot>
      <Head>
        <title>{headText}</title>
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
