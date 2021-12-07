import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Categories from "./Pages/Caregories";
import NoMatch from "./Components/NoMatch";
import { getActiveProducts } from "./api";

import App from "./App";
import AllProducts from "./Pages/AllProducts";

export const UserContext = React.createContext();

const Rotas = () => {
  const [products, setProducts] = useState(null);
  const [reload, setReload] = useState(true);

  const getProducts = async () => {
    const produtos = await getActiveProducts();
    setProducts(produtos);
    if (produtos) {
      setReload(false);
    }
    return produtos;
  };
  useEffect(() => {
    getProducts();
  }, [reload]);
  return (
    <UserContext.Provider value={products}>
      <Routes>
        <Route index element={<AllProducts />} />
        <Route path="categorias" element={<Categories />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </UserContext.Provider>
  );
};

export default Rotas;
