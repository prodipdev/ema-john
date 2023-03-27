import React from "react";
import "./Product.css";

const Product = (props) => {
  const cartHandel = props.productHandel;
  const product = props.product;
  const { img, name, price, ratings, seller } = product;

  return (
    <div className="product">
      <div className="product-info">
        <img src={img} alt="" />
        <h3>{name}</h3>
        <h4>Price: ${price}</h4>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings} star</p>
      </div>
      <button onClick={() => cartHandel(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
