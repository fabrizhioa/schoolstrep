import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Header from "./components/Header";
import ShopPage from "./pages/ShopPage";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shoppage" element={<ShopPage />} />
      </Routes>
    </>
  );
}

export default App;
