import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import OrderItem from "./OrderItem";
import "./OrderReview.css";
import { removeFromDb } from "../../utilities/fakedb";

const OrderReview = () => {
  const cartProducts = useLoaderData();
  const [cart, setCart] = useState(cartProducts);

  // Delete cart item
  const handleDeleteBtn = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  return (
    <div className="main-container">
      <div className="order-container">
        {cart.map((product) => (
          <OrderItem
            key={product.id}
            product={product}
            handleDeleteBtn={handleDeleteBtn}
          ></OrderItem>
        ))}
      </div>
      <div>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default OrderReview;
