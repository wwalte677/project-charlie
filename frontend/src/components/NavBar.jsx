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

  // font scaling state
  const [fontScale, setFontScale] = useState(

    parseFloat(localStorage.getItem("fontScale")) || 1
  );

  // apply font scale globally
  useEffect(() => {

    document.documentElement.style.setProperty("--font-scale", fontScale);
    localStorage.setItem("fontScale", fontScale);
  }, [fontScale]);

  // Load user
  const loadUser = () => {

    const storedUser = localStorage.getItem("user");
    setUser(storedUser ? JSON.parse(storedUser) : null);
  };

  useEffect(() => {
    
    loadUser();
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
    window.dispatchEvent(new Event("userUpdate"));
    navigateTo("home");
  };

  // Font control functions
  const increaseFont = () => setFontScale(prev => Math.min(prev + 0.1, 2));
  const decreaseFont = () => setFontScale(prev => Math.max(prev - 0.1, 0.6));
  const resetFont   = () => setFontScale(1);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="nav-title">Electronic Voting System</h1>

        <div className="nav-button-alignment">

          {/* Normal nav items */}
          
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => navigateTo(item.page)}
              className={`nav-buttons ${currentPage === item.page ? "active" : ""}`}
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
                {/* Font size controls */}
                <button className="nav-buttons" onClick={increaseFont}>Font Increase</button>
                <button className="nav-buttons" onClick={decreaseFont}>Font Decrease</button>
                <button className="nav-buttons" onClick={resetFont}>Reset Font</button>

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