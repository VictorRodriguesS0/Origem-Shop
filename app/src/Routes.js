import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./Pages/Caregories";
import NoMatch from "./Components/NoMatch";
import App from "./App";

const Rotas = () => (
  <Routes>
    <Route index element={<App />} />
    <Route path="teste" element={<Categories />} />
    <Route path="*" element={<NoMatch />} />
  </Routes>
);

export default Rotas;
