import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import DynamicLayout from "../layouts/DynamicLayout";
import DynamicHomepage from "../components/DynamicHomepage";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <DynamicLayout>
      <DynamicHomepage />
    </DynamicLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Home Page</title>
    <link
      rel="stylesheet"
      type="text/css"
      href="/css_OIzBRxciYG74p5zSuRGfzMOMmxX2w4G6eJ9zFXXGLgE.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="/css_uGznCPRfy4VyscOn7wc-83IOi6ex6Osgx7AS18BCoFI.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="//cdn.jsdelivr.net/bootstrap/3.3.7/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="/css_iZHYdEhagxtlMnc7tQBGAPpfu3YF-FwbR8QCKEILwYQ.css"
    />
    <link
      rel="icon"
      type="image/vnd.microsoft.icon"
      href="https://www.smile.eu/themes/custom/smileeu/favicon.ico"
    />
    <script
      src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
      integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
      crossOrigin=""
    ></script>
    <body className="path-frontpage page-node-type-page has-glyphicons" />
  </>
);