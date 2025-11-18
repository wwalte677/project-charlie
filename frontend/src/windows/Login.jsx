import { useState } from "react";
import Register from "./Register.jsx";
import VotingPage from "./VotingPage.jsx";
import AdminDashboard from "./AdminDashboard.jsx";

const Login = ({ navigateTo }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = async () => {
    try {

      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        alert("Invalid username or password");
        return;
      }

      const data = await response.json();

      localStorage.setItem("user", JSON.stringify(data));
      window.dispatchEvent(new Event("userUpdate"));

      alert(`Welcome ${data.username}!`);

      if (!data.role) {
        console.warn("No role found for user:", data.username);
        alert("This account has no role assigned — defaulting to regular user.");
        navigateTo("vote");
        return;
      }

      if (data.role === "ADMIN") {
        navigateTo("admin");
      } else {
        navigateTo("home");
        setTimeout(() => {navigateTo("vote");}, 0);
        //window.location.reload();
      }
    } catch (error) {
      console.error("Login error object:", error);
      alert("Something went wrong! " + (error.message || error));
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
      <div>
        <input
          type="text"
          className="input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username..."
        />
      </div>
      <div>
        <input
          type="password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password..."
        />
      </div>
      <br />
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

      {/* Popup Register Form */}
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