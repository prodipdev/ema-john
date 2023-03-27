import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./MainBody.css";

const MainBody = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("products.json");
        const products = await res.json();
        setProducts(products);
      } catch (error) {
        alert(error);
      }
    };
    fetchProducts();
  }, []);

  const cartHandel = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="main-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            productHandel={cartHandel}
          />
        ))}
      </div>
      <div>
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default MainBody;
