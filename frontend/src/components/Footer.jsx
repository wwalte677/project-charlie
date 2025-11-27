import React from "react";
import {FaLinkedin,FaGithub,FaFacebook,FaTwitter,FaInstagram,} from "react-icons/fa";
import "../styles/main.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/project-charlie-7999b9392/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/projectcharlie784-oss" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61584118451233" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://x.com/ProjectChxarlie" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/proje.ctcharlie/" target="_blank" rel="noopener noreferrer">
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