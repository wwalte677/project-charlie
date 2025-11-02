import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import VotingPage from "./components/VotingPage.jsx";
import ResultsPage from "./components/ResultsPage.jsx";
import About from "./components/About.jsx";
import Credits from "./components/Credits.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/vote" element={<VotingPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}