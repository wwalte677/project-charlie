import React, { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const res = await fetch("http://localhost:8080/api/admin/events");
    const data = await res.json();
    setEvents(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEvent = { eventName, description, startDate, endDate };

    await fetch("http://localhost:8080/api/admin/event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEvent),
    });

    fetchEvents();
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Dashboard</h1>

      {/* Create Event */}
      <div className="admin-card">
        <h2>Create New Event</h2>

        <form onSubmit={handleSubmit} className="admin-form">

          <input
            type="text"
            placeholder="Event Name"
            className="input-field"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
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
              type="date"
              className="input-field"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />

            <input
              type="date"
              className="input-field"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn login-button">
            Create Event
          </button>
        </form>
      </div>

      {/* Existing Events */}
      <div className="admin-card">
        <h2>Existing Events</h2>

        <ul className="admin-event-list">
          {events.map((e) => (
            <li key={e.id} className="admin-event-item">
              <strong className="admin-event-name">{e.eventName}</strong>
              <br />
              <span className="admin-event-dates">
                {e.startDate} → {e.endDate}
              </span>
            </li>
          ))}

          {events.length === 0 && (
            <p className="admin-empty">No events created yet.</p>
          )}
        </ul>
      </div>
    </div>
  );
}