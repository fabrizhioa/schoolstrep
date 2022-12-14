import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Header from "./components/Header";

import Footer from "./components/Footer";
import Splash from "./components/splashScreen";
import Cart from "./pages/Cart";
import Article from "./pages/Article";
import About from "./pages/About";
import CheckOut from "./pages/CheckOut";
import Details from "./pages/Details";

const Shop = React.lazy(() => import("./pages/Shop.js"));

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/articulo/:id" element={<Article />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/orderDetail" element={<Details />} />
        <Route
          path="/shop"
          element={
            <Suspense fallback={<Splash />}>
              <Shop />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
