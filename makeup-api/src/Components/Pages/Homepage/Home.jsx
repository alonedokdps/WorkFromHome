import axios from "axios";
import React, {useEffect, useState} from "react";
import "./Home.css";
import Product from "./ProductList";
const Home = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("http://makeup-api.herokuapp.com/api/v1/products.json")
      .then(function (response) {
        setProduct(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="container">
      <Product product={product} />
    </div>
  );
};

export default Home;
