import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Inicio from "./pages/Inicio";
import Interesses from "./pages/Interesses";
import Resumo from "./pages/Resumo";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/interesses" element={<Interesses />} />
        <Route path="/resumo" element={<Resumo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
