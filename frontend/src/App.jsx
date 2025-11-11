import React, { useState } from "react";

// Import pages
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/register.jsx";
import VotingPage from "./components/VotingPage.jsx";
import ResultsPage from "./components/ResultsPage.jsx";
import About from "./components/About.jsx";
import Credits from "./components/Credits.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const NavBar = ({ currentPage, navigateTo }) => {
  const navItems = [
    { name: "Home", page: "home" },
    { name: "About", page: "about" },
    { name: "Vote", page: "vote" },
    { name: "Contact", page: "contact" },
    { name: "Login", page: "login" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="nav-title">Project Charlie</h1>

          <div className="nav-buttons">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => navigateTo(item.page)}
                className={`nav-btn ${currentPage === item.page ? "active" : ""}`}
              >
                {item.name}
              </button>
            ))}

            <div className="dropdown">
              <button className="nav-btn">More ☰</button>
              <div className="dropdown-content">
                <button onClick={() => navigateTo("register")}>Register</button>
                <button onClick={() => navigateTo("results")}>Results</button>
                <button onClick={() => navigateTo("credits")}>Credits</button>
              </div>
            </div>
          </div>
      </div>
    </nav>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const navigateTo = (page) => setCurrentPage(page);

  const renderPage = () => {
    switch (currentPage) {
      case "home": return <Home />;
      case "about": return <About />;
      case "contact": return <Contact />;
      case "vote": return <VotingPage />;
      case "results": return <ResultsPage />;
      case "register": return <Register />;
      case "login": return <Login />;
      case "credits": return <Credits />;
      default: return <Home />;
    }
  };

return (
    <div className="app-container">
      <NavBar currentPage={currentPage} navigateTo={navigateTo} />
      <main className="page-content">{renderPage()}</main>
      <Footer />
    </div>
  );
}