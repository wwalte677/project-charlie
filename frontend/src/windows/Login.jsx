
import { useState } from "react";
import Register from "./Register.jsx";

const Login = () => {
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

      const result = await response.text();
      alert(result);
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Enter Information</h2>
      <div>
      <input
        type="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username..."
      />
    </div>
    <div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password..."
      />
    </div>
      <br />
      <button onClick={handleLogin}>Login</button>
      <button onClick={() => setShowRegister(true)}>Register</button>

      {/* Popup Register Form */}
      {showRegister && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
              width: "300px",
              textAlign: "center",
            }}
          >
            <Register />
            <button
              onClick={() => setShowRegister(false)}
              style={{
                marginTop: "10px",
                backgroundColor: "#ccc",
                border: "none",
                padding: "8px 15px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;

