import React from "react";
import "./Product.css";
import { motion } from "framer-motion";

const Product = (props) => {
  const cartHandel = props.productHandel;
  const product = props.product;
  const { img, name, price, ratings, seller } = product;

  const animation = {
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  };
  const hoverAnimation = {
    scale: 1.1,
    transition: {
      type: "tween",
    },
  };

  return (
    <motion.div className="product">
      <div className="product-info">
        <div className="img-body">
          <motion.img
            animate={animation}
            whileHover={hoverAnimation}
            src={img}
            alt=""
          />
        </div>
        <h3>{name}</h3>
        <h4>Price: ${price}</h4>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings} star</p>
      </div>
      <button onClick={() => cartHandel(product)}>Add to Cart</button>
    </motion.div>
  );
};

export default Product;
