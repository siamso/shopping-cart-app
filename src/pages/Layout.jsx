import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <div className="flex flex-col container mx-auto min-h-screen">
      <header className="h-20">
        <nav className="flex items-center justify-around h-full">
          <Header title={"Shopping Cart"} />
          <Navbar />
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;
