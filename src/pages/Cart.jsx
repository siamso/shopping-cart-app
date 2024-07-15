import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Cart() {
  const { cartItems, handleCartRemove } = useContext(GlobalContext);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setPrice(cartItems.reduce((acc, curr) => acc + curr.price, 0).toFixed(2));
  }, [cartItems]);
  return (
    <div className="flex items-start justify-between">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {cartItems.map((cartItem, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 p-2 w-72 border-2 border-red-900 rounded-lg"
          >
            <div className="p-10 h-60 overflow-hidden hover:scale-105 duration-500">
              <img
                className="object-cover h-full w-full"
                src={cartItem.image}
              />
            </div>
            <p>{cartItem.title}</p>
            <button
              className="bg-red-900 rounded-lg hover:text-red-600 hover:bg-white hover:border-red-900 border-2 duration-500 text-white w-36 h-14"
              onClick={() => handleCartRemove(cartItem)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div>
        <div className="border-red-900 border-2 h-52 w-28 rounded-lg flex flex-col justify-around items-center">
          <h1 className="bg-red-900 text-white w-full h-full text-center">
            Total Price
          </h1>
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
