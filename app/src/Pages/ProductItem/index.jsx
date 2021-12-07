import React from "react";
import { Card } from "antd";
import { ProductImg } from "../AllProducts/styles";

const ProductItem = ({ produto }) => {
  const { Meta } = Card;
  return (
    <>
      <Card hoverable cover={<ProductImg alt="Foto" src={produto.linkFoto} />}>
        <Meta title={produto.titulo} />
      </Card>
    </>
  );
};

export default ProductItem;
