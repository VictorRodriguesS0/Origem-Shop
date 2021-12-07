import React from "react";
import { Routes, Route } from "react-router-dom";
import Categories from "./Pages/Caregories";
import NoMatch from "./Components/NoMatch";
import { getActiveProducts } from "./api";

import App from "./App";
import AllProducts from "./Pages/AllProducts";

export const UserContext = React.createContext();

async function getProducts() {
  return await getActiveProducts();
}

const Rotas = () => (
  <UserContext.Provider value={getProducts()}>
    <Routes>
      <Route index element={<AllProducts />} />
      <Route path="categorias" element={<Categories />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  </UserContext.Provider>
);

export default Rotas;
