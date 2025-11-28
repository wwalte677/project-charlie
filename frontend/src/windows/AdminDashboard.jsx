import React, { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [eventTitle, setEventTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startAt, setStartAt] = useState("");
  const [endAt, setEndAt] = useState("");
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/admin/events");
      if (!res.ok) throw new Error("Failed to fetch events");

      const data = await res.json();
      setEvents(Array.isArray(data) ? data : []); 
      
    } catch (err) {
      console.error("Fetch error:", err);
      setEvents([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newEvent = {
      eventTitle,
      description,
      startAt: startAt + ":00",
      endAt: endAt + ":00",
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

  const addChoice = async (eventId, text) => {
    if (!text || text.trim() === "") return;

    await fetch(`http://localhost:8080/api/admin/events/${eventId}/choices`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    fetchEvents();
  };

  const deleteChoice = async (eventId, choiceId) => {
    await fetch(
      `http://localhost:8080/api/admin/events/${eventId}/choices/${choiceId}`,
      { method: "DELETE" }
    );

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

      {/* Active Events */}
      <div className="admin-card">
        <h2>Active Events</h2>

        <ul className="admin-event-list">
          {events
            .filter((e) => e.state === "ACTIVE")
            .map((e) => (
              <li key={e.id} className="admin-event-item">
                <strong className="admin-event-name">{e.eventTitle}</strong>
                <br />
                <span className="admin-event-dates">
                  {e.startAt?.split("T")[0]} → {e.endAt?.split("T")[0]}
                </span>

                {/* Add choice */}
                <div style={{ marginTop: "1rem" }}>
                  <input
                    type="text"
                    placeholder="Add choice..."
                    className="input-field"
                    value={e._newChoice || ""}
                    onChange={(ev) => {
                      const value = ev.target.value;
                      setEvents((prev) =>
                        prev.map((eventItem) =>
                          eventItem.id === e.id
                            ? { ...eventItem, _newChoice: value }
                            : eventItem
                        )
                      );
                    }}
                  />
                  <button
                    className="btn login-button"
                    style={{ marginLeft: "10px" }}
                    onClick={() => 
                    addChoice(e.id, e._newChoice)}
                  >
                    Add Choice
                  </button>
                </div>

                {/* Choice list */}
                <ul style={{ marginTop: "0.8rem" }}>
                  {e.choices?.map((choice) => (

                    <li key={choice.id} style={{ padding: "4px 0" }}>
                      {choice.text}
                      <button
                        className="register-button"
                        style={{ marginLeft: "12px", padding: "4px 6px" }}
                        onClick={() => 
                        deleteChoice(e.id, choice.id)}
                      >
                        Remove
                      </button>

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
                <strong className="admin-event-name">
                  {e.eventTitle}
                  <span className="closed-tag"> (Closed)</span>
                </strong>
                <br />
                <span className="admin-event-dates">
                  {e.startAt?.split("T")[0]} → {e.endAt?.split("T")[0]}
                </span>

                {/* Choice list read part */}
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
    </div>
  );
}