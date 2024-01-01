import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// cssfile
import "./style/App.scss";
// components
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Service from "./components/Service.jsx";
import './style/mediaqury.scss'



const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Service />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
