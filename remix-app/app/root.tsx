import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  ScrollRestoration,
} from "@remix-run/react";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "http://localhost:3333/css_OIzBRxciYG74p5zSuRGfzMOMmxX2w4G6eJ9zFXXGLgE.css",
  },
  {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",
  },
  {
    rel: "stylesheet",
    href: "http://localhost:3333/css_uGznCPRfy4VyscOn7wc-83IOi6ex6Osgx7AS18BCoFI.css",
  },
  {
    rel: "stylesheet",
    href: "//cdn.jsdelivr.net/bootstrap/3.3.7/css/bootstrap.min.css",
  },
  {
    rel: "stylesheet",
    href: "http://localhost:3333/css_iZHYdEhagxtlMnc7tQBGAPpfu3YF-FwbR8QCKEILwYQ.css",
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link
          rel="icon"
          type="image/vnd.microsoft.icon"
          href="https://www.smile.eu/themes/custom/smileeu/favicon.ico"
        />
        <Meta />
        <Links />
      </head>
      <body className="path-frontpage page-node-type-page has-glyphicons">
        <ScrollRestoration />
        <LiveReload />
        <Outlet />
      </body>
    </html>
  );
}
