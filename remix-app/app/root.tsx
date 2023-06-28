import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "/css_OIzBRxciYG74p5zSuRGfzMOMmxX2w4G6eJ9zFXXGLgE.css",
  },
  {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",
  },
  {
    rel: "stylesheet",
    href: "/css_uGznCPRfy4VyscOn7wc-83IOi6ex6Osgx7AS18BCoFI.css",
  },
  {
    rel: "stylesheet",
    href: "//cdn.jsdelivr.net/bootstrap/3.3.7/css/bootstrap.min.css",
  },
  {
    rel: "stylesheet",
    href: "/css_iZHYdEhagxtlMnc7tQBGAPpfu3YF-FwbR8QCKEILwYQ.css",
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="path-frontpage page-node-type-page has-glyphicons">
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
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
              <Outlet />
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
