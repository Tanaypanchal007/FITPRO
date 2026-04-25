// import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProductPage from "../pages/ProductPage";
import ContactPage from "../pages/ContactPage";

const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Layout;
