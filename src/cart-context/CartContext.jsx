import React, { createContext, useContext, useState } from "react";

const cartCon = createContext();

export function CartContext(props) {
  const [cart, setCart] = useState([]);
  return (
    <cartCon.Provider value={{ cart, setCart }}>
      {props.children}
    </cartCon.Provider>
  );
}

export default function useCartContext() {
  return useContext(cartCon);
}
