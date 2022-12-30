import React, { Suspense, useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

//Componentes
import Header from "./components/Header";
import Footer from "./components/Footer";
import Splash from "./components/splashScreen";
import ModalCart from "./components/ModalCart";

//Paginas
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Article from "./pages/Article";
import About from "./pages/About";
import CheckOut from "./pages/CheckOut";
import Details from "./pages/Details";
import { Contacto } from "./pages/Contacto";
const Shop = React.lazy(() => import("./pages/Shop.js"));

function App() {
  let Location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [Location]);

  const [viewModalCart, setViewModalCart] = useState(false);
  return (
    <>
      <Header openCartAction={() => setViewModalCart(true)} />
      <ModalCart
        closeCartAction={() => setViewModalCart(false)}
        isView={viewModalCart}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/articulo/:id" element={<Article />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/orderDetail" element={<Details />} />
        <Route path="/contacto" element={<Contacto />} />
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
