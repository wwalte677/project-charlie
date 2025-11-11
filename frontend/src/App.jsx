import React, { useState } from "react";

// Import all page and support components
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
    { name: "Contact", page: "contact" },
    { name: "Vote", page: "vote" },
    { name: "Credits", page: "credits" },
  ];

  return (
    <nav
      className="sticky top-0 z-20 w-full shadow-md"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        borderBottom: "3px solid #e6b800",
        textAlign: "center",
        paddingBottom: "20px"
      }}
    >
      <div className="w-full flex flex-col items-center justify-center py-3">
        <h1
          className="text-10xl sm:text-10xl font-extrabold tracking-wide text-center"
          style={{
            color: "#043927", // dark Sac green
            letterSpacing: "0.05em",
            textAlign: "center",
            fontSize: "75px"
          }}
        >
          Project Charlie
        </h1>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-3">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => navigateTo(item.page)}
              className={`px-5 py-2 rounded-md font-bold text-md transition-all duration-200 ease-in-out ${
                currentPage === item.page
                  ? "bg-green-800 text-white shadow-lg transform scale-105"
                  : "text-gray-800 bg-gray-100 hover:bg-yellow-400 hover:text-white hover:shadow-md"
              }`}
              style={{
                minWidth: "100px",
                color: "#effffaff",
                backgroundColor: "#006400",
                border: "2px solid #000000",
                margin: "10px"
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default function App() {
  // Manage which page is currently displayed
  const [currentPage, setCurrentPage] = useState("home");

  const navigateTo = (page) => setCurrentPage(page);

  // Render current page
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      case "vote":
        return <VotingPage />;
      case "results":
        return <ResultsPage />;
      case "register":
        return <Register />;
      case "login":
        return <Login />;
      case "credits":
        return <Credits />;
      default:
        return <Home />;
    }
  };

  // Main layout
  return (
    <div className="min-h-screen flex flex-col font-sans antialiased w-full bg-gray-100">
      {/* Navbar */}
      <NavBar currentPage={currentPage} navigateTo={navigateTo} />

      {/* Main content */}
      <main className="flex-grow w-full bg-gray-50 px-4 sm:px-8 py-6">
        <div className="bg-white shadow-xl rounded-xl overflow-hidden w-full">
          {renderPage()}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}