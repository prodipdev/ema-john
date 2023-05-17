import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainBody from "./components/MainBody/MainBody";
import Home from "./components/Home/Home";
import OrderReview from "./components/Orders/OrderReview";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import cartProductsLoader from "./cartProductsLoader/cartProductsLoader";
import Checkout from "./components/Checkout/Checkout";
import SignUp from "./components/SignUp/SignUp";
import AuthProvider from "./providers/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <MainBody></MainBody>,
        loader: () => fetch("http://localhost:5000/totalproducts"),
      },
      {
        path: "order-review",
        element: <OrderReview></OrderReview>,
        loader: cartProductsLoader,
      },
      {
        path: "checkout",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
      {
        path: "inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
