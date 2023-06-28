import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import Homepage from "./components/Homepage/Homepage";

function App() {
  return (
    <BrowserRouter>
      <div
        className="dialog-off-canvas-main-canvas"
        data-off-canvas-main-canvas=""
      >
        <Header />
        <div
          role="main"
          className="main-container container-fluid js-quickedit-main-content"
        >
          <div className="row">
            <Routes>
              <Route path="/" element={<Homepage />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
