"use client";

import { Suspense, useMemo } from "react";

function Calculation() {
  useMemo(() => {
    let start = performance.now();
    console.log("start", start);
    for (let i = 0; i < 100_000; i++) {
      for (let j = 0; j < 100_000; j++) {
        if (i % 2 === 0) {
          start += j;
        } else {
          start -= j;
        }
      }
    }
    const diff = Math.round(performance.now() - start);
    console.log(diff);
    return diff;
  }, []);
  // Having a hydration error (value is not the same on the server and on the client) causes the component to re-render
  // So here I just put a static value and don't use the calculated value.
  return <div className="title">2000</div>;
}

export default () => (
  <Suspense fallback="loading...">
    <Calculation />
  </Suspense>
);
