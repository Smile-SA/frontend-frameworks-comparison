import Router from "preact-router";
import AsyncRoute from "preact-async-route";

export function App() {
  return (
    <Router>
      <AsyncRoute
        path="/"
        getComponent={() =>
          import("./pages/Index").then((module) => module.default)
        }
      />
      <AsyncRoute
        path="/layout"
        getComponent={() =>
          import("./pages/Layout").then((module) => module.default)
        }
      />
      <AsyncRoute
        path="/dynamic"
        getComponent={() =>
          import("./pages/Dynamic").then((module) => module.default)
        }
      />
      <AsyncRoute
        path="/async"
        getComponent={() =>
          import("./pages/Async").then((module) => module.default)
        }
      />
      <AsyncRoute
        path="/busy"
        getComponent={() =>
          import("./pages/Busy").then((module) => module.default)
        }
      />
      <AsyncRoute
        path="/counter"
        getComponent={() =>
          import("./pages/Counter").then((module) => module.default)
        }
      />
      <AsyncRoute
        path="/better-counter"
        getComponent={() =>
          import("./pages/BetterCounter").then((module) => module.default)
        }
      />
    </Router>
  );
}
