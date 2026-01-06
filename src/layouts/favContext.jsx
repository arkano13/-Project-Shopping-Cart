import { createContext, useContext, useState } from "react";

const FavContext = createContext();

export function FavProvider({ children }) {
  const [fav, setFav] = useState({});

  const toggleFav = (id, item) => {
    setFav((prev) => {
      const newFav = { ...prev };
      if (newFav[id]) {
        delete newFav[id];
      } else {
        newFav[id] = item;
      }
      return newFav;
    });
  };
  
  return(
    <FavContext.Provider value={{ fav, toggleFav }}>
      {children}
    </FavContext.Provider>
  )
}       

export const useFav = () => useContext(FavContext);