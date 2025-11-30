import React, { useEffect, useState } from "react";

export default function ResultsWindow() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/admin/events")
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  const loadResults = async (eventId) => {
    setError("");
    setResults(null);

    // Fetch all closed events
    try {
      const res = await fetch(`http://localhost:8080/api/admin/results/${eventId}`);

      if (!res.ok) {

        if (res.status === 403) {
          setError("Results are only available after the event is closed.");
          return;
        }
        throw new Error("Failed to load results");
      }

      const data = await res.json();
      setResults(data);
    
    // Catch any errors when trying to fetch closed events
    } catch (err) {
      setError("Could not load results.");
    }
  };

  // The Elements that make up the ResultsWindow
  return (
    <div className="active-events-container">
      <h1 className="active-events-title">Event Results</h1>

      <div className="admin-card" style={{ maxWidth: "700px" }}>
        <h2>Select Event</h2>

        <select
          className="input-field"
          onChange={(e) => {
            const id = e.target.value;
            setSelectedEvent(id);
            if (id) loadResults(id);
          }}
        >
          <option value="">-- Select an event --</option>

          {events
            .filter(e => e.state === "CLOSED")
            .map(e => (
              <option key={e.id} value={e.id}>
                {e.eventTitle}
              </option>
            ))}
        </select>

        {error && (
          <p style={{ color: "#ffd633", marginTop: "1rem" }}>{error}</p>
        )}
      </div>
      
      {results && (
        <div className="admin-card" style={{ maxWidth: "700px", marginTop: "2rem" }}>
          <h2>{results.eventTitle}</h2>
          <p>Total Votes: {results.totalVotes}</p>

          <ul className="admin-event-list">
            {results.choices.map((c) => {
              const pct =
                results.totalVotes === 0
                  ? 0
                  : Math.round((c.votes / results.totalVotes) * 100);

              return (
                <li key={c.choiceId} className="admin-event-item">
                  <strong>{c.text}</strong>

                  <div
                    style={{
                      background: "rgba(255,255,255,0.15)",
                      height: "10px",
                      borderRadius: "4px",
                      width: "100%",
                      margin: "6px 0",
                    }}
                  >
                    <div
                      style={{
                        background: "#ffd633",
                        height: "100%",
                        width: pct + "%",
                      }}
                    />
                  </div>

                  <span>{c.votes} votes ({pct}%)</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
