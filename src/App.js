// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
// import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import Payments from "./pages/payments/Payments";
import ProductDetails from "./pages/productDetails/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Payments />} />
          <Route
            path="/products/:productParamsId"
            element={<ProductDetails />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
