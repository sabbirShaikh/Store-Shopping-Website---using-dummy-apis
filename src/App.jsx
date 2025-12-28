import React from "react";
import Navbar from "./pages/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./product-pages/Products";
import Cart from "./cart/Cart";
import Footer from "./pages/Footer";
import OrderConfirmation from "./cart/OrderConfirmation";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/confirm" element={<OrderConfirmation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
