import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create CartContext
const CartContext = createContext();

// Create a provider component to wrap your app
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to update the cart
  const updateCart = async (userEmail) => {
    try {
      const response = await axios.get(`http://localhost:5000/carts?email=${userEmail}`);
      setCart(response.data); // Assuming response.data is the array of cart items
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cart, updateCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook to use cart in components
export const useCart = () => {
  return useContext(CartContext);
};