import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Stepers from "./components/Stepers";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Stepers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
