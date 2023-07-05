import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";

const AsyncHomepage = lazy(() => import("./pages/AsyncHomepage"));
const Homepage = lazy(() => import("./pages/Homepage"));
const StaticLayout = lazy(() => import("./layouts/StaticLayout"));
const DynamicLayout = lazy(() => import("./layouts/DynamicLayout"));
const DynamicHomepage = lazy(() => import("./pages/DynamicHomepage"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <StaticLayout>
              <Homepage />
            </StaticLayout>
          }
        />
        <Route
          path="/layout"
          element={
            <DynamicLayout>
              <Homepage />
            </DynamicLayout>
          }
        />
        <Route
          path="/dynamic"
          element={
            <DynamicLayout>
              <DynamicHomepage />
            </DynamicLayout>
          }
        />
        <Route
          path="/async"
          element={
            <DynamicLayout>
              <AsyncHomepage />
            </DynamicLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
