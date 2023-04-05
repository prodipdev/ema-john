import React from "react";
import "./Cart.css";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

const Cart = ({ cart, handleClearBtn, children }) => {
  let quantity = 0;
  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    quantity += product.quantity;
    console.log("quantity- ");
    console.log(product.quantity);

    totalPrice += product.price * product.quantity;
    totalShipping += product.shipping;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="cart-container">
      <h2>Order Summary</h2>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
      <button onClick={handleClearBtn} className="btn btn-clear">
        Clear Cart
        <ArrowPathIcon className="icon" />
      </button>
      {children}
    </div>
  );
};

export default Cart;
