import React from "react";
import { Link } from "react-router-dom";
const TopMenu = () => {
  return (
    <nav>
      <Link to="/">HomePage</Link>
      <Link to="/products">products</Link>
      <Link to="/products/new">Add New products</Link>
      <Link to="/aboutus">About Us</Link>
      <a variant="text" color="secondary" href="/login">
        Login
      </a>
    </nav>
    // <ul>
    //   <li>
    //     <Link to="/">HomePage</Link>
    //   </li>
    //   <li>
    //     <Link to="/products">products</Link>
    //   </li>
    //   <li>
    //     <Link to="/aboutus">About Us</Link>
    //   </li>
    // </ul>
  );
};
export default TopMenu;
