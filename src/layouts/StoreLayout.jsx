import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";   
import UseFetchProducts from "../hooks/UseFetchProducts";
import { FavProvider } from "./favContext";
import { CartProvider } from "./CartContext";
import Fav from "../pages/Fav/fav";

export default function StoreLayout() {
const { products, loading, error } = UseFetchProducts();    

return (
  <CartProvider>
   <FavProvider>
      <Navbar />
      <main>
        <Outlet context={{ products, loading, error }} />
      </main>
      <Footer />
    </FavProvider>
    </CartProvider>
);  
}