import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function ProductCard({ product }) {
  const { handleCart, cartItems } = useContext(GlobalContext);
  return (
    <div className="flex flex-col items-center gap-2 p-2 w-72 border-2 border-red-900 rounded-lg">
      <div className="p-10 h-60 overflow-hidden hover:scale-105 duration-500">
        <img className="object-cover h-full w-full" src={product.image} />
      </div>
      <p>{product.title}</p>
      <button
        onClick={() => handleCart(product)}
        className="bg-red-900 rounded-lg hover:text-red-600 hover:bg-white hover:border-red-900 border-2 duration-500 text-white w-36 h-14"
      >
        {cartItems &&
        cartItems.length > 0 &&
        cartItems.findIndex((cartItem) => cartItem.id === product.id) !== -1
          ? "Remove from cart"
          : "Add to cart"}
      </button>
    </div>
  );
}

export default ProductCard;
