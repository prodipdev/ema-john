import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
const Header = () => {
  // const [scrollPercent, setScrollPercent] = useState(0);

  // const scrollAction = () => {
  //   let scrolledHeight = document.body.scrollHeight - window.innerHeight;
  //   let scrolled = (window.scrollY / scrolledHeight) * 100;
  //   setScrollPercent(scrolled);
  // };
  // useEffect(() => {
  //   scrollAction();
  //   window.addEventListener("scroll", scrollAction);
  //   return () => {
  //     window.removeEventListener("scroll", scrollAction);
  //   };
  // }, []);

  const { user, logOut } = useContext(AuthContext);
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img src="/src/images/Logo.svg" alt="Logo" />
        </Link>
        <div className="right-side">
          <Link to="/">Shop</Link>
          <Link to="/order-review">Order Review</Link>
          <Link to="/inventory">Manage Inventory</Link>
          <a>{user && user.email}</a>
          {user ? (
            <button className="btn-logout" onClick={() => logOut()}>
              Log Out
            </button>
          ) : (
            <Link className="btn-logout" to="/login">
              Login
            </Link>
          )}
          <Link className="btn-signup" to="/signup">
            Sign Up
          </Link>
        </div>
      </div>
      {/* <div
        className="scroll-percent"
        style={{ height: "4px", width: `${scrollPercent}%` }}
      ></div> */}
    </>
  );
};

export default Header;
