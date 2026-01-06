import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState({});

  const toggleCart = (id, product) => {
    setCart((prev) => {
      
      const newCart = { ...prev };
      
        newCart[id] = product;
          newCart[id] = { ...product, quantity: 1 };

      return newCart;
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const newCart = { ...prev };
      delete newCart[id];
      return newCart;
    });
  }
  
  const addToCart = (product) => {
    setCart(prev => {
      const newCart = { ...prev };
        newCart[product.id].quantity += 1;
      return newCart;
    });
  };

  // Disminuir cantidad o eliminar si llega a 0
  const decreaseQty = (id) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[id]) {
        if (newCart[id].quantity > 1) {
          newCart[id].quantity -= 1;
        } else {
          delete newCart[id];
        }
      }
      return newCart;
    });
  };



  
  return(
    <CartContext.Provider value={{ cart, toggleCart, removeFromCart , addToCart, decreaseQty}}>
      {children}
    </CartContext.Provider>
  )
}       

export const useCart = () => useContext(CartContext);