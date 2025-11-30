import React, { useEffect, useState } from "react";
import Login from "./Login.jsx";

export default function VotingPage({ navigateTo }) {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedChoiceId, setSelectedChoiceId] = useState(null);

  // Load logged-in user
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Fetch events when user loads
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

    if (user) fetchEvents();
  }, [user]);

  // Popup controls
  const openModal = (event) => {
    setSelectedEvent(event);
    setSelectedChoiceId(null);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  // Ask the user to log in if not logged in
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

      {/* List of active events */}
      <ul className="active-events-list">
        {events
          .filter((e) => e.state === "ACTIVE")
          .map((e) => (
            <li key={e.id} className="active-event-card">
              <strong className="active-event-name">{e.eventTitle}</strong>

              <p className="active-event-description">{e.description}</p>

              <p className="active-event-dates">
                {new Date(e.startAt).toLocaleString()} →{" "}
                {new Date(e.endAt).toLocaleString()}
                
              </p>

              <button
                className="btn login-button"
                onClick={() => openModal(e)}
              >
                Vote
              </button>
            </li>
          ))}

        {events.filter((e) => e.state === "ACTIVE").length === 0 && (
          <p className="active-empty">No active events right now.</p>
        )}
      </ul>

      {/* List of closed events */}
      <h1 className="active-events-title" style={{ marginTop: "3rem" }}>
        Closed Events
      </h1>

      <ul className="active-events-list">
        {events
          .filter((e) => e.state === "CLOSED")
          .map((e) => (
            <li key={e.id} className="active-event-card" style={{ opacity: 0.85 }}>
              <strong className="active-event-name">
                {e.eventTitle}
                <span className="closed-tag"> (Closed)</span>
              </strong>

              <p className="active-event-description">{e.description}</p>

              <p className="active-event-dates">
                {new Date(e.startAt).toLocaleString()} →{" "}
                {new Date(e.endAt).toLocaleString()}
              </p>

              <p className="closed-text">Event Closed</p>
            </li>
          ))}

        {events.filter((e) => e.state === "CLOSED").length === 0 && (
          <p className="active-empty">No closed events.</p>
        )}
      </ul>

      {/* Vote popup modal */}
      {selectedEvent && (
        <div className="modal-backdrop">
          <div className="modal-content">

            <h2 style={{ marginBottom: "12px", color: "#000000ff"}}>
              Vote on: {selectedEvent.eventTitle}
            </h2>

            {/* No choices set */}
            {(!selectedEvent.choices || selectedEvent.choices.length === 0) ? (
              <p style={{ marginBottom: "1rem", color: "#064d34" }}>
                No choices available for this event.
              </p>
            ) : (
              <div style={{ textAlign: "left", marginBottom: "16px", color: "#064d34" }}>
                {selectedEvent.choices.map((choice) => (
                  <label key={choice.id} style={{ display: "block", padding: "4px 0" }}>
                    <input
                      type="radio"
                      name="voteChoice"
                      value={choice.id}
                      checked={selectedChoiceId === choice.id}
                      onChange={() => setSelectedChoiceId(choice.id)}
                    />{" "}
                    {choice.text}
                  </label>
                ))}
              </div>
            )}
          
            {/* Button to submit votes */}
            <button
              className="login-button"
              disabled={!selectedChoiceId}
              onClick={async () => {
                // Catch any errors while voting
                try {
                  const payload = {
                    selection: selectedChoiceId
                  };
                  
                  const res = await fetch(
                    `http://localhost:8080/cast/${selectedEvent.id}?userId=${user.id}`,
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(payload),
                    }
                  );
                  if (!res.ok) {
                    alert("Vote failed.");
                    return;
                  }

                  alert("Vote submitted!");
                  closeModal();

                } catch (error) {
                  console.error("Voting error", error);
                  alert("Error submitting vote.");
                }
              }}
            >
            Submit Vote
            </button>
              
            <button
              className="register-button"
              style={{ marginTop: "12px" }}
              onClick={closeModal}
            >
            Cancel
            </button>

          </div>
        </div>
      )}
    </div>
  );
}