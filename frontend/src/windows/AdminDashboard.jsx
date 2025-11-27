import React, { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [eventTitle, setEventTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startAt, setStartAt] = useState("");
  const [endAt, setEndAt] = useState("");
  const [events, setEvents] = useState([]);

  // Fetch events from backend
  const fetchEvents = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/admin/events");
      if (!res.ok) throw new Error("Failed to fetch events");

      const data = await res.json();
      if (Array.isArray(data)) {
        setEvents(data);
      } else {
        console.error("Events is not an array:", data);
        setEvents([]);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setEvents([]); // prevent white screen
    }
  };

  // Create a new event
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newEvent = {
      eventTitle,
      description,
      startAt: startAt + ":00",   // Add seconds
      endAt: endAt + ":00"
    };

    try {
      const res = await fetch("http://localhost:8080/api/admin/event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEvent),
      });

      if (!res.ok) throw new Error("Failed to create event");

      setEventTitle("");
      setDescription("");
      setStartAt("");
      setEndAt("");

      fetchEvents();
    } catch (err) {
      console.error("Error creating event:", err);
    }
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
              <strong className="admin-event-name">{e.eventTitle}</strong>
              <br />
              <span className="admin-event-dates">
                {e.startAt} → {e.endAt}
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