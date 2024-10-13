import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Overview from "./modules/Overview";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Routess = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Overview />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
export default Routess;
