import React, {useContext} from "react";
import "./Products.css";
import {DataContext} from "../DataContext/DataProvider";
import {Link} from "react-router-dom";

const Products = () => {
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;
  console.log(value);
  return (
    <div className="section">
      <div className="products">
        {products &&
          products.map((product) => (
            <div className="card">
              <div className="img-product">
                <Link to={`/products/${product._id}`}>
                  {" "}
                  <img src={product.images[0]} alt="" />
                </Link>
                <div className="info">
                  <div className="name">
                    <h1 title={product.title}>
                      <Link to={`/products/${product._id}`}>
                        {product.title}
                      </Link>
                    </h1>
                    <div className="description">
                      <p>{product.description}</p>
                    </div>
                    <div className="price">
                      <strong>${product.price}</strong>
                    </div>

                    <div className="button">
                      <button
                        onClick={() => addCart(product._id)}
                        className="btn"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
