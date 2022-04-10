import axios from "axios";
import React, {useEffect, useState} from "react";
import Button from "../Navbar/Button";
import "./Products.css";
const getData = async (page) => {
  try {
    let response = await axios.get(
      `https://fakestoreapi.com/products?limit=${page}`
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};

const Products = () => {
  const [nextPage, setNextPage] = useState(4);
  const [dataProduct, setDataProduct] = useState();
  const handleloadMore = () => {
    setNextPage((nextPage) => nextPage + 4);
  };
  useEffect(() => {
    getData(nextPage)
      .then((data) => setDataProduct(data))
      .catch((err) => console.log(err));
    return;
  }, [nextPage]);
  return (
    <div className="section products">
      <div className="title">
        <h3>
          Product <span>Popular</span>
        </h3>
      </div>
      <div className="product-container">
        {dataProduct &&
          dataProduct.length > 0 &&
          dataProduct.map((item, index) => {
            return (
              <div className="card-products col-4">
                <img src={item.image} alt="" />
                <div className="name-product">
                  <h4>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h4>
                </div>
                <div className="info-detail">
                  <span className="type">men's clothing</span>
                  <span className="price">109.95$</span>
                </div>
              </div>
            );
          })}
        {/* <div className="card-products col-4">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt=""
          />
          <div className="name-product">
            <h4>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h4>
          </div>
          <div className="info-detail">
            <span className="type">men's clothing</span>
            <span className="price">109.95$</span>
          </div>
        </div>
        <div className="card-products col-4">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt=""
          />
          <div className="name-product">
            <h4>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h4>
          </div>
          <div className="info-detail">
            <span className="type">men's clothing</span>
            <span className="price">109.95$</span>
          </div>
        </div>
        <div className="card-products col-4">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt=""
          />
          <div className="name-product">
            <h4>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h4>
          </div>
          <div className="info-detail">
            <span className="type">men's clothing</span>
            <span className="price">109.95$</span>
          </div>
        </div>
        <div className="card-products col-4">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt=""
          />
          <div className="name-product">
            <h4>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h4>
          </div>
          <div className="info-detail">
            <span className="type">men's clothing</span>
            <span className="price">109.95</span>
          </div>
        </div> */}
      </div>
      <div className="load-more">
        <button className="btn" onClick={handleloadMore}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default Products;
