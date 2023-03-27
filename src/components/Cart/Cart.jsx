import React, { useState } from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  const priceList = cart.map((product) => product.price);
  const totalPrice = priceList.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return (
    <div className="cart-container">
      <h2>Order Summary</h2>
      <h3>Selected Items: {cart.length}</h3>
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
};

export default Cart;
