import React from "react";

const NavBar = ({ currentPage, navigateTo }) => {
  
  const navItems = [
    { name: "Home", page: "home" },
    { name: "About", page: "about" },
    { name: "Vote", page: "vote" },
    { name: "Contact", page: "contact" },

  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="nav-title">Project Charlie </h1>
        <div className="nav-button-alignment">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => navigateTo(item.page)}
              className={`nav-buttons ${currentPage === item.page ? "active" : ""}`}
            >
              {item.name}
            </button>
          ))}
          <div className="dropdown">
            <button className="nav-buttons">More ☰</button>
            <div className="dropdown-content">
              <button onClick={() => navigateTo("results")}>Results</button>
              <button onClick={() => navigateTo("credits")}>Credits</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar; 