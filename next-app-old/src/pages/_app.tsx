import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className="dialog-off-canvas-main-canvas"
      data-off-canvas-main-canvas=""
    >
      <Header />
      <div
        role="main"
        className="main-container container-fluid js-quickedit-main-content"
      >
        <div className="row">
          <Component {...pageProps} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
