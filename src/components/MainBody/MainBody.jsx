import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./MainBody.css";
import { Link, useLoaderData } from "react-router-dom";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";

const MainBody = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [productsPerPage, setProductsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const { totalProducts } = useLoaderData();

  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const pageNumbers = [...Array(totalPages).keys()];
  const options = [5, 10, 20];

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const res = await fetch("http://localhost:5000/products");
  //       const products = await res.json();
  //       setProducts(products);
  //     } catch (error) {
  //       alert(error);
  //     }
  //   };
  //   fetchProducts();
  // }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:5000/products?page=${currentPage}&limit=${productsPerPage}`
      );

      const data = await response.json();
      setProducts(data);
    }
    fetchData();
  }, [currentPage, productsPerPage]);

  // get cart products
  useEffect(() => {
    const storedCart = getShoppingCart();
    const ids = Object.keys(storedCart);
    fetch(`http://localhost:5000/productsByIds`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ids),
    })
      .then((res) => res.json())
      .then((cartProducts) => {
        const savedCart = [];
        for (const id in storedCart) {
          const addedProduct = cartProducts.find(
            (product) => product._id === id
          );
          if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
          }
        }
        setCart(savedCart);
      });
  }, []);
  const cartHandel = (product) => {
    // const newCart = [...cart, product];
    let newCart = [];
    const exist = cart.find((pd) => pd._id === product._id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exist.quantity = exist.quantity + 1;
      const remaining = cart.filter((pd) => pd._id !== product._id);
      newCart = [...remaining, exist];
    }

    setCart(newCart);
    addToDb(product._id);
  };

  const handleSelectChange = (event) => {
    setProductsPerPage(parseInt(event.target.value));
    setCurrentPage(0);
  };

  return (
    <>
      <div className="main-container">
        <div className="product-container">
          {products.map((product) => (
            <Product
              key={product._id}
              product={product}
              productHandel={cartHandel}
            />
          ))}
        </div>
        <div>
          <Cart cart={cart}>
            <Link to={"/order-review"} className="btn btn-orange">
              Review Order <ArrowRightOnRectangleIcon className="icon" />
            </Link>
          </Cart>
        </div>
      </div>
      {/* pagination */}
      <div className="pagination">
        <p>
          current Page: {currentPage} and items per page: {productsPerPage}
        </p>
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={currentPage === number ? "selected" : ""}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </button>
        ))}
        <select value={productsPerPage} onChange={handleSelectChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default MainBody;
