import React from "react";
import { NavLink } from "react-router-dom";

function Header({ title }) {
  return (
    <NavLink to={"/"}>
      <h2 className="text-red-800 font-bold text-xl lg:text-3xl">{title}</h2>
    </NavLink>
  );
}

export default Header;
