import React from "react";
import billy from "../assets/billy.jpg";
import sherri from "../assets/sherri.jpg";
import nathan from "../assets/nathan.jpg";
import ram from "../assets/ram.jpg";
import ben from "../assets/ben.jpg";
import niyati from "../assets/niyati.jpg";
import nick from "../assets/nick.jpg";
import lanz from "../assets/lanz.jpg";
import wyatt from "../assets/wyatt.jpeg";

export default function Credits() {
  const team = [
    {
      name: "Billy Aranda",
      role: "Quality Assurance Engineer",
      photo: billy,
      tasks: [
        "N/A",
      ],
    },
    {
      name: "Sherri Tao",
      role: "Quality Assurance Engineer",
      photo: sherri,
      tasks: [
        "N/A",
      ],
    },
    {
      name: "Nathan Sheppard",
      role: "Programmer (Frontend & Backend)",
      photo: nathan,
      tasks: [
        "N/A",
      ],
    },
    {
      name: "Ram Tristan Lobo",
      role: "Designer",
      photo: ram,
      tasks: [
        "N/A",
      ],
    },
    {
      name: "Ben Ventura",
      role: "Designer",
      photo: ben,
      tasks: [
        "N/A",
      ],
    },
    {
      name: "Nick Allen",
      role: "Designer",
      photo: nick,
      tasks: [
        "N/A",
      ],
    },
    {
      name: "Lanz Florenn-Pareno",
      role: "Project Coordinator & Programmer (Frontend & Backend)",
      photo: lanz,
      tasks: [
        "N/A",
      ],
    },
    {
      name: "Wyatt Walters",
      role: "Programmer (Frontend & Backend)",
      photo: wyatt,
      tasks: [
        "N/A",
      ],
    },
    {
      name: "Niyati Karri",
      role: "Analyst",
      photo: niyati,
      tasks: [
        "N/A",
      ],
    },
  ];

  return (
    <div
      style={{
        minHeight: "calc(100vh - 120px)",
        background: "linear-gradient(135deg, #636161ff, #998e8eff)",
        color: "#ffffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      {/* Header Section */}
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "800",
          marginBottom: "1rem",
          color: "#ffffffff",
        }}
      >
        Credits
      </h1>

      <p
        style={{
          textAlign: "center",
          maxWidth: "800px",
          marginBottom: "2rem",
          fontSize: "1.1rem",
          lineHeight: "1.6",
          color: "#ffffff"
        }}
      >
        With respect to each team member, the task(s) and/or role(s) assigned
        and completed by each team member are listed below.
      </p>

      {/* Team Section */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        {team.map((member, index) => (
          <div
            key={index}
            className="creditcard"
            style={{
              background: "#3b3b3bff",
              borderRadius: "12px",
              padding: "1.5rem",
              width: "230px",
              boxShadow: "0 3px 10px rgba(255, 255, 255, 0.1)",
              textAlign: "center",
              border: "2px solid #000000ff",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            {/* Member Photo */}
            <img
              src={member.photo}
              alt={member.name}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "1rem",
                border: "3px solid #000000ff",
              }}
            />

            {/* Member Info */}
            <h2
              style={{
                fontSize: "1.1rem",
                fontWeight: "700",
                color: "#47c047ff",
              }}
            >
              {member.name}
            </h2>
            <p
              style={{
                fontStyle: "italic",
                fontSize: "0.95rem",
                color: "#ffffffff",
                marginBottom: "0.75rem",
              }}
            >
              {member.role}
            </p>

            {/* Tasks Section */}
            <section style={{ textAlign: "left" }}>
              <h3
                style={{
                  color: "#47c047ff",
                  fontSize: "1rem",
                  marginBottom: "0.25rem",
                }}
              >
                Tasks & Contributions
              </h3>
              <ul
                style={{
                  paddingLeft: "20px",
                  fontSize: "0.9rem",
                  lineHeight: "1.4",
                }}
              >
                {member.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}