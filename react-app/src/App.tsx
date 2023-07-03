import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import StaticLayout from "./layouts/StaticLayout/StaticLayout";
import DynamicLayout from "./layouts/DynamicLayout/DynamicLayout";
import DynamicHomepage from "./pages/DynamicHomepage/DynamicHomepage";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
