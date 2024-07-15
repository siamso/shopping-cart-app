import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <ul className="flex gap-4 font-bold text-xl lg:text-3xl items-center">
      <NavLink to={"/"}>
        <li>Home</li>
      </NavLink>
      <NavLink to={"cart"}>
        <li className="text-2xl lg:text-4xl">
          <FaShoppingCart color="#991b1b" />
        </li>
      </NavLink>
    </ul>
  );
}

export default Navbar;
