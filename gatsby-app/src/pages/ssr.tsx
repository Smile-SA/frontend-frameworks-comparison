import * as React from "react";
import type { GetServerDataReturn, HeadFC, PageProps } from "gatsby";
import type { WindowLocation } from "@reach/router";

import DynamicLayout from "../layouts/DynamicLayout";
import AsyncHomepage, { IData } from "../components/AsyncHomepage";

const IndexPage: React.FC<
  PageProps<object, object, WindowLocation["state"], IData>
> = ({ serverData }) => {
  return (
    <DynamicLayout>
      <AsyncHomepage data={serverData} />
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

export async function getServerData(): GetServerDataReturn<IData> {
  const [cards, openSources, solutions, technologies] = await Promise.all([
    fetch("http://localhost:3333/last").then((r) => r.json()),
    fetch("http://localhost:3333/opensource").then((r) => r.json()),
    fetch("http://localhost:3333/solutions").then((r) => r.json()),
    fetch("http://localhost:3333/technologies").then((r) => r.json()),
  ]);
  return {
    status: 200,
    props: {
      cards,
      openSources,
      solutions,
      technologies,
    },
  };
}
