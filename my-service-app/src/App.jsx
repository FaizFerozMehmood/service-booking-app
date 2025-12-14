import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import { getDATA } from "./assets/HandleJsonData";
import Footer from "./components/Footer";
import CartPage from "./components/CartPage";
import ServiceDetailsPage from "./components/ServiceDetailsPage"
// import BookingPage from "./components/BookingPage";
import { CartProvider } from "./components/CartContext";
import CheckoutSuccessPage from "./components/CheckoutSuccessPage";
import { Toaster } from "react-hot-toast";

function App() {
  console.log(getDATA());
  return (
    <CartProvider>

    <div className="flex flex-col min-h-screen bg-black" >
      <Navbar />
      <Toaster position="top-right" />
      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<CartPage />} /> 
          <Route path="/services/:id" element={<ServiceDetailsPage />} />
          {/* <Route path="/booking" element={<BookingPage />} />  */}
          <Route path="/checkout" element={<CheckoutSuccessPage />} /> 
        </Routes>
      </main>
      <Footer />
    </div>
    </CartProvider>
  );
}

export default App;
