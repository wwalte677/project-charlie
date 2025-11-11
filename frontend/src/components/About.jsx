import React from "react";

// 📸 Placeholder photo imports — replace these with real images later
import billy from "../assets/billy.jpg";
import sherri from "../assets/sherri.jpg";
import nathan from "../assets/nathan.jpg";
import ram from "../assets/ram.jpg";
import ben from "../assets/ben.jpg";
import niyati from "../assets/niyati.jpg";
import nick from "../assets/nick.jpg";
import lanz from "../assets/lanz.jpg";
import wyatt from "../assets/wyatt.jpeg";

export default function About() {
  const team = [
    {
      name: "Billy Aranda",
      role: "Quality Assurance Engineer",
      photo: billy,
      education: [
        "A.S. in Computer Science",
        "A.S.T. in Mathematics",
        "A.S. in Physical Science",
      ],
      professionalSkills: [
        "Testing and Debugging",
        "Attention to Detail",
        "Communication and Collaboration",
      ],
      technicalSkills: ["Python, C++, Java"],
      awards: [
        "Valedictorian",
        "Presidential Youth Fitness Award recipient",
        "2x Greater Raider Recipient",
      ],
      experience: [
        "Tournament Organizer/Admin (1+ year, current)",
        "Founder/Owner of Cobalt Esports Organization — Top 22 in RLCS (Pro Scene), over $20K prize distribution across NA/EU/OCE",
      ],
    },
    {
      name: "Sherri Tao",
      role: "Quality Assurance Engineer",
      photo: sherri,
      education: ["B.S. in Computer Science, CSU Sacramento (Expected 2027)"],
      professionalSkills: ["Testing", "Bug Tracking", "Software Validation"],
      technicalSkills: ["Java, C++, Python"],
      awards: [],
      experience: ["Third-year Computer Science student experienced in OOP and software testing", "Developed a 2D video game featuring character movement and collision detection"],
    },
    {
      name: "Nathan Sheppard",
      role: "Programmer (Frontend & Backend)",
      photo: nathan,
      education: ["B.S. in Computer Science, CSU Sacramento (Expected 2027)"],
      professionalSkills: ["Full-stack Development", "Problem Solving", "Code Optimization"],
      technicalSkills: ["Java, C++, JavaScript, Spring Boot, React (Vite)"],
      awards: [],
      experience: ["3rd-year CS major with experience in both front-end and back-end programming", "Created a simple video game as a personal project"],
    },
    {
      name: "Ram Tristan Lobo",
      role: "Designer",
      photo: ram,
      education: ["B.S. in Computer Engineering, CSU Sacramento (Expected 2027)"],
      professionalSkills: ["UI/UX Design", "Leadership", "Collaboration", "UML Design"],
      technicalSkills: ["Java, C, UML"],
      awards: [],
      experience: ["Leads UML design efforts for majority of interfaces", "Ex Vice-President / Current Treasurer of Society of Asian Scientists and Engineers (SASE) at Sac State"],
    },
    {
      name: "Ben Ventura",
      role: "Designer",
      photo: ben,
      education: ["B.S. in Computer Engineering, CSU Sacramento (Expected 2026)"],
      professionalSkills: ["Design Thinking", "UML Design", "Team Collaborator"],
      technicalSkills: ["Java, UML"],
      awards: [],
      experience: ["2nd-year Computer Engineering student focusing on design elements and usability"],
    },
    {
      name: "Nick Allen",
      role: "Designer",
      photo: nick,
      education: ["B.S. in Computer Science, CSU Sacramento (Expected 2027)"],
      professionalSkills: ["UI/UX Design", "Leadership", "Collaboration", "UML Design"],
      technicalSkills: ["Java, C, UML"],
      awards: [],
      experience: ["Leads UML design efforts for majority of interfaces"],
    },
    {
      name: "Lanz Florenn-Pareno",
      role: "Project Coordinator & Programmer (Frontend & Backend)",
      photo: lanz,
      education: ["B.S. in Computer Science, CSU Sacramento (Expected 2027)"],
      professionalSkills: ["Full-stack Development", "Database Management", "Debugging"],
      technicalSkills: ["Java, MySQL, JavaScript, Spring Boot, React (Vite)"],
      awards: ["Presidential Honor Roll (Sierra College)"],
      experience: ["Developed using custom Game Engine to make simple collision based 2-D game with custom graphics"],
    },
    {
      name: "Wyatt Walters",
      role: "Programmer (Frontend & Backend)",
      photo: wyatt,
      education: ["B.S. in Computer Science, CSU Sacramento (Expected 2027)"],
      professionalSkills: ["Full-Stack Development", "Build Tool Integration", "Frontend React Integration"
      ],
      technicalSkills: ["Java, C/C++, JavaScript, Spring Boot, Maven, React (Vite)"],
      awards: ["Presidential Honor Roll (Sierra College)"],
      experience: ["Developed multiple small 2-D games", "Familiar with Backend Design Logic"],
    },
    {
      name: "Niyati Karri",
      role: "Analyst",
      photo: niyati,
      education: ["B.S. in Computer Science, CSU Sacramento (Expected 2025)"],
      professionalSkills: ["Database Maintenance", "Data Migration", "Backup & Recovery"],
      technicalSkills: ["PostgreSQL, Java, Assembly, HTML, Python"],
      awards: ["Selected for AMIS Concert in Paris", "Honors Group Member at CSU Sacramento"],
      experience: [
        "Worked on real-time PostgreSQL project involving permissions and user access control",
        "Full Circle Project participant of the Asian American Society (Sac State)",
      ],
    },
  ];

  return (
    <div
      style={{
        minHeight: "calc(100vh - 120px)",
        background: "linear-gradient(135deg, #043927, #115737)", // Sac State green
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ color: "#ffcc00", marginBottom: "1rem" }}>Meet the Team</h1>

      <p
        style={{
          maxWidth: "700px",
          textAlign: "center",
          marginBottom: "2rem",
          fontSize: "1.1rem",
        }}
      >
        The <strong>Project Charlie</strong> team from California State University, Sacramento
        consists of passionate developers, designers, analysts, and quality assurance engineers
        working together to create a secure, fair, and user-friendly
        <strong> Electronic Voting System</strong>.
      </p>

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
            className="teamcard"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "10px",
              padding: "1.5rem",
              width: "320px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
              border: "2px solid #ffcc00",
              textAlign: "center",
            }}
          >
            {/* Photo */}
            <img
              src={member.photo}
              alt={member.name}
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #ffcc00",
                marginBottom: "1rem",
              }}
            />

            {/* Name & Role */}
            <h2 style={{ color: "#ffcc00", marginBottom: "0.25rem" }}>{member.name}</h2>
            <p style={{ fontStyle: "italic", marginBottom: "1rem" }}>{member.role}</p>

            {/* Education */}
            <section style={{ marginBottom: "1rem" }}>
              <h3 style={{ color: "#ffcc00" }}>Education</h3>
              <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
                {member.education.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            </section>

            {/* Professional Skills */}
            <section style={{ marginBottom: "1rem" }}>
              <h3 style={{ color: "#ffcc00" }}>Professional Skills</h3>
              <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
                {member.professionalSkills.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </section>

            {/* Technical Skills */}
            <section style={{ marginBottom: "1rem" }}>
              <h3 style={{ color: "#ffcc00" }}>Technical Skills</h3>
              <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
                {member.technicalSkills.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </section>

            {/* Awards */}
            {member.awards.length > 0 && (
              <section style={{ marginBottom: "1rem" }}>
                <h3 style={{ color: "#ffcc00" }}>Awards & Recognition</h3>
                <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
                  {member.awards.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Experience */}
            {member.experience.length > 0 && (
              <section>
                <h3 style={{ color: "#ffcc00" }}>Experience</h3>
                <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
                  {member.experience.map((x, i) => (
                    <li key={i}>{x}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}