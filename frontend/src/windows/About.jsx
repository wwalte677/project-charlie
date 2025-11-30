import React from "react";
import "../styles/main.css"; 

// import photos of team members
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
    // List of Billy's Information
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
        "Test Case Development",
        "Leadership & Team Management",
      ],
      technicalSkills: ["Python, C++, Java"],
      awards: [
        "Valedictorian",
        "Presidential Youth Fitness Award recipient",
        "2x Greater Raider Recipient",
      ],
      experience: [
        "Tournament Organizer/Admin (10/04/2024 - current)",
        "Founder/Owner of Cobalt Esports Organization — Top 22 in RLCS (Pro Scene), over $20K prize distribution across NA/EU/OCE",
      ],
    },

    // List of Sherri's Information
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

    // List of Nathan's Information
    {
      name: "Nathan Sheppard",
      role: "Programmer (Frontend & Backend)",
      photo: nathan,
      education: ["B.S. in Computer Science, CSU Sacramento (Expected 2027)"],
      professionalSkills: ["Full-stack Development", "Problem Solving", "Code Optimization"],
      technicalSkills: ["Java, C++, JavaScript, Spring Boot, React (Vite)"],
      awards: [],
      experience: ["3rd-year CS major with experience in both front-end and back-end programming", "Created a simple video game as a personal project (8/30/2025)"],
    },

    // List of Ram's Information
    {
      name: "Ram Tristan Lobo",
      role: "Designer",
      photo: ram,
      education: ["B.S. in Computer Engineering, CSU Sacramento (Expected 2027)"],
      professionalSkills: ["UI/UX Design", "Leadership", "Collaboration", "UML Design"],
      technicalSkills: ["Java, C, UML"],
      awards: [],
      experience: ["Leads UML design efforts for majority of interfaces", "Ex Vice-President / Current Treasurer of Society of Asian Scientists and Engineers (SASE) at Sac State (August 2024 - Present)"],
    },

    // List of Ben's Information
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

    // List of Nick's Information
    {
      name: "Nick Allen",
      role: "Designer",
      photo: nick,
      education: ["B.S. in Computer Science, CSU Sacramento (Expected 2027)"],
      professionalSkills: ["UI/UX Design", "Collaboration & Communication", "UML Design"],
      technicalSkills: ["Java, UML"],
      awards: [],
      experience: ["Leads UML design efforts for majority of interfaces", "2nd Year Computer Science student", "Experience in Mod Development"],
    },

    // List of Lanz's Information
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

    // List of Wyatt's Information
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

    // List of Niyati's Information
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
    // The elements that make up the About Page
    <div className="about-container">
      <h1 className="about-title"> Meet the Team </h1>
      <p className="about-description">
        The <strong>Project Charlie</strong> team from California State University, Sacramento
        consists of passionate developers, designers, analysts, and quality assurance engineers
        working together to create a secure, fair, and user-friendly
        <strong> Electronic Voting System</strong>.
      </p>

      <div className="team-grid">
        {team.map((member, index) => (
          <div
            key={index}
            className="team-card" // Combined existing 'teamcard' and new styles
          >
            {/* Photo */}
            <img
              src={member.photo}
              alt={member.name}
              className="team-photo"
            />

            {/* Name & Role */}
            <h2 className="member-name">{member.name}</h2>
            <p className="member-role">{member.role}</p>

            {/* Education */}
            <section className="member-section">
              <h3 className="section-title">Education</h3>
              <ul className="section-list">
                {member.education.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            </section>

            {/* Professional Skills */}
            <section className="member-section">
              <h3 className="section-title">Professional Skills</h3>
              <ul className="section-list">
                {member.professionalSkills.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </section>

            {/* Technical Skills */}
            <section className="member-section">
              <h3 className="section-title">Technical Skills</h3>
              <ul className="section-list">
                {member.technicalSkills.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </section>

            {/* Awards */}
            {member.awards.length > 0 && (
              <section className="member-section">
                <h3 className="section-title">Awards & Recognition</h3>
                <ul className="section-list">
                  {member.awards.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Experience */}
            {member.experience.length > 0 && (
              <section>
                <h3 className="section-title">Experience</h3>
                <ul className="section-list">
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