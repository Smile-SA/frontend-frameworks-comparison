import { lazy, type Component } from 'solid-js';
import { Route, Router, Routes } from "@solidjs/router";

// import Index from './pages/Index';
// import Layout from './pages/Layout';
// import Dynamic from './pages/Dynamic';
// import Async from './pages/Async';

const Index = lazy(() => import("./pages/Index"));
const Layout = lazy(() => import("./pages/Layout"));
const Dynamic = lazy(() => import("./pages/Dynamic"));
const Async = lazy(() => import("./pages/Async"));
const Busy = lazy(() => import("./pages/Busy"));
const Counter = lazy(() => import("./pages/Counter"));

const App: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Index} />
        <Route path="/layout" component={Layout} />
        <Route path="/dynamic" component={Dynamic} />
        <Route path="/async" component={Async} />
        <Route path="/busy" component={Busy} />
        <Route path="/counter" component={Counter} />
      </Routes>
    </Router>
  );
};

export default App;
