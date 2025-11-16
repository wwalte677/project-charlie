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
    <div>
      <h1>Admin Dashboard</h1>

      <h2>Create New Event</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
        <button type="submit">Create Event</button>
      </form>

      <h2>Existing Events</h2>
      <ul>
        {events.map((e) => (
          <li key={e.id}>
            {e.eventName} ({e.startDate} → {e.endDate})
          </li>
        ))}
      </ul>
    </div>
  );
}