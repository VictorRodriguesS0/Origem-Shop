import React from "react";
import { UserContext } from "../../Routes";
import ProductItem from "../ProductItem";

const AllProducts = () => {
  const allProducts = React.useContext(UserContext);
  console.log(allProducts, "aaaaaaaaaaaaaaa");
  return (
    <div>
      <a>Todos os Produtos</a>
      {allProducts &&
        allProducts.map((produto) => <ProductItem produto={produto} />)}
    </div>
  );
};

export default AllProducts;
