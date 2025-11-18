import React, { useEffect, useState } from "react";
import Login from "./Login.jsx";

export default function VotingPage({ navigateTo }) {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/admin/events");
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };

    if (user) {
      fetchEvents(); // only run if logged in
    }
  }, [user]);

  if (!user) {
    return (
      <div
        style={{
          background: "linear-gradient(135deg, #10251aff 0%, #043927 100%)",
          color: "#fff",
          height: "100vh",
          margin: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h2>Please log in to view and vote on events</h2>
        <Login navigateTo={navigateTo} />
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Active Events</h1>
      <p>Welcome, {user.username}!</p>

      {events.length === 0 ? (
        <p>No active events right now.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {events.map((e) => (
            <li
              key={e.id}
              style={{
                border: "1px solid #ccc",
                margin: "1rem auto",
                padding: "1rem",
                width: "300px",
                borderRadius: "8px",
              }}
            >
              <strong>{e.eventName}</strong>
              <p>{e.description}</p>
              <p>
                {e.startDate} → {e.endDate}
              </p>
              <button>Vote</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
} 