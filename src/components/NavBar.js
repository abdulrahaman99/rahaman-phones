import React from "react";
import { FaSymfony } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="header">
      <FaSymfony className="icon" />
      <h2>Rahaman Phones And Accessories</h2>
      <ul>
        <li>
          {" "}
          <Link to="/">Home</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/about">About Us</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/products">Products</Link>{" "}
        </li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
}

export default NavBar;
