import { useState } from "react";
import Register from "./Register.jsx";

  // Store variables to hold things needed to login and register
  const Login = ({ navigateTo }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showRegister, setShowRegister] = useState(false);

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    general: "",
  });

  // Function to handle login
  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        setErrors({
          username: username ? "" : "Username is required",
          password: password ? "" : "Password is required",
          general: "Invalid username or password",
        });
        return;
      }

      // Clear errors on success
      setErrors({ username: "", password: "", general: "" });

      const data = await response.json();
      localStorage.setItem("user", JSON.stringify(data));
      window.dispatchEvent(new Event("userUpdate"));

      if (!data.role) {
        navigateTo("vote");
        return;
      }

      if (data.role === "ADMIN") {
        navigateTo("admin");
      } else {
        navigateTo("home");
        setTimeout(() => navigateTo("vote"), 0); // Goes to home and instantly to vote // lets re-render happen because they're on the same page - wyatt
      }
    } catch (error) {
      setErrors({
        username: "",
        password: "",
        general: "Login error occurred. Try again.",
      });
    }
  };

  return (
    <div
      style={{
        height: "20vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        paddingBottom: "200px",
      }}
    >
      <h2>Enter Information</h2>

      {/* General error message */}
      {errors.general && (
        <div className="error-general">{errors.general}</div>
      )}

      {/* Username textbox */}
      <div>
        <input
          type="text"
          className="input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username..."
        />
        {errors.username && (
          <div className="error-text">{errors.username}</div>
        )}
      </div>

      {/* Password textbox */}
      <div>
        <input
          type="password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password..."
        />
        {errors.password && (
          <div className="error-text">{errors.password}</div>
        )}
      </div>

      <br />

      {/* Buttons */}
      <div style={{ display: "flex", gap: "12px" }}>
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        <button
          className="register-button"
          onClick={() => setShowRegister(true)}
        >
          Register
        </button>
      </div>

      {/* Register popup */}
      {showRegister && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <Register />
            <div style={{ marginTop: "12px" }}>
              <button
                className="register-button"
                onClick={() => setShowRegister(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;