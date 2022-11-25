import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Logo from "./assets/logo.png";
import Shop from "./pages/Shop";
const Header = React.lazy(() => import("./components/Header"));
const Splash = React.lazy(() => import("./components/splashScreen"));
const Home = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="min-h-screen w-full flex items-center justify-center">
            <img src={Logo} alt="charge logo" className="w-80" />
          </div>
        }
      >
        <Splash />
        <Header />
      </Suspense>

      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Cargando...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/shop"
          element={
            <Suspense fallback={<div>Cargando...</div>}>
              <Shop />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<div>Cargando...</div>}>
              <Home />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
