import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Stepers from "./components/Stepers";

function AppRoutes() {
  return (
    <div className="App">
      <header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Stepers />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default AppRoutes;
