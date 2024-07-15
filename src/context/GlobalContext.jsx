import React, { createContext, useState } from "react";

export const GlobalContext = createContext(null);

function GlobalStore({ children }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      if (data) {
        setProducts(data);
        setLoading(false);
      }
    } catch (e) {
      console.log(e.message);
      setLoading(false);
    }
  }

  const handleCart = (getCurrentItem) => {
    let copyCartItems = [...cartItems];
    let index = copyCartItems.findIndex(
      (index) => index.id === getCurrentItem.id
    );

    if (index === -1) {
      copyCartItems.push(getCurrentItem);
    } else {
      copyCartItems.splice(index);
    }

    setCartItems(copyCartItems);
  };

  const handleCartRemove = (getCurrentId) => {
    let copyCartItems = [...cartItems];
    const newCartItem = copyCartItems.filter(
      (index) => index.id !== getCurrentId.id
    );
    setCartItems(newCartItem);
  };
  return (
    <GlobalContext.Provider
      value={{
        loading,
        fetchData,
        products,
        handleCart,
        cartItems,
        handleCartRemove,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalStore;
