import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout/Layout";
import Homepage from "../components/Homepage/Homepage";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Homepage />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Home Page</title>
    <link rel="stylesheet" type="text/css" href="/css_OIzBRxciYG74p5zSuRGfzMOMmxX2w4G6eJ9zFXXGLgE.css"/>
    <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    <link rel="stylesheet" type="text/css" href="/css_uGznCPRfy4VyscOn7wc-83IOi6ex6Osgx7AS18BCoFI.css"/>
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/bootstrap/3.3.7/css/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="/css_iZHYdEhagxtlMnc7tQBGAPpfu3YF-FwbR8QCKEILwYQ.css"/>
    <body className="path-frontpage page-node-type-page has-glyphicons" />
  </>
);
