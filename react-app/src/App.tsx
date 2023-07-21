import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Index from "./pages/Index";
// import Layout from "./pages/Layout";
// import Dynamic from "./layouts/Dynamic";
// import Async from "./layouts/Async";
// import Counter from "./layouts/Counter";

import { lazy } from "react";
const Index = lazy(() => import("./pages/Index"));
const Layout = lazy(() => import("./pages/Layout"));
const Dynamic = lazy(() => import("./pages/Dynamic"));
const Async = lazy(() => import("./pages/Async"));
const Counter = lazy(() => import("./pages/Counter"));
const BetterCounter = lazy(() => import("./pages/BetterCounter"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/dynamic" element={<Dynamic />} />
        <Route path="/async" element={<Async />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/better-counter" element={<BetterCounter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
