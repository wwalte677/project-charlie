import React, { useState, useEffect } from "react";

const NavBar = ({ currentPage, navigateTo }) => {
  const navItems = [
    { name: "Home", page: "home" },
    { name: "About", page: "about" },
    { name: "Vote", page: "vote" },
    { name: "Contact", page: "contact" },
  ];

  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  // Load user from localStorage
  const loadUser = () => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser ? JSON.parse(storedUser) : null);
  };

  // Run once
  useEffect(() => {
    loadUser();

    // Listen for changes in localStorage (other tabs)
    window.addEventListener("userUpdate", loadUser);
    window.addEventListener("storage", loadUser);

    return () => {
      window.removeEventListener("storage", loadUser);
      window.removeEventListener("userUpdate", loadUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.dispatchEvent(new Event("userUpdate")); // tell other components so it updates even when you swap pages
    navigateTo("home");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="nav-title">Electronic Voting System</h1>

        <div className="nav-button-alignment">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => navigateTo(item.page)}
              className={`nav-buttons ${
                currentPage === item.page ? "active" : ""
              }`}
            >
              {item.name}
            </button>
          ))}

          {/* More dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button className="nav-buttons">More ☰</button>
            {showDropdown && (
              <div className="dropdown-content">
                <button onClick={() => navigateTo("results")}>Results</button>
                <button onClick={() => navigateTo("credits")}>Credits</button>

                {/* Only show Logout if user exists */}
                {user && (
                  <button
                    onClick={handleLogout}
                    style={{
                      backgroundColor: "#c0392b",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      marginTop: "5px",
                      cursor: "pointer",
                      padding: "5px 10px",
                    }}
                  >
                    Logout
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;