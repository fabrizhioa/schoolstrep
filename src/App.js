import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Home />} />
      <Route path="/shop" element={<ShopPage />} />
    </Routes>
  );
}

export default App;
