import "@/styles/globals.css";
import localFont from "next/font/local";
import type { AppProps } from "next/app";
const proximaFont = localFont({ src: "Proxima.otf" });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={proximaFont.className}>
      <Component {...pageProps} />
    </main>
  );
}
