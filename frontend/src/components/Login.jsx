import { useState } from "react";

export default function Login() {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => setInputValue(e.target.value);

  const handleClick = () => {
    // TODO: Replace this alert with a fetch() POST request to /login on the backend.
    alert(`Attempting login for user: ${inputValue}`);
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <h2>Enter Information</h2>
      <input
        type="text"
        id="user-id"
        value={inputValue}
        onChange={handleChange}
        placeholder="User ID..."
      />
      <br />
      <button onClick={handleClick}>Login</button>
    </div>
  );
}
