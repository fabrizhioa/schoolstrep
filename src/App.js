import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Header from "./components/Header";

import Footer from "./components/Footer";
import Splash from "./components/splashScreen";
import Cart from "./pages/Cart";
import Article from "./pages/Article";
import About from "./pages/About";

const Shop = React.lazy(() => import("./pages/Shop.js"));

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} loader={<Splash />} />
        <Route path="/articulo/:id" element={<Article />} loader={<Splash />} />
        <Route path="/cart" element={<Cart />} loader={<Splash />} />
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
