import React, { useState, useEffect } from "react";

export default function AdminDashboard() {
  // Sets up the variables that will be used between the frontend and backend
  const [eventTitle, setEventTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startAt, setStartAt] = useState("");
  const [endAt, setEndAt] = useState("");
  const [newChoices, setNewChoices] = useState([]);
  const [choiceInput, setChoiceInput] = useState("");
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);
  const [showUserModal, setShowUserModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch events
  const fetchEvents = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/admin/events");
      const data = await res.json();
      setEvents(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Fetch events error:", err);
    }
  };

  // Fetch Users
  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/admin/users");
      const data = await res.json();
      setUsers(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Fetch users error:", err);
    }
  };

  useEffect(() => {
    fetchEvents();
    fetchUsers();
  }, []);

  // Create Event
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newEvent = {
      eventTitle,
      description,
      startAt: startAt + ":00",
      endAt: endAt + ":00",
      choices: newChoices.map((text) => ({ text }))
    };

    await fetch("http://localhost:8080/api/admin/event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEvent),
    });

    // Reset form
    setEventTitle("");
    setDescription("");
    setStartAt("");
    setEndAt("");
    setNewChoices([]);
    setChoiceInput("");

    fetchEvents();
  };

  // Adding a choice to an event
  const addCreatingChoice = () => {
    if (!choiceInput.trim()) return;
    setNewChoices([...newChoices, choiceInput.trim()]);
    setChoiceInput("");
  };

  // Removing a choice from an event
  const removeCreatingChoice = (index) => {
    setNewChoices(newChoices.filter((_, i) => i !== index));
  };

  // Delete an Event
  const deleteEvent = async (eventId) => {
    if (!window.confirm("Delete this event?")) return;

    await fetch(`http://localhost:8080/api/admin/events/${eventId}`, {
      method: "DELETE",
    });

    fetchEvents();
  };

  // Filter Users
  const filteredUsers = users.filter((u) =>
    u.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Dashboard</h1>

      {/* View Users */}
      <button
        className="btn login-button"
        style={{ marginBottom: "2rem" }}
        onClick={() => setShowUserModal(true)}
      >
        View Users
      </button>

      {/* Create Event */}
      <div className="admin-card">
        <h2>Create New Event</h2>

        <form onSubmit={handleSubmit} className="admin-form">
          <input
            type="text"
            placeholder="Event Name"
            className="input-field"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            required
          />

          <textarea
            placeholder="Description"
            className="input-field"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <div className="admin-date-row">
            <input
              type="datetime-local"
              className="input-field"
              value={startAt}
              onChange={(e) => setStartAt(e.target.value)}
              required
            />
            <input
              type="datetime-local"
              className="input-field"
              value={endAt}
              onChange={(e) => setEndAt(e.target.value)}
              required
            />
          </div>

          {/* Choices during Creation */}
          <div style={{ marginTop: "1rem" }}>
            <h3 style={{ color: "#ffd633" }}>Choices</h3>

            <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
              <input
                type="text"
                placeholder="Enter choice..."
                className="input-field"
                value={choiceInput}
                onChange={(e) => setChoiceInput(e.target.value)}
              />

              <button
                type="button"
                className="btn login-button"
                onClick={addCreatingChoice}
              >
                Add
              </button>
            </div>

            <ul>
              {newChoices.map((choice, index) => (
                <li
                  key={index}
                  style={{
                    marginBottom: "6px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  {choice}
                  <button
                    type="button"
                    className="register-button"
                    style={{ padding: "4px 8px" }}
                    onClick={() => removeCreatingChoice(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <button type="submit" className="btn login-button" style={{ marginTop: "1rem" }}>
            Create Event
          </button>
        </form>
      </div>

      {/* Active Events */}
      <div className="admin-card">
        <h2>Active Events</h2>

        <ul className="admin-event-list">
          {events
            .filter((e) => e.state === "ACTIVE")
            .map((e) => (
              <li key={e.id} className="admin-event-item">

                {/* Title & Delete */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <strong className="admin-event-name">{e.eventTitle}</strong>

                  <button
                    className="register-button"
                    style={{ background: "red", color: "white" }}
                    onClick={() => deleteEvent(e.id)}
                  >
                    Delete
                  </button>
                </div>

                {/* Dates */}
                <span className="admin-event-dates">
                  {e.startAt?.split("T")[0]} → {e.endAt?.split("T")[0]}
                </span>

                {/* Choices */}
                <ul style={{ marginTop: "0.8rem" }}>
                  {e.choices?.map((choice) => (
                    <li key={choice.id} style={{ padding: "4px 0" }}>
                      {choice.text}
                    </li>
                  ))}
                </ul>
              </li>
            ))}

          {events.filter((e) => e.state === "ACTIVE").length === 0 && (
            <p className="admin-empty">No active events.</p>
          )}
        </ul>
      </div>

      {/* Closed Events */}
      <div className="admin-card" style={{ opacity: 0.85 }}>
        <h2>Closed Events</h2>

        <ul className="admin-event-list">
          {events
            .filter((e) => e.state === "CLOSED")
            .map((e) => (
              <li key={e.id} className="admin-event-item">

                {/* Title & Delete */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <strong className="admin-event-name">
                    {e.eventTitle}
                    <span className="closed-tag"> (Closed)</span>
                  </strong>

                  <button
                    className="register-button"
                    style={{ background: "red", color: "white" }}
                    onClick={() => {
                      if (window.confirm("Delete this closed event?")) {
                        fetch(`http://localhost:8080/api/admin/events/${e.id}`, {
                          method: "DELETE",
                        }).then(() => fetchEvents());
                      }
                    }}
                  >
                    Delete
                  </button>
                </div>
                
                <span className="admin-event-dates">
                  {e.startAt?.split("T")[0]} → {e.endAt?.split("T")[0]}
                </span>

                <ul style={{ marginTop: "0.8rem" }}>
                  {e.choices?.map((choice) => (
                    <li key={choice.id} style={{ padding: "4px 0" }}>
                      {choice.text}
                    </li>
                  ))}
                </ul>

              </li>
            ))}

          {events.filter((e) => e.state === "CLOSED").length === 0 && (
            <p className="admin-empty">No closed events.</p>
          )}
        </ul>
      </div>

      {/* User List */}

      {showUserModal && (
        <div className="modal-backdrop">
          <div className="modal-content" style={{ width: "420px" }}>
            <h2 style={{ marginBottom: "1rem" }}>User List</h2>

            <input
              type="text"
              placeholder="Search users..."
              className="input-field"
              style={{ marginBottom: "1rem", width: "100%", boxSizing: "border-box" }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <div
              style={{
                maxHeight: "260px",
                overflowY: "auto",
                textAlign: "left",
              }}
            >
              {filteredUsers.map((u) => (
                <div
                  key={u.id}
                  style={{
                    padding: "8px 0",
                    borderBottom: "1px solid #ddd",
                    color: "#000"
                  }}
                >
                  <strong>{u.username}</strong>
                  <div style={{ fontSize: "0.9rem", color: "#444" }}>
                    Role: {u.role}
                  </div>
                </div>
              ))}

              {filteredUsers.length === 0 && (
                <p style={{ textAlign: "center", padding: "1rem" }}>No users found.</p>
              )}
            </div>

            <button
              className="register-button"
              style={{ marginTop: "1rem" }}
              onClick={() => setShowUserModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}