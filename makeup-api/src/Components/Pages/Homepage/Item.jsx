import React from "react";
import "./Item.css";
const Item = ({item}) => {
  return (
    <div className="item">
      <div className="img-product">
        <img src={item.image_link} alt={item.name} />
      </div>
      <div className="description">
        <h3 className="name-product">{item.name} </h3>
        <p className="price">{item.price}$</p>
      </div>
      <div className="colors">
        <div className="box-color"></div>
      </div>
    </div>
  );
};

export default Item;
