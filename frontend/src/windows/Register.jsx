import { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.text();
      setMessage(result);
    } catch (error) {
      setMessage("Error connecting to server");
      console.error(error);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginBottom: "10px", display: "block", width: "200px", margin: "10px auto" }}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: "10px", display: "block", width: "200px", margin: "10px auto" }}
          required
        />
        <button type="submit">Register</button>
      </form>

      {message && <p style={{ marginTop: "20px" }}>{message}</p>}
    </div>
  );
}

export default Register;
