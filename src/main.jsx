import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainBody from "./components/MainBody/MainBody";
import Home from "./components/Home/Home";
import Orders from "./components/Orders/Orders";
import OrderReview from "./components/Orders/OrderReview";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <MainBody></MainBody>,
      },
      {
        path: "orders",
        element: <Orders></Orders>,
      },
      {
        path: "order-review",
        element: <OrderReview></OrderReview>,
      },
      {
        path: "inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
