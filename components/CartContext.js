import React, { createContext, useState } from 'react';

// Create a Cart Context
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add items to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Function to remove items from the cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
