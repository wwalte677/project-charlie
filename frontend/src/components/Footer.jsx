import React from "react";
import {FaLinkedin,FaGithub,FaFacebook,FaTwitter,FaInstagram,} from "react-icons/fa";
import "../styles/main.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>

      <p className="footer-main">
        2025 <span>Project Charlie</span> · CSC-131 – Electronic Voting System
      </p>
      <p className="footer-main">
        College of Engineering and Computer Science · Department of Computer Science
      </p>
    </footer>
  );
}