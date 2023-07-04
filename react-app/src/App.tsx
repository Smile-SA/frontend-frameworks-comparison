import { BrowserRouter, Route, Routes } from "react-router-dom";

import AsyncHomepage from "./pages/AsyncHomepage";
import Homepage from "./pages/Homepage";
import StaticLayout from "./layouts/StaticLayout";
import DynamicLayout from "./layouts/DynamicLayout";
import DynamicHomepage from "./pages/DynamicHomepage";

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
