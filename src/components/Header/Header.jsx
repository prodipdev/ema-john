import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="navbar">
      <img src="/src/images/Logo.svg" alt="Logo" />
      <div className="right-side">
        <a href="#">Order</a>
        <a href="#">Order Review</a>
        <a href="#">Manage Inventory</a>
        <a href="#">Login</a>
      </div>
    </div>
  );
};

export default Header;
