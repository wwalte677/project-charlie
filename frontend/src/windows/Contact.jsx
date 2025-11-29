import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      const serviceID = 'service_pglcapl';
      const templateID = 'template_g6rvmi1';
      const publicKey = 'vJyATfpi2tEI1o8oU';

      emailjs
        .sendForm(serviceID, templateID, form.current, {
          publicKey: publicKey,
        })
        .then(
          (result) => {
            console.log('SUCCESS!', result.text);
            alert("Message was sent!");

            form.current.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
            alert("Message was not sent, try again!");
          }
        );
  };

  return (
    <div className="goal-container" style={{ paddingTop: "6rem" }}>
      <div className="admin-card" style={{ maxWidth: "600px" }}>
        <h2 className="admin-title" style={{ marginBottom: "1.5rem" }}>
          Contact Us
        </h2>

        <form ref={form} onSubmit={sendEmail} className="admin-form">

          <div style={{ display: "flex", gap: "1rem", width: "100%" }}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="input-field"
              required
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="input-field"
              required
            />
          </div>

          <div style={{ display: "flex", gap: "1rem", width: "100%" }}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input-field"
              required
            />

            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number (optional)"
              className="input-field"
            />
          </div>

          <div style={{ display: "flex", gap: "1rem", width: "100%" }}>
            <textarea
              name="message"
              placeholder="Your message..."
              rows="4"
              className="input-field"
              style={{ resize: "none" }}
              required
            />
          </div>
          
          <button type="submit" className="login-button" style={{ marginTop: "1rem" }}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
