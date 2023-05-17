import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import OrderItem from "./OrderItem";
import "./OrderReview.css";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { CreditCardIcon } from "@heroicons/react/24/solid";

const OrderReview = () => {
  const cartProducts = useLoaderData();
  const [cart, setCart] = useState(cartProducts);

  // Delete cart item
  const handleDeleteBtn = (id) => {
    const remaining = cart.filter((product) => product._id !== id);
    setCart(remaining);
    removeFromDb(id);
  };
  // Clear Cart Items
  const handleClearBtn = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="main-container">
      <div className="order-container">
        {cart.map((product) => (
          <OrderItem
            key={product._id}
            product={product}
            handleDeleteBtn={handleDeleteBtn}
          ></OrderItem>
        ))}
      </div>
      <div>
        <Cart handleClearBtn={handleClearBtn} cart={cart}>
          <Link to={"/checkout"} className="btn btn-orange">
            Proceed Checkout <CreditCardIcon className="icon" />
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
