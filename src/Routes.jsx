import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Overview from "./modules/Overview";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TourDetail from "./modules/TourDetail";

const Routess = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/:id" element={<TourDetail />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
export default Routess;
