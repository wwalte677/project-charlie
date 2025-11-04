import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{
        position: "sticky",
        backgroundColor: "#b64444ff",
        color: "#ffffffff",
        padding: "1rem 0",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
  
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
          <FaGithub size={24} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
          <FaFacebook size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
          <FaTwitter size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
          <FaInstagram size={24} />
        </a>
      </div>

      <p style={{ fontSize: "1rem", margin: 0 }}>
        © 2025 Project Charlie · CSC-131 – Electronic Voting System
      </p>
      <p style={{ fontSize: "0.9rem", margin: 0 }}>
        College of Engineering and Computer Science · Department of Computer Science
      </p>
    </footer>
  );
}
