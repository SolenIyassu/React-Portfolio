import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Project from "./Pages/Project";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Experience from "./Pages/Experience";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Experience" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
