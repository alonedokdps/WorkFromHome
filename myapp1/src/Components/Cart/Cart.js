import React, {useContext, useEffect, useState} from "react";
import {DataContext} from "../DataContext/DataProvider";
import "./Cart.css";
const Cart = () => {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.count;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);
  const reduction = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart([...cart]);
  };
  const remove = (id) => {
    if (!window.confirm("Do you want to delete this product ?")) return;
    cart.forEach((item, index) => {
      if (item._id === id) {
        cart.splice(index, 1);
      }
    });
    setCart([...cart]);
  };
  const increase = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    setCart([...cart]);
  };
  return (
    <div className="section">
      <div className="cart">
        {!cart ||
          (cart.length === 0 && (
            <div style={{textAlign: "center"}}>
              <h3 style={{fontSize: "12px"}}>Cart Empty</h3>
            </div>
          ))}
        {cart.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>products</th>
                <th>Price</th>
                <th>amount</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.length > 0 &&
                cart.map((item) => (
                  <tr>
                    <td>
                      <div className="cart-product">
                        <div className="img-cart">
                          <img src={item.images[0]} alt="" />
                        </div>
                        <div className="info-cart-product">
                          <h3>{item.title}</h3>
                          <p>color: red</p>
                        </div>
                      </div>
                    </td>
                    <td>{item.price}</td>
                    <td>{item.count}</td>
                    <td>
                      <div className="button-cart">
                        <button onClick={() => increase(item._id)}>+</button>
                        <button onClick={() => reduction(item._id)}>-</button>
                      </div>
                    </td>
                    <td>
                      <ion-icon
                        onClick={() => remove(item._id)}
                        name="trash-outline"
                      ></ion-icon>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="total">
        <span>Total : {total}$</span>
        <button>
          payment <ion-icon name="arrow-forward-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default Cart;
