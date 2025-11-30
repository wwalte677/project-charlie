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
    // Credits for Billy
    {
      name: "Billy Aranda",
      role: "Quality Assurance Engineer",
      photo: billy,
      tasks: [
        "N/A",
      ],
    },

    // Credits for Sherri
    {
      name: "Sherri Tao",
      role: "Quality Assurance Engineer",
      photo: sherri,
      tasks: [
        "N/A",
      ],
    },

    // Credits for Nathan
    {
      name: "Nathan Sheppard",
      role: "Programmer (Frontend & Backend)",
      photo: nathan,
      tasks: [
        "Most Login & Registration Backend Logic","Database Integration with Springboot","Keyboard Shortcuts Implementation", "Accessibility features", "Vite Setup and Configuration", "Collaborated on Project Skeleton", "Assisted with Theme Management and CSS Styling", "Code Refactoring to match design standards", "IDE choice and setup assistance", "Build Dependency Management with Maven", "Version Control Management"
      ],
    },

    // Credits for Ram
    {
      name: "Ram Tristan Lobo",
      role: "Designer",
      photo: ram,
      tasks: [
        "Design Team Coordination","UI/UX Design","Collaboration with Developers for Design Implementation","Ensured Consistent Visual Language Across the Application", "Voting Design", "Admin User Design", "Home Page Design", "About Page Design", "Contacts Page Design", "Consistent Communication with Team Members to Align on Design Goals",
      ],
    },

    // Credits for Ben
    {
      name: "Ben Ventura",
      role: "Designer",
      photo: ben,
      tasks: [
        "N/A",
      ],
    },

    // Credits for Nick
    {
      name: "Nick Allen",
      role: "Designer",
      photo: nick,
      tasks: [
        "N/A",
      ],
    },

    // Credit for Lanz
    {
      name: "Lanz Florenn Pareno",
      role: "Project Manager & Programmer (Frontend & Backend)",
      photo: lanz,
      tasks: [
        "Goal Section","Routing between Pages","Navigation Bar Creation", "Voting Logic Implementation","Results Display","Ballot Backend Logic & Database","Contact Page Frontend & Backend Logic", "Overall Project Management", "Code refactoring to match design standards", "Helped with Theme Management and CSS Styling", "Created Project Timeline", "Collaborated on Project Skeleton", "Group Meetings Coordination", "Task Delegation and Tracking", "Ensured Timely Deliverables", "Maintained Project Documentation"
      ],
    },

    // Credit for Wyatt
    {
      name: "Wyatt Walters",
      role: "Programmer (Frontend & Backend), Analyst",
      photo: wyatt,
      tasks: [
        "About Section","Credits Section","Created Event Backend Logic & Database","Overall CSS Styling and UI Creation", "Helped with Navigation & Routing Improvements", "Active Events & Admin Dashboard","Closed Event Logic", "Spring Boot & Maven Implementation", "User Filtering between Users & Admins", "Helped with Login and Registration Backend Logic", "Collaborated on Project Skeleton", "Navigation Bar Enhancements", "Footer Implementation", "Initial Project Setup with Automated Builds", "Voting Frontend Design", "Version Control Management"
      ],
    },
    
    // Credit for Niyati
    {
      name: "Niyati Karri",
      role: "Quality Assurance Engineer",
      photo: niyati,
      tasks: [
        "Written Documentation Member", "Requirements Gathering", "Assisted in Project Planning", "Analyzed User Needs", "Assessed Risks and Feasibility", "Ensured Alignment of Project Goals with User Expectations", "Communicated and Kept Track of Requirements with Team Members", "Writing Process of Project in Documentation", "Collaborated on Documentation Writing Heavily"
      ],
    },
  ];

  return (
    <div
      style={{
        minHeight: "calc(100vh - 120px)",
        background: "#242323ff",
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
              background: "#413f3fff",
              borderRadius: "12px",
              padding: "1.5rem",
              width: "230px",
              boxShadow: "0 3px 10px rgba(255, 255, 255, 0.1)",
              textAlign: "center",
              border: "2px solid #1f1e1eff",
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
                border: "3px solid #302f2fff",
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