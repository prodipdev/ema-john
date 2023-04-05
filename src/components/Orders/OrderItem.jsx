import React from "react";
import "./OrderReview.css";
import { TrashIcon } from "@heroicons/react/24/solid";

const OrderItem = ({ product, handleDeleteBtn }) => {
  console.log(product);
  const { id, img, name, price, quantity } = product;
  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div className="review-info">
        <h3>{name}</h3>
        <p>
          Price: <span className="orange-text">${price}</span>
        </p>
        <p>
          Quantity: <span className="orange-text">{quantity}</span>
        </p>
      </div>
      <button onClick={() => handleDeleteBtn(id)} className="btn-delete">
        <TrashIcon className="icon" />
      </button>
    </div>
  );
};

export default OrderItem;
