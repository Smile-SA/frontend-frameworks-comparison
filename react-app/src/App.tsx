import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import StaticLayout from "./layouts/StaticLayout/StaticLayout";
import DynamicLayout from "./layouts/DynamicLayout/DynamicLayout";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
