import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Overview from "./modules/Overview";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TourDetail from "./modules/TourDetail";
import SignupForm from "./modules/SignupForm";
import SignInForm from "./modules/SignInForm";

const Routess = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Overview />} />
          <Route path="/:id" element={<TourDetail />} />
          <Route path="/sign_up" element={<SignupForm />} />
          <Route path="/" element={<SignInForm />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
export default Routess;
