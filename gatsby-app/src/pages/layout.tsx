import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import DynamicLayout from "../layouts/DynamicLayout";
import Homepage from "../components/Homepage";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <DynamicLayout>
      <Homepage />
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
      href="http://localhost:3333/css_OIzBRxciYG74p5zSuRGfzMOMmxX2w4G6eJ9zFXXGLgE.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="http://localhost:3333/css_uGznCPRfy4VyscOn7wc-83IOi6ex6Osgx7AS18BCoFI.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="//cdn.jsdelivr.net/bootstrap/3.3.7/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="http://localhost:3333/css_iZHYdEhagxtlMnc7tQBGAPpfu3YF-FwbR8QCKEILwYQ.css"
    />
    <link
      rel="icon"
      type="image/vnd.microsoft.icon"
      href="http://localhost:3333/favicon.ico"
    />
    <body className="path-frontpage page-node-type-page has-glyphicons" />
  </>
);
