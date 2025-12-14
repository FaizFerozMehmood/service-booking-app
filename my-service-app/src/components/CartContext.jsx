import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const getInitialCount = () => {
  const storedCount = localStorage.getItem("cartCount");
  return storedCount ? JSON.parse(storedCount) : 0;
};

export const CartProvider = ({ children }) => {
  const [itemCount, setItemCount] = useState(getInitialCount);

  useEffect(() => {
    localStorage.setItem("cartCount", JSON.stringify(itemCount));
  }, [itemCount]);

  const increamentCount = () => {
    setItemCount((prev) => prev + 1);
  };

  const decrementCount = () => {
    setItemCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <CartContext.Provider
      value={{ itemCount, increamentCount, decrementCount }}
    >
      {children}
    </CartContext.Provider>
  );
};
