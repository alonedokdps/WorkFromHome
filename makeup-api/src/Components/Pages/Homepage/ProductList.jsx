import React from "react";
import Item from "./Item";
import "./ProductList.css";
const ProductList = ({product}) => {
  return (
    <div className="product-list">
      {product.length > 0 && product.map((item, index) => <Item item={item} />)}
    </div>
  );
};

export default ProductList;
