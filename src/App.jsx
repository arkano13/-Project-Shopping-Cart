import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import BestSellers from "./pages/Home/BestSellers";
import AllEquip from "./pages/Home/AllEquip";
import NewArrivals from "./pages/Home/NewArrivals";
import Fav from "./pages/Fav/fav";



import StoreLayouts from "./layouts/StoreLayout";


export default function App() {
  return (
    <Routes>
      <Route element={<StoreLayouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/bestsellers" element={<BestSellers />} />
        <Route path="/allequip" element={<AllEquip />} />
        <Route path="/newarrivals" element={<NewArrivals />} />
        <Route path="/fav" element={<Fav />} />
      </Route>
    </Routes>
  );
}