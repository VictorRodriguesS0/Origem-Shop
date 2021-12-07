import React from "react";
import { UserContext } from "../../Routes";
import ProductItem from "../ProductItem";
import "antd/dist/antd.css";

const AllProducts = () => {
  const allProducts = React.useContext(UserContext);
  return (
    <div>
      <h1>Todos os Produtos</h1>
      {allProducts &&
        allProducts.map((produto, index) => (
          <ProductItem produto={produto} key={index} />
        ))}
    </div>
  );
};

export default AllProducts;
