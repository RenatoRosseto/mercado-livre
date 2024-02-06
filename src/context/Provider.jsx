import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const value = {
    products,
    setProducts,
    cartItems,
    setCartItems,
    searchTerm,
    setSearchTerm,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default Provider;
