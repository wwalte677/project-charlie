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
      fetchEvents();
    }
  }, [user]);

  if (!user) {
    return (
      <div className="login-required-container">
        <h2 style={{ paddingBottom: "20px" }}>
          Please log in to view and vote on events
        </h2>
        <Login navigateTo={navigateTo} />
      </div>
    );
  }

  return (
    <div className="active-events-container">
      <h1 className="active-events-title">Active Events</h1>
      <p className="active-events-welcome">Welcome, {user.username}!</p>

      {/* ACTIVE EVENTS SECTION */}
      <ul className="active-events-list">
        {events
          .filter((e) => e.state === "ACTIVE")
          .map((e) => (
            <li key={e.id} className="active-event-card">
              <strong className="active-event-name">{e.eventTitle}</strong>

              <p className="active-event-description">{e.description}</p>

              <p className="active-event-dates">
                {new Date(e.startAt).toLocaleString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                })}

                {" → "}

                {new Date(e.endAt).toLocaleString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </p>

              <button className="btn login-button">Vote</button>
            </li>
          ))}

        {events.filter((e) => e.state === "ACTIVE").length === 0 && (
          <p className="active-empty">No active events right now.</p>
        )}
      </ul>

      {/* CLOSED EVENTS SECTION */}
      <h1 className="active-events-title" style={{ marginTop: "3rem" }}>
        Closed Events
      </h1>

      <ul className="active-events-list">
        {events
          .filter((e) => e.state === "CLOSED")
          .map((e) => (
            <li
              key={e.id}
              className="active-event-card"
              style={{ opacity: 0.85 }}
            >
              <strong className="active-event-name">
                {e.eventTitle}
                <span className="closed-tag"> (Closed)</span>
              </strong>

              <p className="active-event-description">{e.description}</p>

              <p className="active-event-dates">
                {new Date(e.startAt).toLocaleString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                })}

                {" → "}

                {new Date(e.endAt).toLocaleString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </p>

              <p className="closed-text">Event Closed</p>
            </li>
          ))}

        {events.filter((e) => e.state === "CLOSED").length === 0 && (
          <p className="active-empty">No closed events.</p>
        )}
      </ul>
    </div>
  );
}