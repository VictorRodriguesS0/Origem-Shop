import React from "react";
import { UserContext } from "../../Routes";
import ProductItem from "../ProductItem";
import "antd/dist/antd.css";
import { Container } from "./styles";

const AllProducts = () => {
  const allProducts = React.useContext(UserContext);
  return (
    <Container>
      <h1>Todos os Produtos</h1>
      {allProducts &&
        allProducts.map((produto, index) => (
          <ProductItem produto={produto} key={index} />
        ))}
    </Container>
  );
};

export default AllProducts;
