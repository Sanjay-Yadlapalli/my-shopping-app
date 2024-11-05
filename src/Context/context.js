import { createContext, useState } from "react";

const CartContext = createContext();

export const ContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  return (
    <CartContext.Provider value={{ items, setItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
