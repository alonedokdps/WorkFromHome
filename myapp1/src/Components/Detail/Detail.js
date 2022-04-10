import React, {useContext, useState, useRef} from "react";
import {Link, useParams} from "react-router-dom";
import "./Detail.css";
import {DataContext} from "../DataContext/DataProvider";
import Colors from "../Colors/Colors";
import Sizes from "../Sizes/Sizes";
import Thumb from "../thumb/Thumb";
const Detail = () => {
  const {id} = useParams();
  const value = useContext(DataContext);
  const [products] = value.products;
  const imgRef = useRef();
  const addCart = value.addCart;

  const details = products.filter((product, index) => {
    return product._id === id;
  });
  console.log(imgRef.current);
  const changeImg = (img) => {
    imgRef.current.src = img;
  };

  return (
    <>
      {details &&
        details.map((item, index) => (
          <div className="section">
            <div className="details">
              <div className="img-container">
                <img src={item.images[0]} ref={imgRef} alt="" />
              </div>
              <div className="detail-product">
                <h1 title={item.title}>{item.title}</h1>
                <span>${item.price}</span>
                <Colors colors={item.colors} />
                <Sizes sizes={item.sizes} />
                <p>{item.content}</p>
                <p>{item.description}</p>
                <Thumb images={item.images} changeImg={changeImg} />
                <Link
                  to="/cart"
                  onClick={() => addCart(item._id)}
                  className="btn"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Detail;
